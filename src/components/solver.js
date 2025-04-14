export function solveSudoku(grid) {
    const newGrid = JSON.parse(JSON.stringify(grid));
    
    function isValid(row, col, num) {
      // Check row
      for (let x = 0; x < 9; x++) {
        if (newGrid[row][x] === num) return false;
      }
      
      // Check column
      for (let x = 0; x < 9; x++) {
        if (newGrid[x][col] === num) return false;
      }
      
      // Check 3x3 box
      const boxStartRow = row - row % 3;
      const boxStartCol = col - col % 3;
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (newGrid[boxStartRow + i][boxStartCol + j] === num) return false;
        }
      }
      
      return true;
    }
    
    function solve() {
      for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
          if (newGrid[row][col] === 0) {
            for (let num = 1; num <= 9; num++) {
              if (isValid(row, col, num)) {
                newGrid[row][col] = num;
                if (solve()) {
                  return true;
                }
                newGrid[row][col] = 0;
              }
            }
            return false;
          }
        }
      }
      return true;
    }
    
    return solve() ? newGrid : null;
  }
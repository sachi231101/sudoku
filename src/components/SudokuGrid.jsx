import React, { useState } from 'react';
import Cell from './Cell';
import { solveSudoku } from './solver';
import Controls from './Controls';

const SudokuGrid = () => {
  const [grid, setGrid] = useState(Array(9).fill().map(() => Array(9).fill(0)));
  const [isSolved, setIsSolved] = useState(false);

  const handleCellChange = (row, col, value) => {
    const newGrid = [...grid];
    newGrid[row][col] = value === '' ? 0 : parseInt(value, 10);
    setGrid(newGrid);
    setIsSolved(false);
  };

  const handleSolve = () => {
    const solvedGrid = solveSudoku(grid);
    if (solvedGrid) {
      setGrid(solvedGrid);
      setIsSolved(true);
    } else {
      alert('No solution exists for this Sudoku puzzle!');
    }
  };

  const handleClear = () => {
    setGrid(Array(9).fill().map(() => Array(9).fill(0)));
    setIsSolved(false);
  };

  return (
    <div className="sudoku-container">
      <h1>Sudoku Solver</h1>
      <div className="grid">
        {grid.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((cell, colIndex) => (
              <Cell
                key={`${rowIndex}-${colIndex}`}
                value={cell === 0 ? '' : cell}
                onChange={(value) => handleCellChange(rowIndex, colIndex, value)}
                isSolved={isSolved}
              />
            ))}
          </div>
        ))}
        <br />
              <Controls onSolve={handleSolve} onClear={handleClear} />

      </div>
    </div>
  );
};

export default SudokuGrid;
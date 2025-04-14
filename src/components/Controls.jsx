import React from 'react';

const Controls = ({ onSolve, onClear }) => {
  return (
    <div className="controls">
      <button onClick={onSolve}>Solve</button>
      <button onClick={onClear}>Clear</button>
    </div>
  );
};

export default Controls;
import React from 'react';

const Cell = ({ value, onChange, isSolved }) => {
  const handleChange = (e) => {
    const input = e.target.value;
    if (input === '' || (input >= '1' && input <= '9')) {
      onChange(input);
    }
  };

  return (
    <input
      type="text"
      className={`cell ${isSolved ? 'solved' : ''}`}
      value={value}
      onChange={handleChange}
      maxLength="1"
      disabled={isSolved}
    />
  );
};

export default Cell;
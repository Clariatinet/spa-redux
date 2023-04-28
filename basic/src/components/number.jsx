import React, { useState } from 'react';

const Number = () => {
  const [number, setNumber] = useState(0);
  return (
    <div>
      <div>{number}</div>
      <button
        onClick={() => {
          setNumber((prev) => prev + 1);
          setNumber((prev) => prev + 1);
          setNumber((prev) => prev + 1);
        }}
      >
        버튼
      </button>
    </div>
  );
};

export default Number;

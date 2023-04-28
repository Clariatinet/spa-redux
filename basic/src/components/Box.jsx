import React from 'react';
import styled from 'styled-components';

const Box = () => {
  const boxList = ['red', 'green', 'blue'];
  const getBoxName = (color) => {
    switch (color) {
      case 'red':
        return '빨간 박스';
      case 'green':
        return '초록 박스';
      case 'blue':
        return '파란 박스';
      default:
        return '검정 박스';
    }
  };
  return (
    <div>
      {boxList.map((box) => (
        <StBox borderColor={box}>{getBoxName(box)}</StBox>
      ))}
    </div>
  );
};

export default Box;

const StBox = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid ${(props) => props.borderColor};
  margin: 20px;
`;

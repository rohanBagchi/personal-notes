import { useState, useEffect, useRef } from 'react';

const edges = [
  [-1, 0],
  [+1, 0],
  [0, -1],
  [0, +1],
];

const initialOcean = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];

const initialVisitedCells = [...initialOcean];

const FindingIslands = () => {
  const refToVisitedCells = useRef();
  const [ocean, setOcean] = useState(initialOcean);

  refToVisitedCells.current = initialVisitedCells;

  const [totalIslands, setTotalIslands] = useState(0);

  useEffect(() => {
    const processNeighbors = (currentRowIndex, currentColIndex) => {
      edges.forEach(([edgeX, edgeY]) => {
        const newX = currentRowIndex + edgeX;
        const newY = currentColIndex + edgeY;

        if (
          newX < 0 ||
          newY < 0 ||
          newX > ocean.length - 1 ||
          newY > ocean[0].length - 1
        )
          return;

        if (
          ocean[newX][newY] === 1 &&
          refToVisitedCells.current[newX][newY] !== 2
        ) {
          refToVisitedCells.current[newX][newY] = 2;
          processNeighbors(newX, newY, ocean);
        }
      });
    };

    const processOcean = () => {
      const numberOfIslands = 0;

      console.log('totalIslands in processOcean', totalIslands);

      for (let row = 0; row < ocean.length; row++) {
        for (let col = 0; col < ocean[row].length; col++) {
          const currentCell = ocean[row][col];

          if (currentCell === 1 && refToVisitedCells.current[row][col] !== 2) {
            refToVisitedCells.current[row][col] = 2;
            setTotalIslands((prevTotalIslands) => prevTotalIslands + 1);

            processNeighbors(row, col, ocean);
          }
        }
      }

      console.log('refToVisitedCells.current = ', refToVisitedCells.current);

      return numberOfIslands;
    };

    processOcean();
  }, [ocean]);

  const putLand = (x, y) => {
    refToVisitedCells.current = initialVisitedCells;
    setTotalIslands(0);

    const newValue = ocean[x][y] === 1 ? 0 : 1;

    refToVisitedCells.current[x][y] = newValue;

    setOcean((preOceanState) =>
      preOceanState.map((oceanRow, rowIndex) =>
        oceanRow.map((cell, cellIndex) => {
          if (rowIndex === x && cellIndex === y) {
            return newValue;
          }

          return cell;
        })
      )
    );
  };

  const oceanLayout = ocean.map((oceanRow, rowIndex) => {
    const row = oceanRow.map((cell, cellIndex) => (
      <button
        type="button"
        key={rowIndex + cellIndex}
        style={{
          backgroundColor: cell === 0 ? '#ffffff' : 'palevioletred',
          height: '30px',
          width: '30px',
          border: '1px solid #d8d8d8',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onClick={() => putLand(rowIndex, cellIndex)}
      >
        {cell}
      </button>
    ));

    return (
      <div style={{ display: 'flex' }} key={rowIndex}>
        {row}
      </div>
    );
  });

  return (
    <div>
      {oceanLayout} <p>Total Islands: {totalIslands}</p>
    </div>
  );
};

export default FindingIslands;

import { useState, useEffect } from 'react';

// const ocean = [
//   [0, 0, 0, 0],
//   [0, 0, 0, 0],
//   [0, 0, 0, 0],
//   [0, 0, 0, 0],
// ];

const edges = [
  [-1, 0],
  [+1, 0],
  [0, -1],
  [0, +1],
];

// const numberOfIslands = 0;

const initialOcean = [
  [1, 0, 0, 0],
  [1, 1, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];

const recordedCells = {};

const FindingIslands = () => {
  const [ocean, setOcean] = useState(initialOcean);
  const [totalIslands, setTotalIslands] = useState(0);

  useEffect(() => {
    let result = 0;

    const getAdjacentIslands = (x, y) => {
      const adjacentIslands = [];

      edges.forEach((edge) => {
        const newX = x + edge[0];
        const newy = y + edge[1];

        if (
          newX < 0 ||
          newy < 0 ||
          newy > ocean.length - 1 ||
          newX > ocean[0].length - 1
        )
          return false;
        const element = ocean[newX][newy];

        if (element === 1) {
          adjacentIslands.push([newX, newy]);
        }
      });

      return adjacentIslands;
    };

    const isLandAvailableInAnEdge = (x, y) =>
      edges.filter((edge) => {
        const newX = x + edge[0];
        const newy = y + edge[1];

        if (
          newX < 0 ||
          newy < 0 ||
          newy > ocean.length - 1 ||
          newX > ocean[0].length - 1
        )
          return false;
        const element = ocean[newX][newy];

        return element !== 0;
      });

    const incrementResult = (rowIndex, cellIndex) => {
      result += 1;
      recordedCells[`${rowIndex}-${cellIndex}`] = 1;
    };

    ocean.forEach((oceanRow, rowIndex) => {
      oceanRow.forEach((cell, cellIndex) => {
        // recordedCells[`${rowIndex}-${cellIndex}`] = cell;

        if (cell === 1) {
          const landAvailableInEdge = getAdjacentIslands(rowIndex, cellIndex);
          if (rowIndex === 0 && cellIndex === 0) {
            incrementResult(rowIndex, cellIndex);
          } else if (landAvailableInEdge?.length > 0) {
            // check if edges have been recorded
            const hasPreRecordedEdges = landAvailableInEdge.filter(
              ([x, y]) => recordedCells[`${x}-${y}`] === 1
            );

            // if one or more neighbouring cell has been registered before, ignore current one as it is part of the neighbouring island.
            // else, record the current cell

            if (hasPreRecordedEdges.length === 0) {
              incrementResult(rowIndex, cellIndex);
            } else {
              recordedCells[`${rowIndex}-${cellIndex}`] = 1;
            }
          } else if (landAvailableInEdge.length === 0) {
            incrementResult(rowIndex, cellIndex);
          }
        }

        console.log({ recordedCells });
      });
    });

    setTotalIslands(result);
  }, [ocean]);

  const putLand = (x, y) => {
    const newOcean = [...ocean];

    const newValue = newOcean[x][y] === 1 ? 0 : 1;

    newOcean[x][y] = newValue;

    setOcean(newOcean);
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

    return <div style={{ display: 'flex' }}>{row}</div>;
  });

  return (
    <div>
      {oceanLayout} <p>Total Islands: {totalIslands}</p>
    </div>
  );
};

export default FindingIslands;

let ocean = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];

const edges = [
  [-1, 0],
  [+1, 0],
  [0, -1],
  [0, +1],
];

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

    if (ocean[newX][newY] === 1) {
      ocean[newX][newY] = 2;
      processNeighbors(newX, newY, ocean);
    }
  });
};

const processOcean = () => {
  let numberOfIslands = 0;

  for (let row = 0; row < ocean.length; row++) {
    for (let col = 0; col < ocean[row].length; col++) {
      const currentCell = ocean[row][col];

      if (currentCell === 1) {
        ocean[row][col] = 2;
        numberOfIslands += 1;

        processNeighbors(row, col, ocean);
      }
    }
  }

  return numberOfIslands;
};

const putLand = (row, col) => {
  const newOcean = ocean.map((oceanRow) => {
    const newRow = oceanRow.map((oceanCell) => {
      if (oceanCell === 2) return 1;
      return oceanCell;
    });

    return newRow;
  });

  ocean = newOcean;

  ocean[row][col] = ocean[row][col] === 1 ? 0 : 1;

  const numIslands = processOcean();
  console.log({ numIslands });
};

putLand(0, 0);
putLand(1, 0);
putLand(1, 1);
putLand(3, 3);
putLand(2, 2);

const FindingIslands = () => <p>FindingIslands</p>;

export default FindingIslands;

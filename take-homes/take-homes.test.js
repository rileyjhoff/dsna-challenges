// Code a function to flatten an array into one single array no matter how many array it may contain,
// for example [1,2,3[4,5]] becomes [1,2,3,4,5] or [1,[2],[3,[4,5]]] becomes [1,2,3,4,5]
function flattenArray(arr, flattenedArray = []) {
  for (const item of arr) {
    if (item.length) flattenArray(item, flattenedArray);
    else flattenedArray.push(item);
  }
  return flattenedArray;
}

test('flatten array', () => {
  expect(flattenArray([1, [2], [3, [4, 5]]])).toEqual([1, 2, 3, 4, 5]);
  expect(flattenArray([1, 2, 3, [4, 5]])).toEqual([1, 2, 3, 4, 5]);
});

// Create a function that checks if a gameboard for the boardgame "connect 4" is a winning game board.
function isWinningBoard(matrix) {
  // top row = 0
  // bottom row = 6
  let won = false;
  // check vertical
  for (let i = 6; i >= 3; i--) {
    for (let j = 6; j >= 0; j--) {
      if (
        matrix[i][j] === 'red' &&
        matrix[i - 1][j] === 'red' &&
        matrix[i - 2][j] === 'red' &&
        matrix[i - 3][j] === 'red'
      ) {
        won = true;
        break;
      }
      if (
        matrix[i][j] === 'blue' &&
        matrix[i - 1][j] === 'blue' &&
        matrix[i - 2][j] === 'blue' &&
        matrix[i - 3][j] === 'blue'
      ) {
        won = true;
        break;
      }
    }
    if (won) break;
  }
  // check horizontal
  if (!won) {
    for (let i = 6; i >= 0; i--) {
      for (let j = 6; j >= 3; j--) {
        if (
          matrix[i][j] === 'red' &&
          matrix[i][j - 1] === 'red' &&
          matrix[i][j - 2] === 'red' &&
          matrix[i][j - 3] === 'red'
        ) {
          won = true;
          break;
        }
        if (
          matrix[i][j] === 'blue' &&
          matrix[i][j - 1] === 'blue' &&
          matrix[i][j - 2] === 'blue' &&
          matrix[i][j - 3] === 'blue'
        ) {
          won = true;
          break;
        }
      }
      if (won) break;
    }
  }
  //  check up right to down left diagonal
  if (!won) {
    for (let i = 3; i >= 0; i--) {
      for (let j = 6; j >= 3; j--) {
        if (
          matrix[i][j] === 'red' &&
          matrix[i + 1][j - 1] === 'red' &&
          matrix[i + 2][j - 2] === 'red' &&
          matrix[i + 3][j - 3] === 'red'
        ) {
          won = true;
          break;
        }
        if (
          matrix[i][j] === 'blue' &&
          matrix[i + 1][j - 1] === 'blue' &&
          matrix[i + 2][j - 2] === 'blue' &&
          matrix[i + 3][j - 3] === 'blue'
        ) {
          won = true;
          break;
        }
      }
      if (won) break;
    }
  }
  // check up left to down right diagonal
  if (!won) {
    for (let i = 3; i >= 0; i--) {
      for (let j = 3; j >= 0; j--) {
        if (
          matrix[i][j] === 'red' &&
          matrix[i + 1][j + 1] === 'red' &&
          matrix[i + 2][j + 2] === 'red' &&
          matrix[i + 3][j + 3] === 'red'
        ) {
          won = true;
          break;
        }
        if (
          matrix[i][j] === 'blue' &&
          matrix[i + 1][j + 1] === 'blue' &&
          matrix[i + 2][j + 2] === 'blue' &&
          matrix[i + 3][j + 3] === 'blue'
        ) {
          won = true;
          break;
        }
      }
      if (won) break;
    }
  }
  return won;
}

test('connect 4', () => {
  const winningGameboardVertical = [
    [, , , , , ,],
    [, , , , , ,],
    [, , , , , ,],
    [, , 'blue', , , ,],
    [, 'red', 'blue', , , ,],
    [, 'red', 'blue', 'blue', 'blue', 'red'],
    [, 'red', 'blue', 'red', 'red', 'blue'],
  ];
  const winningGameboardHorizontal = [
    [, , , , , ,],
    [, , 'blue', , , ,],
    [, 'red', , , 'red', ,],
    [, 'blue', 'blue', 'blue', 'blue', ,],
    ['red', 'red', 'red', 'blue', 'blue', ,],
    ['blue', 'red', 'blue', 'blue', 'blue', 'red'],
    ['red', 'red', 'blue', 'red', 'red', 'blue'],
  ];
  const winningGameboardDiagonal1 = [
    [, , , , , ,],
    [, , , , , ,],
    [, , , , , ,],
    [, 'blue', , , 'blue', ,],
    [, , 'red', 'blue', 'red', 'blue', ,],
    ['red', , 'blue', 'blue', 'blue', 'red', 'red'],
    ['red', 'blue', 'red', 'blue', 'red', 'red', 'blue'],
  ];
  const winningGameboardDiagonal2 = [
    [, , , , , ,],
    [, , , , , ,],
    [, 'red', , , , ,],
    [, 'red', 'blue', 'blue', 'blue', ,],
    [, 'blue', 'red', 'red', 'blue', ,],
    [, 'blue', 'red', 'blue', 'blue', 'blue', 'red'],
    [, 'red', 'red', 'blue', 'red', 'red', 'blue'],
  ];
  const losingGameboard1 = [
    ['red', 'red', 'blue', 'blue', 'red', 'blue', 'red'],
    ['blue', 'blue', 'blue', 'red', 'blue', 'red', 'blue'],
    ['red', 'red', 'blue', 'red', 'blue', 'red', 'blue'],
    ['blue', 'blue', 'red', 'red', 'blue', 'blue', 'red'],
    ['red', 'red', 'blue', 'blue', 'red', 'red', 'blue'],
    ['blue', 'red', 'blue', 'blue', 'blue', 'red', 'red'],
    ['red', 'red', 'blue', 'red', 'red', 'blue', 'blue'],
  ];
  expect(isWinningBoard(winningGameboardVertical)).toEqual(true);
  expect(isWinningBoard(winningGameboardHorizontal)).toEqual(true);
  expect(isWinningBoard(winningGameboardDiagonal1)).toEqual(true);
  expect(isWinningBoard(winningGameboardDiagonal2)).toEqual(true);
  expect(isWinningBoard(losingGameboard1)).toEqual(false);
});

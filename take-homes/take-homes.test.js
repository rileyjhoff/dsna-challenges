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

// take an array of arrays where each array has 2 data points
// ex. [[data, data],[data,data]] and turn it into an object where the
// 1st data point of each array is the key and the 2nd data point is the value within the object.

function arrayOfArraysToObj(arr) {
  let obj = {};
  for (const item of arr) {
    obj[item[0]] = item[1];
  }
  return obj;
}

test('array of arrays to obj', () => {
  expect(
    arrayOfArraysToObj([
      [1, 234],
      [2, 555],
      [1234, 2342],
      [222, 343],
    ])
  ).toEqual({
    1: 234,
    2: 555,
    1234: 2342,
    222: 343,
  });
});

// Write a function that takes an array and two letters,
// and returns true if the two letters appear in the array at least once.

function checkIfTwoLettersInArr(arr, letters) {
  return arr.some((item) => item.includes(letters));
}

test('check if two letters in arr', () => {
  expect(
    checkIfTwoLettersInArr(
      [
        'the lions of teranga',
        'tiger woods',
        'The Truman Show',
        'Shutter Island',
        'The Gold Rush',
      ],
      'ti'
    )
  ).toEqual(true);
  expect(
    checkIfTwoLettersInArr(
      [
        'the lions of teranga',
        'tiger woods',
        'The Truman Show',
        'Shutter Island',
        'The Gold Rush',
      ],
      'at'
    )
  ).toEqual(false);
});

// image processor
class Deck {
  constructor() {
    this.list = [];
  }

  addCard(value, suit, originalPosition) {
    this.list[this.list.length] = { value, suit, originalPosition };
  }

  getByValueAndSuit(value, suit) {
    for (const card of this.list) {
      if (card.value === value && card.suit === suit) return card;
    }
  }

  getByPosition(index) {
    return this.list[index - 1];
  }

  getLastCard() {
    return this.list[this.list.length - 1];
  }

  getFirstCard() {
    return this.list[0];
  }
}

function scanner(values, suits, sortingInstructions) {
  const deck = new Deck();
  let sortIndex = 0;
  if (sortingInstructions) {
    if (sortingInstructions === 'suits') {
      const lookingFor = ['clubs', 'diamonds', 'hearts', 'spades'];
      let lookingForIndex = 0;
      while (sortIndex < 52) {
        if (sortIndex % 13 === 0) {
          lookingForIndex++;
        }
        let iter = sortIndex;
        while (suits[sortIndex] !== lookingFor[lookingForIndex]) {
          if (suits[sortIndex] === lookingFor[lookingForIndex]) break;
          if (suits[iter + 1] < suits[iter]) {
            const holdSuit = suits[iter + 1];
            const holdValue = values[iter + 1];
            suits[iter + 1] = suits[iter];
            values[iter + 1] = values[iter];
            suits[iter] = holdSuit;
            values[iter] = holdValue;
          }
          if (suits[iter] === lookingFor[lookingForIndex]) {
            iter = sortIndex;
          } else iter++;
        }
        console.log(sortIndex);
        sortIndex++;
      }
      return values;
    }
  }
}

function sorter(sortingInstructions) {}

test('image processor', () => {
  const deck = scanner(
    [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
      11, 12, 13, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 1, 2, 3, 4, 5, 6,
      7, 8, 9, 10, 11, 12, 13,
    ],
    [
      'clubs',
      'hearts',
      'diamonds',
      'spades',
      'clubs',
      'hearts',
      'diamonds',
      'spades',
      'clubs',
      'hearts',
      'diamonds',
      'spades',
      'clubs',
      'hearts',
      'diamonds',
      'spades',
      'clubs',
      'hearts',
      'diamonds',
      'spades',
      'clubs',
      'hearts',
      'diamonds',
      'spades',
      'clubs',
      'hearts',
      'diamonds',
      'spades',
      'clubs',
      'hearts',
      'diamonds',
      'spades',
      'clubs',
      'hearts',
      'diamonds',
      'spades',
      'clubs',
      'hearts',
      'diamonds',
      'spades',
      'clubs',
      'hearts',
      'diamonds',
      'spades',
      'clubs',
      'hearts',
      'diamonds',
      'spades',
      'clubs',
      'hearts',
      'diamonds',
      'spades',
    ],
    'suits'
  );
  console.log(deck);
  // expect(deck.list).toEqual([
  //   { value: 1, suit: 'clubs', originalPosition: 1 },
  //   { value: 2, suit: 'hearts', originalPosition: 2 },
  //   { value: 3, suit: 'diamonds', originalPosition: 3 },
  //   { value: 4, suit: 'spades', originalPosition: 4 },
  //   { value: 5, suit: 'clubs', originalPosition: 5 },
  // ]);
  // expect(deck.getByValueAndSuit(1, 'clubs')).toEqual({
  //   value: 1,
  //   suit: 'clubs',
  //   originalPosition: 1,
  // });
  // expect(deck.getByPosition(1)).toEqual({
  //   value: 1,
  //   suit: 'clubs',
  //   originalPosition: 1,
  // });
  // expect(deck.getFirstCard()).toEqual({
  //   value: 1,
  //   suit: 'clubs',
  //   originalPosition: 1,
  // });
  // expect(deck.getLastCard()).toEqual({
  //   value: 5,
  //   suit: 'clubs',
  //   originalPosition: 5,
  // });
});

// CH-alien-dictionary
function isSorted(words, order) {
  const orderArr = order.split('');
  for (let i = 0; i < words.length - 1; i++) {
    const indexOfWordFirstLetter = orderArr.indexOf(words[i][0]);
    const indexOfNextWordFirstLetter = orderArr.indexOf(words[i + 1][0]);
    if (indexOfNextWordFirstLetter < indexOfWordFirstLetter) return false;
    if (indexOfNextWordFirstLetter === indexOfWordFirstLetter) {
      const wordLetters = words[i].split('');
      const nextWordLetters = words[i + 1].split('');
      for (let j = 1; j < wordLetters.length; j++) {
        const indexOfWordLetter = orderArr.indexOf(wordLetters[j]);
        const indexOfNextWordLetter = orderArr.indexOf(nextWordLetters[j]);
        if (indexOfNextWordLetter < indexOfWordLetter) return false;
      }
    }
  }
  return true;
}

test('alien dictionary', () => {
  const output1 = isSorted(['hello', 'leetcode'], 'hlabcdefgijkmnopqrstuvwxyz');
  expect(output1).toBe(true);
  const output2 = isSorted(
    ['word', 'world', 'row'],
    'worldabcefghijkmnpqstuvxyz'
  );
  expect(output2).toBe(false);
  const output3 = isSorted(['apple', 'app'], 'abcdefghijklmnopqrstuvwxyz');
  expect(output3).toBe(false);
});

// CH-convenience-store
function changeEnough(coins, amount) {
  const change =
    coins[0] * 0.25 + coins[1] * 0.1 + coins[2] * 0.05 + coins[3] * 0.01;
  return change >= amount ? true : false;
}

test('convenience store', () => {
  const output1 = changeEnough([2, 100, 0, 0], 14.11);
  expect(output1).toBe(false);
  const output2 = changeEnough([0, 0, 20, 5], 0.75);
  expect(output2).toBe(true);
  const output3 = changeEnough([30, 40, 20, 5], 12.55);
  expect(output3).toBe(true);
  const output4 = changeEnough([10, 0, 0, 50], 3.85);
  expect(output4).toBe(false);
  const output5 = changeEnough([1, 0, 5, 219], 19.99);
  expect(output5).toBe(false);
});

// CH-jewels-stones
function countJewels(jewels, stones) {
  const jewelsArr = jewels.split('');
  const stonesArr = stones.split('');
  const stonesCountObj = stonesArr.reduce((acc, curr) => {
    if (acc[curr]) {
      acc[curr]++;
    } else acc[curr] = 1;
    return acc;
  }, {});
  let jewelCount = 0;
  for (let i = 0; i < jewelsArr.length; i++) {
    if (stonesCountObj[jewelsArr[i]]) {
      jewelCount += stonesCountObj[jewelsArr[i]];
    }
  }
  return jewelCount;
}

test('jewels stones', () => {
  const output1 = countJewels('aA', 'aAAbbbb');
  expect(output1).toBe(3);
  const output2 = countJewels('z', 'ZZ');
  expect(output2).toBe(0);
});

// CH-pluralize
function pluralize(words) {
  const pluralizedWords = [];
  for (let i = 0; i < words.length; i++) {
    const initialLength = words.length;
    for (let j = i + 1; j < words.length; j++) {
      if (words[i] === words[j]) {
        words.splice(j, 1);
        j--;
      }
    }
    if (words.length < initialLength) {
      pluralizedWords.push(words[i] + 's');
    } else pluralizedWords.push(words[i]);
  }
  return pluralizedWords;
}

test('pluralize', () => {
  const output1 = pluralize(['cow', 'pig', 'cow', 'cow']);
  expect(output1).toEqual(['cows', 'pig']);
  const output2 = pluralize(['table', 'table', 'table']);
  expect(output2).toEqual(['tables']);
  const output3 = pluralize(['chair', 'pencil', 'arm']);
  expect(output3).toEqual(['chair', 'pencil', 'arm']);
});

// CH-progress-days
function progressDays(miles) {
  let progressCount = 0;
  for (let i = 0; i < miles.length - 1; i++) {
    if (miles[i + 1] > miles[i]) progressCount++;
  }
  return progressCount;
}

test('progress days', () => {
  const output1 = progressDays([10, 11, 12, 9, 10]);
  expect(output1).toBe(3);
  const output2 = progressDays([6, 5, 4, 3, 2, 9]);
  expect(output2).toBe(1);
  const output3 = progressDays([9, 9]);
  expect(output3).toBe(0);
});

// CH-total-volume
function totalVolume(...boxes) {
  const boxesArr = [...boxes];
  let totalVolume = 0;
  for (let i = 0; i < boxesArr.length; i++) {
    totalVolume += boxesArr[i].reduce((acc, curr) => {
      return acc * curr;
    }, 1);
  }
  return totalVolume;
}

test('total volume', () => {
  const output1 = totalVolume([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1]);
  expect(output1).toBe(63);
  const output2 = totalVolume([2, 2, 2], [2, 1, 1]);
  expect(output2).toBe(10);
  const output3 = totalVolume([1, 1, 1]);
  expect(output3).toBe(1);
});

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

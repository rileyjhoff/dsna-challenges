// CH-roman-numerals
function convert(roman) {
  const key = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  const romanArr = roman.split('');
  let number = 0;
  for (let i = 0; i < romanArr.length; i++) {
    if (romanArr[i + 1]) {
      if (key[romanArr[i]] < key[romanArr[i + 1]]) {
        number += key[romanArr[i + 1]] - key[romanArr[i]];
        i++;
      } else number += key[romanArr[i]];
    } else number += key[romanArr[i]];
  }
  return number;
}

test('roman numerals', () => {
  const output1 = convert('III');
  expect(output1).toBe(3);
  const output2 = convert('XIX');
  expect(output2).toBe(19);
  const output3 = convert('XCII');
  expect(output3).toBe(92);
  const output4 = convert('MCXIV');
  expect(output4).toBe(1114);
});

// CH-equal-sides
function equalSides(numbers) {
  let leftSideSum = 0;
  let rightSideSum = numbers.reduce((acc, curr) => {
    return (acc += curr);
  }, 0);
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i - 1]) leftSideSum += numbers[i - 1];
    rightSideSum -= numbers[i];
    console.log(leftSideSum, rightSideSum, i);
    if (leftSideSum === rightSideSum) return i;
  }
  return -1;
}

test('equal sides', () => {
  const output1 = equalSides([1, 2, 3, 4, 3, 2, 1]);
  expect(output1).toBe(3);
  const output2 = equalSides([1, 100, 50, -51, 1, 1]);
  expect(output2).toBe(1);
  const output3 = equalSides([20, 10, -80, 10, 10, 15, 35]);
  expect(output3).toBe(0);
});

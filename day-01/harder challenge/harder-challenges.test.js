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

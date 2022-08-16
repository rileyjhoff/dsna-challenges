// CH-digits-sum-root
function rootDigit(n) {
  const digits = n.toString().split('');
  const numbers = digits.map((d) => +d);
  const sum = numbers.reduce((a, b) => a + b);
  return sum.toString().length === 1 ? sum : rootDigit(sum);
}

test('digits sum root', () => {
  const output1 = rootDigit(123);
  expect(output1).toEqual(6);
  const output2 = rootDigit(4322);
  expect(output2).toEqual(2);
  const output3 = rootDigit(999888777);
  expect(output3).toEqual(9);
});

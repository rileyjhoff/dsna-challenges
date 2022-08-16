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

// CH-fibonacci
function fib(n) {
  return n === 0 ? 0 : n === 1 ? 1 : fib(n - 1) + fib(n - 2);
}

test('fibonacci', () => {
  const output0 = fib(0);
  expect(output0).toEqual(0);
  const output1 = fib(1);
  expect(output1).toEqual(1);
  const output2 = fib(2);
  expect(output2).toEqual(1);
  const output6 = fib(6);
  expect(output6).toEqual(8);
  const output8 = fib(8);
  expect(output8).toEqual(21);
});

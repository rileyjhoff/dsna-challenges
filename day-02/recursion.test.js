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

// CH-largest-even
function largestEven(nums) {
  let first, next, rest;
  if (nums.length >= 3) {
    [first, next, ...rest] = nums;
    return first % 2 !== 0 && next % 2 !== 0
      ? largestEven([...rest])
      : first % 2 === 0
      ? next % 2 === 0
        ? first >= next
          ? largestEven([first, ...rest])
          : largestEven([next, ...rest])
        : largestEven([first, ...rest])
      : largestEven([next, ...rest]);
  }
  if (nums.length === 2) {
    [first, next] = nums;
    return first % 2 !== 0 && next % 2 !== 0
      ? -1
      : first % 2 === 0
      ? next % 2 === 0
        ? first >= next
          ? first
          : next
        : first
      : next;
  }
}

test('largest even', () => {
  const output1 = largestEven([3, 7, 2, 1, 7, 9, 10, 13]);
  expect(output1).toEqual(10);
  const output2 = largestEven([1, 3, 5, 7]);
  expect(output2).toEqual(-1);
  const output3 = largestEven([0, 19, 18973623]);
  expect(output3).toEqual(0);
});

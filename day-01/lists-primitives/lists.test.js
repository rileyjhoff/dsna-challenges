// CH03-fizz-buzz
function fizzBuzz(number) {
  const list = [];
  for (let i = 1; i <= number; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      list.push('FizzBuzz');
    } else if (i % 3 === 0) {
      list.push('Fizz');
    } else if (i % 5 === 0) {
      list.push('Buzz');
    } else list.push(i);
  }
  return list;
}

test('fizz buzz', () => {
  const list = fizzBuzz(16);
  expect(list).toEqual([
    1,
    2,
    'Fizz',
    4,
    'Buzz',
    'Fizz',
    7,
    8,
    'Fizz',
    'Buzz',
    11,
    'Fizz',
    13,
    14,
    'FizzBuzz',
    16,
  ]);
});

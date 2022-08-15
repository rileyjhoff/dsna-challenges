// CH-multiples-of-n
function multiplesOfN(n) {
  const list = [];
  for (let i = 1; i <= 50; i++) {
    if (i % n === 0) list.push(i);
  }
  return list;
}

test('multiplesOfN', () => {
  const list1 = multiplesOfN(5);
  expect(list1).toEqual([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
  const list2 = multiplesOfN(25);
  expect(list2).toEqual([25, 50]);
  const list3 = multiplesOfN(75);
  expect(list3).toEqual([]);
});

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

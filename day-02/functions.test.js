function filter(arr, predicate) {
  const filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (predicate(arr[i])) {
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
}

test('array filter', () => {
  const arr = [2, 6, 5];
  const predicate = (n) => n % 2 === 0;
  const filteredArr = filter(arr, predicate);
  expect(filteredArr).toEqual([2, 6]);
});

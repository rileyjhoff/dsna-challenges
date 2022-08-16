// CH-map
function map(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = callback(arr[i]);
  }
  return arr;
}

test('array map', () => {
  const arr = [1, 6, 5];
  const callback = (n) => n ** 2;
  const mappedArr = map(arr, callback);
  expect(mappedArr).toEqual([1, 36, 25]);
});

// CH-filter
function filter(arr, predicate) {
  const filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (predicate(arr[i])) {
      filteredArr[filteredArr.length] = arr[i];
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

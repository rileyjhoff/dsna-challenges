// CH-every
function every(arr, predicate) {
  for (let i = 0; i < arr.length; i++) {
    if (!predicate(arr[i])) return false;
  }
  return true;
}

test('array every', () => {
  const arr1 = [2, 4, 6];
  const predicate1 = (n) => n % 2 === 0;
  const everyArr1 = every(arr1, predicate1);
  expect(everyArr1).toBe(true);
  const arr2 = [1, 2, 3];
  const predicate2 = (n) => n % 2 === 0;
  const everyArr2 = every(arr2, predicate2);
  expect(everyArr2).toBe(false);
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

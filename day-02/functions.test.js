// CH-every
function every(arr, predicate) {
  for (let i = 0; i < arr.length; i++) {
    if (!predicate(arr[i])) return false;
  }
  return true;
}

test('array every', () => {
  const predicate = (n) => n % 2 === 0;
  const arr1 = [2, 4, 6];
  const everyReturn1 = every(arr1, predicate);
  expect(everyReturn1).toBe(true);
  const arr2 = [1, 2, 3];
  const everyReturn2 = every(arr2, predicate);
  expect(everyReturn2).toBe(false);
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

// CH-some
function some(arr, predicate) {
  for (let i = 0; i < arr.length; i++) {
    if (predicate(arr[i])) return true;
  }
  return false;
}

test('array some', () => {
  const predicate = (n) => n % 2 === 0;
  const arr1 = [1, 6, 5];
  const someReturn1 = some(arr1, predicate);
  expect(someReturn1).toBe(true);
  const arr2 = [1, 7, 3];
  const someReturn2 = some(arr2, predicate);
  expect(someReturn2).toBe(false);
});

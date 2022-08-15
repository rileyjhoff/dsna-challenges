// CH01-push
function push(arr, item) {
  arr[arr.length] = item;
  return arr.length;
}

test('array push', () => {
  const arr = [1, 2, 3];
  const newLength = push(arr, 4);
  expect(arr).toEqual([1, 2, 3, 4]);
  expect(newLength).toBe(4);
});

// CH02-pop
function pop(arr) {
  const lastItem = arr[arr.length - 1];
  arr.length = arr.length - 1;
  return lastItem;
}

test('array pop', () => {
  const arr = [1, 2, 3, 4];
  const removedItem = pop(arr);
  expect(arr).toEqual([1, 2, 3]);
  expect(removedItem).toBe(4);
});

// CH04-unshift
function unshift(arr, item) {
  for (let i = arr.length; i > 0; i--) {
    arr[i] = arr[i - 1];
  }
  arr[0] = item;
  return arr.length;
}

test('array unshift', () => {
  const arr = [1, 2, 3];
  const newLength = unshift(arr, 4);
  expect(arr).toEqual([4, 1, 2, 3]);
  expect(newLength).toBe(4);
});

// CH05-shift
function shift(arr) {
  const firstItem = arr[0];
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr.length = arr.length - 1;
  return firstItem;
}

test('array shift', () => {
  const arr = [1, 2, 3, 4];
  const removedItem = shift(arr);
  expect(arr).toEqual([2, 3, 4]);
  expect(removedItem).toBe(1);
});

// CH07-hasDuplicates
function hasDuplicates(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) return true;
    }
  }
  return false;
}

test('array hasDuplicates', () => {
  const arr1 = [1, 2, 3, 4];
  const hasDuplicates1 = hasDuplicates(arr1);
  const arr2 = [1, 2, 3, 2];
  const hasDuplicates2 = hasDuplicates(arr2);
  expect(hasDuplicates1).toBe(false);
  expect(hasDuplicates2).toBe(true);
});

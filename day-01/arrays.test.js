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
  const lastItem = pop(arr);
  expect(arr).toEqual([1, 2, 3]);
  expect(lastItem).toBe(4);
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

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

function unshift(arr, item) {
  arr.length = arr.length + 1;
  for (let i = arr.length - 1; i > 0; i--) {
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

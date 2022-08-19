function flattenArray(arr, flattenedArray = []) {
  for (const item of arr) {
    if (item.length) flattenArray(item, flattenedArray);
    else flattenedArray.push(item);
  }
  return flattenedArray;
}

test('flatten array', () => {
  expect(flattenArray([1, [2], [3, [4, 5]]])).toEqual([1, 2, 3, 4, 5]);
  expect(flattenArray([1, 2, 3, [4, 5]])).toEqual([1, 2, 3, 4, 5]);
});

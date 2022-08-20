// CH-inventory-checker
function inventoryChecker(inventory, item) {
  if (inventory[item.itemName] > 5) {
    return 'plenty of inventory';
  } else return `running low on ${item.itemName}`;
}

test('inventory checker', () => {
  const inventory = {
    eggs: 20,
    bananas: 10,
  };
  const lowItem = {
    itemName: 'grapes',
  };
  const plentyItem = {
    itemName: 'eggs',
  };
  const inventoryLowCheck = inventoryChecker(inventory, lowItem);
  const inventoryPlentyCheck = inventoryChecker(inventory, plentyItem);
  expect(inventoryLowCheck).toEqual('running low on grapes');
  expect(inventoryPlentyCheck).toEqual('plenty of inventory');
});

// CH01-push
function push(arr, item) {
  arr[arr.length] = item;
  return arr.length;
}

test('array push', () => {
  const arr = ['a', 'b', 'c'];
  const output = push(arr, 'd');
  expect(arr).toEqual(['a', 'b', 'c', 'd']);
  expect(output).toBe(4);
});

// CH02-pop
function pop(arr) {
  const lastItem = arr[arr.length - 1];
  arr.length = arr.length - 1;
  return lastItem;
}

test('array pop', () => {
  const arr = ['a', 'b', 'c'];
  const output = pop(arr);
  expect(arr).toEqual(['a', 'b']);
  expect(output).toBe('c');
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
  const arr = ['a', 'b', 'c'];
  const output = unshift(arr, 'd');
  expect(arr).toEqual(['d', 'a', 'b', 'c']);
  expect(output).toBe(4);
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
  const arr = ['a', 'b', 'c'];
  const output = shift(arr);
  expect(arr).toEqual(['b', 'c']);
  expect(output).toBe('a');
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
  const output1 = hasDuplicates(['j', 'o', 'w', 'w']);
  const output2 = hasDuplicates(['m', 'b', 'p', 'x']);
  expect(output1).toBe(true);
  expect(output2).toBe(false);
});

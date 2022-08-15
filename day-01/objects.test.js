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

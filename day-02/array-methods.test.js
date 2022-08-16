// CH-add-punctuation
function addPunctuation1(punctuation) {
  return function (str) {
    return str + punctuation;
  };
}

const addPunctuation2 = (punctuation) => (str) => str + punctuation;

test('add punctuation', () => {
  const addExcitement1 = addPunctuation1('!!!');
  const excitementReturn1 = addExcitement1('Hello World');
  expect(excitementReturn1).toEqual('Hello World!!!');
  const addExcitement2 = addPunctuation2('!!!');
  const excitementReturn2 = addExcitement2('Pokemon, catch em all');
  expect(excitementReturn2).toEqual('Pokemon, catch em all!!!');
  const addUnsure1 = addPunctuation1('?!?');
  const unsureReturn1 = addUnsure1('Hello World');
  expect(unsureReturn1).toEqual('Hello World?!?');
  const addUnsure2 = addPunctuation2('?!?');
  const unsureReturn2 = addUnsure2('Pokemon, catch em all');
  expect(unsureReturn2).toEqual('Pokemon, catch em all?!?');
});

// CH-every
function every(arr, predicate) {
  for (let i = 0; i < arr.length; i++) {
    if (!predicate(arr[i])) return false;
  }
  return true;
}

test('every', () => {
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

test('filter', () => {
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

test('map', () => {
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

test('some', () => {
  const predicate = (n) => n % 2 === 0;
  const arr1 = [1, 6, 5];
  const someReturn1 = some(arr1, predicate);
  expect(someReturn1).toBe(true);
  const arr2 = [1, 7, 3];
  const someReturn2 = some(arr2, predicate);
  expect(someReturn2).toBe(false);
});
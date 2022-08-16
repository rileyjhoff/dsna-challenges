// CH-add-first-element
function addFirst1(element) {
  return function (arr) {
    return Array(element).concat(arr);
  };
}

const addFirst2 = (element) => (arr) => Array(element).concat(arr);

test('add first element', () => {
  const addOrange1 = addFirst1('orange');
  const excitementReturn1 = addOrange1(['red', 'blue', 'green']);
  expect(excitementReturn1).toEqual(['orange', 'red', 'blue', 'green']);
  const addOrange2 = addFirst2('orange');
  const excitementReturn2 = addOrange2(['blue', 'blue', 'blue']);
  expect(excitementReturn2).toEqual(['orange', 'blue', 'blue', 'blue']);
  const addCat1 = addFirst1('cat');
  const unsureReturn1 = addCat1(['dog', 'bird', 'lizard']);
  expect(unsureReturn1).toEqual(['cat', 'dog', 'bird', 'lizard']);
  const addCat2 = addFirst2('cat');
  const unsureReturn2 = addCat2(['lizard', 'donkey', 'whale']);
  expect(unsureReturn2).toEqual(['cat', 'lizard', 'donkey', 'whale']);
});

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

// CH-say-it
function sayIt(word) {
  if (word === undefined) {
    return null;
  }
  let string = word;
  function next(nextWord) {
    if (nextWord === undefined) {
      return string;
    }
    string += ' ' + nextWord;
    return next;
  }
  return next;
}

test('say it', () => {
  const result = sayIt('hello')('my')('name')('is')('JavaScript')();
  expect(result).toEqual('hello my name is JavaScript');
});

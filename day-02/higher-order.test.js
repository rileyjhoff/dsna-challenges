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

// CH01-reverse-sentence-words
function reverseWords(sentence) {
  const words = sentence.split(' ');
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].split('').reverse().join('');
  }
  return words.join(' ');
}

test('reverseWords', () => {
  const string = reverseWords('alchemy rocks gold');
  expect(string).toEqual('ymehcla skcor dlog');
});

// CH02-title-case-words
function titleCase(sentence) {
  const words = sentence.split(' ');
  for (let i = 0; i < words.length; i++) {
    const firstLetter = words[i][0].toUpperCase();
    const restOfWord = words[i].slice(1, words[i].length).toLowerCase();
    words[i] = firstLetter + restOfWord;
  }
  return words.join(' ');
}

test('titleCase', () => {
  const string = titleCase('alchemy ROCKS goLD');
  expect(string).toEqual('Alchemy Rocks Gold');
});

// CH02.1-oddish-evenish
function oddishOrEvenish(number) {
  const numbers = number.split('');
  const sum = numbers.reduce((acc, curr) => {
    return (acc += Number(curr));
  }, 0);
  return sum % 2 === 0 ? 'Evenish' : 'Oddish';
}

test('oddishOrEvenish', () => {
  const output121 = oddishOrEvenish('121');
  expect(output121).toEqual('Evenish');
  const output41 = oddishOrEvenish('41');
  expect(output41).toEqual('Oddish');
});

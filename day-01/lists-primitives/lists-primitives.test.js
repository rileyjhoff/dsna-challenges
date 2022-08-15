// CH-multiples-of-n
function multiplesOfN(n) {
  const list = [];
  for (let i = 1; i <= 50; i++) {
    if (i % n === 0) list.push(i);
  }
  return list;
}

test('multiplesOfN', () => {
  const output5 = multiplesOfN(5);
  expect(output5).toEqual([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
  const output25 = multiplesOfN(25);
  expect(output25).toEqual([25, 50]);
  const output75 = multiplesOfN(75);
  expect(output75).toEqual([]);
});

// CH01-reverse-sentence-words
function reverseWords(sentence) {
  const words = sentence.split(' ');
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].split('').reverse().join('');
  }
  return words.join(' ');
}

test('reverseWords', () => {
  const output = reverseWords('alchemy rocks gold');
  expect(output).toEqual('ymehcla skcor dlog');
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
  const output = titleCase('alchemy ROCKS goLD');
  expect(output).toEqual('Alchemy Rocks Gold');
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

// CH02.2-at
function at(arr, index) {
  return index >= 0 ? arr[index] : arr[arr.length + index];
}

test('at', () => {
  const output1 = at(['a', 'b', 'c', 'd', 'e'], 1);
  expect(output1).toEqual('b');
  const output2 = at(['a', 'b', 'c', 'd', 'e'], -2);
  expect(output2).toEqual('d');
});

// CH03-fizz-buzz
function fizzBuzz(number) {
  const list = [];
  for (let i = 1; i <= number; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      list.push('FizzBuzz');
    } else if (i % 3 === 0) {
      list.push('Fizz');
    } else if (i % 5 === 0) {
      list.push('Buzz');
    } else list.push(i);
  }
  return list;
}

test('fizz buzz', () => {
  const output = fizzBuzz(16);
  expect(output).toEqual([
    1,
    2,
    'Fizz',
    4,
    'Buzz',
    'Fizz',
    7,
    8,
    'Fizz',
    'Buzz',
    11,
    'Fizz',
    13,
    14,
    'FizzBuzz',
    16,
  ]);
});

// CH04-anagrams
function anagrams(wordOne, wordTwo) {
  const wordOneSorted = wordOne.split('').sort().join('');
  const wordTwoSorted = wordTwo.split('').sort().join('');
  return wordOneSorted === wordTwoSorted ? true : false;
}

test('anagrams', () => {
  const output1 = anagrams('superintended', 'unpredestined');
  expect(output1).toBe(true);
  const output2 = anagrams('pictorialness', 'documentarily');
  expect(output2).toBe(false);
});

// CH05-unique-string
function uniqueString(strings) {
  for (let i = 0; i < strings.length - 1; i++) {
    const initialLength = strings.length;
    const letters = [...new Set(strings[i].toLowerCase().split(''))]
      .sort()
      .join('');
    for (let j = i + 1; j < strings.length; j++) {
      const compareLetters = [...new Set(strings[j].toLowerCase().split(''))]
        .sort()
        .join('');
      if (letters === compareLetters) {
        strings.splice(j, 1);
        j--;
      }
    }
    if (strings.length < initialLength) {
      strings.splice(i, 1);
      i--;
    }
  }
  return strings[0];
}

test('uniqueString', () => {
  const output1 = uniqueString([
    'Aa',
    'aaa',
    'aaaaa',
    'BbBb',
    'Aaaa',
    'AaAaAa',
    'a',
  ]);
  expect(output1).toBe('BbBb');
  const output2 = uniqueString([
    'abc',
    'acb',
    'bac',
    'foo',
    'bca',
    'cab',
    'cba',
  ]);
  expect(output2).toBe('foo');
});

// CH06-unique-char
function uniqueChar(string) {
  const letters = string.split('');
  for (let i = 0; i < letters.length - 1; i++) {
    const initialLength = letters.length;
    for (let j = i + 1; j < letters.length; j++) {
      if (letters[i] === letters[j]) {
        letters.splice(j, 1);
        j--;
      }
    }
    if (letters.length < initialLength) {
      letters.splice(i, 1);
      i--;
    }
  }
  return letters.length > 0 ? letters[0] : '_';
}

test('uniqueChar', () => {
  const output1 = uniqueChar('abdacabad');
  expect(output1).toBe('c');
  const output2 = uniqueChar('abacabaabacaba');
  expect(output2).toBe('_');
  const output3 = uniqueChar('abacabad');
  expect(output3).toBe('c');
});

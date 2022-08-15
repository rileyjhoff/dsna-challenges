// CH-alien-dictionary
function isSorted(words, order) {
  const orderArr = order.split('');
  for (let i = 0; i < words.length - 1; i++) {
    const indexOfWordFirstLetter = orderArr.indexOf(words[i][0]);
    const indexOfNextWordFirstLetter = orderArr.indexOf(words[i + 1][0]);
    if (indexOfNextWordFirstLetter < indexOfWordFirstLetter) return false;
    if (indexOfNextWordFirstLetter === indexOfWordFirstLetter) {
      const wordLetters = words[i].split('');
      const nextWordLetters = words[i + 1].split('');
      for (let j = 1; j < wordLetters.length; j++) {
        const indexOfWordLetter = orderArr.indexOf(wordLetters[j]);
        const indexOfNextWordLetter = orderArr.indexOf(nextWordLetters[j]);
        if (indexOfNextWordLetter < indexOfWordLetter) return false;
      }
    }
  }
  return true;
}

test('alien dictionary', () => {
  const output1 = isSorted(['hello', 'leetcode'], 'hlabcdefgijkmnopqrstuvwxyz');
  expect(output1).toBe(true);
  const output2 = isSorted(
    ['word', 'world', 'row'],
    'worldabcefghijkmnpqstuvxyz'
  );
  expect(output2).toBe(false);
  const output3 = isSorted(['apple', 'app'], 'abcdefghijklmnopqrstuvwxyz');
  expect(output3).toBe(false);
});

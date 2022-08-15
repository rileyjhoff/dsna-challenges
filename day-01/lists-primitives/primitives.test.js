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

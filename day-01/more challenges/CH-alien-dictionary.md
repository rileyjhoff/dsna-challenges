CH: Alien Dictionary
---

## Challenge

In an alien language, surprisingly, they also use English lowercase letters, but possibly in a different order. The order of the alphabet is some permutation of lowercase letters.

Given a sequence of words written in the alien language, and the order of the alphabet, return `true` if and only if the given words are sorted lexicographically in this alien language.

## Function Interface

```js
function isSorted(words, order) {
```

- 1 <= words.length <= 100
- 1 <= words[i].length <= 20
- order.length === 26
- All characters in words[i] and order are English lowercase letters.

> **You can assume valid input**

## Test Cases

Input | Output | Explanation
---|---|---
words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz" | `true` | As 'h' comes before 'l' in this language, then the sequence is sorted.
words = ["word","world","row"], order = "worldabcefghijkmnpqstuvxyz" | `false` | As 'd' comes after 'l' in this language, then words[0] > words[1], hence the sequence is unsorted.
words = ["apple","app"], order = "abcdefghijklmnopqrstuvwxyz" | false | The first three characters "app" match, and the second string is shorter (in size.) According to lexicographical rules "apple" > "app", because 'l' > '∅', where '∅' is defined as the blank character which is less than any other character (More info).
CH: Unique Morse Code Words
---

## Challenge

International Morse Code defines a standard encoding where each letter is mapped to a series of dots and dashes, as follows:

- 'a' maps to `.-`,
- 'b' maps to `-...`,
- 'c' maps to `-.-.`, and so on.

For convenience, the full table for the 26 letters of the English alphabet is given below:

```js
const codes = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
```

(HINT: you can get the char code to get a relative numeric value for each letter you can lookup in the array)

Given an array of strings words where each word can be written as a concatenation of the Morse code of each letter.

For example, "cab" can be written as `-.-..--...`, which is the concatenation of `-.-.`, `.-`, and `-...`. We will call such a concatenation the transformation of a word.

Return the number of different transformations among all words we have

## Function Interface

```js
function uniqueWords(words) {
```

- 1 <= words.length <= 100
- 1 <= words[i].length <= 12
- words[i] consists of lowercase English letters.

> **You can assume valid input**

## Test Cases

### Example 1

#### Input

`["gin","zen","gig","msg"]`

#### Output

`2`

#### Explanation

The transformation of each word is:
- "gin" -> `--...-.`
- "zen" -> `--...-.`
- "gig" -> `--...--.`
- "msg" -> `--...--.`

There are 2 different transformations: 
1. `--...-.`
1. `--...--.`

### Example 2

#### Input

`words = ["a"]`

#### Output

`1`

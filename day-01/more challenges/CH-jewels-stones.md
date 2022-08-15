CH: Jewels and Stones
---

## Challenge

You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

Letters are case sensitive, so "a" is considered a different type of stone from "A".

## Function Interface

```js
function countJewels(jewels, stones) {
```

- 1 <= jewels.length
- stones.length <= 50
- jewels and stones consist of only English letters.
- All the characters of jewels are unique.

> **You can assume valid input**

## Test Cases

Input | Output
---|---
jewels = "aA", stones = "aAAbbbb" | 3
jewels = "z", stones = "ZZ" | 0

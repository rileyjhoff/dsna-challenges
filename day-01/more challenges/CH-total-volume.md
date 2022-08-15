CH: Total Volume
---

## Challenge

Given an array of boxes, create a function that returns the total volume of all those boxes combined together. A box is represented by an array with three elements: length, width and height.

For instance, ``[2, 3, 2], [6, 6, 7], [1, 2, 1])` should return `266` since (2 x 3 x 2) + (6 x 6 x 7) + (1 x 2 x 1) = 12 + 252 + 2 = 266.

## Function Interface

```js
function totalVolume(...boxes) {
```

> **You can assume valid input**

## Test Cases

Input | Output
---|---
`[4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1]` | `63`
`[2, 2, 2], [2, 1, 1]` | `10`
`[1, 1, 1]` | `1`

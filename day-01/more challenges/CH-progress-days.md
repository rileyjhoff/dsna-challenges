CH: Progress Days
---

## Challenge

To train for an upcoming marathon, Johnny goes on one long-distance run each Saturday. He wants to track how often the number of miles he runs this Saturday exceeds the number of miles run the previous Saturday. This is called a progress day.

Create a function that takes in an array of miles run every Saturday and returns Johnny's total number of progress days.

For example, `progressDays([3, 4, 1, 2])` should return `2` because there are two progress days, (3->4) and (1->2)

## Function Interface

```js
function progressDays(miles) {
```

> **You can assume valid input**

## Test Cases

Input | Output
---|---
`[10, 11, 12, 9, 10]` | `3`
`[6, 5, 4, 3, 2, 9]` | `1`
`[9, 9]`  | `0`

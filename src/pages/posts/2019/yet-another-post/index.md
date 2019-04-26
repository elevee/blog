---
title: Early Termination And ForEach
date: '2018-12-06T23:46:37.121Z'
published: false
---

More of a public service announcement.

```js
for (let i = 0; i < a.length; i++) {
  const element = a[i]
  if (memo[element]) {
    return element
  } else {
    memo[element] = true
  }
}
```

From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

There is no way to stop or break a forEach() loop other than by throwing an exception. If you need such behavior, the forEach() method is the wrong tool.

Early termination may be accomplished with:

A simple loop
A for...of loop
Array.prototype.every()
Array.prototype.some()
Array.prototype.find()
Array.prototype.findIndex()
The other Array methods: every(), some(), find(), and findIndex() test the array elements with a predicate returning a truthy value to determine if further iteration is required.

```js
a.forEach((num, i) => {
  //   console.log(`memo is now`, memo);
  //   num;
  //   if (memo[num]) {
  //     console.log(`duplicate found! (${num}). we should return ${num}`);
  //     console.log(i);
  //     return num;
  //   } else {
  //     memo[num] = true;
  //   }
  // });
```

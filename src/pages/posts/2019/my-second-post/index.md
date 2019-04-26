---
title: My Second Post!
date: "2019-03-24T23:46:37.121Z"
published: false
---

My experience with Promises and API calls in the past had been solely with JQuery's implementation. It's not the worst thing, but Promises were natively introduced in ______ and with JQuery starting to become less ubiquitous because of newer versions of Javascript ingesting some of the features people had formerly used JQuery for, it's smart to know know multiple ways to skin a cat. If we're still allowed to say that.

```js
let doSomeThingAfterDelay = async (seconds) => {
  // try {
    
    
    const delayPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('hey there');
      }, seconds*1000)
    });
  // } 
  // catch {

  // }
  const result = await delayPromise;
  console.log("AHHHH WE WAITED.");
  console.log(`result returning is ${result}`)
  return result;
}

console.log(`doSomethingafterDelay returns ${doSomeThingAfterDelay(3)}`);
```
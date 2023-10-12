// 不可更改 start
function doSomething() {
  return new Promise(function (resolve, reject) {
    console.log('doSomething');
    resolve('doSomething');
  });
}

function doSomethingElse(result) {
  return new Promise(function (resolve, reject) {
    console.log('doSomethingElse', result);
    resolve('doSomethingElse');
  });
}

function doThirdThing(result) {
  return new Promise(function (resolve, reject) {
    console.log('doThirdThing', result);
    const time = Date.now();
    if (time % 2 === 0) {
      resolve(time);
    } else {
      reject('error');
    }
  });
}

function failureCallback(error) {
  console.log('failureCallback', error);
}

function sample() {
  // 还原目标
  doSomething()
    .then(function (result) {
      return doSomethingElse(result);
    })
    .then(function (newResult) {
      return doThirdThing(newResult);
    })
    .then(function (finalResult) {
      console.log('Got the final result: ' + finalResult);
    })
    .catch(failureCallback);
}

sample();
// 不可更改 end

/**
 * 常规结果
 *
 * doSomething
 * doSomethingElse doSomething
 * doThirdThing doSomethingElse
 * Got the final result: 1695199612596
 */

/**
 * 偶然异常的结果
 *
 * doSomething
 * doSomethingElse doSomething
 * doThirdThing doSomethingElse
 * failureCallback error
 */

// 使用async/await，简化promise的使用，使代码更像同步代码
function main() {
  // 仅doThirdThing可能会失败，仅捕获doThirdThing的报错
}

main();

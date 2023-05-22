// 不可动 start
function doSomething() {
  return new Promise(function (resolve, reject) {
    console.log('doSomething')
    resolve('doSomething')
  })
}

function doSomethingElse(result) {
  return new Promise(function (resolve, reject) {
    console.log('doSomethingElse', result)
    resolve('doSomethingElse')
  })
}

function doThirdThing(result) {
  return new Promise(function (resolve, reject) {
    console.log('doThirdThing', result)
    const time = Date.now()
    if (time % 2 === 0) {
      resolve(time)
    } else {
      reject('error')
    }
  })
}

function failureCallback(error) {
  console.log('failureCallback', error);
}

doSomething().then(function (result) {
  return doSomethingElse(result)
})
  .then(function (newResult) {
    return doThirdThing(newResult)
  })
  .then(function (finalResult) {
    console.log('Got the final result: ' + finalResult)
  })
  .catch(failureCallback)
// 不可动 end


// 使用async/await，简化promise的使用，使代码更像同步代码
function main() {
  // doThirdThing可能会失败，需精准捕获错误
}

main();

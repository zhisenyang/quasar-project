async function fun() {
  // other...
  if (Date.now() % 2 === 0) {
    // 这里目的是终止这个流程，但是这样直接return是不对的，需要改进，并会被main的的catch捕捉到；
    // 加分项：使用两种方式实现
    return 'fail';
  }
  // other...
  return 'success';
}

async function main() {
  console.log(
    await fun().catch((error) => {
      // 使这里能捕获error，error内容为'fail'或其他
      return 'Error ' + error;
    })
  );
}

main();

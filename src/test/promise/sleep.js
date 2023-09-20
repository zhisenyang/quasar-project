// 用promise实现sleep(阻塞)function
function sleep() {}

// 使main内sleep 1秒
export async function main() {
  console.log('start', Date.now());
  // sleep(阻塞)1秒
  await sleep(1000);
  console.log('end', Date.now());
}

main();

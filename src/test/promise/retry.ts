/**
 * 实现失败重试方法，作用是放入Promise后，返回Promise的resolve数据，且保持原本的type
 *
 * function有三个参数：
 *
 * 接受callback的Promise；
 * 3次默认尝试次数，可传入更改默认值；
 * 500毫秒默认阻塞（sleep）时间，可传入更改默认值；
 *
 * 实现功能：
 *
 * resolve既返回结果；
 * reject后sleep指定时间，然后发起重试；
 * 除了reject之外还可能会出现Error，存储Error，全部重试失败后抛出Error
 *
 * 加分项：
 * 保持type的一致性和动态性，不使用any
 */
function retry() {

}

export async function main() {
  const result = await retry(
    () =>
      new Promise<number>((resolve, reject) => {
        if (Date.now() % 2 === 0) {
          resolve(1);
          return;
        }
        if (Date.now() % 5 === 1)
          throw new Error('Error');
        reject();
      })
  );
  console.log(result);
}

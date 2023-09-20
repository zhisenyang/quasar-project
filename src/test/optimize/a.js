/**
 * 尽可能对以下 start end 内代码进行优化
 * 1、做题时对源代码注释
 * 2、按自己习惯和技能尽可能优化
 */

function a() {
  const a = 'a';
  // start
  const bool = a === 'a' || a === 'b' || a === 'c';
  // end
  return bool;
}
console.log('a()', a());

function b() {
  const time = Date.now();
  // start
  if (time & (2 === 0)) {
  }
  // end
}
console.log('b()', b());

function c() {
  /**
   * type为某种余额状态，按状态返回字符串
   * 1:充值
   * 2:消费
   * 3:退款
   */
  const type = 1;
  // start
  let typeName;
  if (type === 1) {
    typeName = '充值';
  }
  if (type === 2) {
    typeName = '消费';
  }
  if (type === 3) {
    typeName = '退款';
  }
  // end
  return typeName;
}
console.log('c()', c());

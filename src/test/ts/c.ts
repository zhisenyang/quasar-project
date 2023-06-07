// 类型断言

// 用断言修复错误
function main(value: string | undefined | null) {
  const str: string = value;
  const length: number = value.length;
  console.log(str, length);
}

main('abc');


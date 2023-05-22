// TypeScript 中为全局对象 window 增加新的属性
export type Str = {
  a?: string;
  b?: string;
  c?: string;
};
const obj: Str = {};

// 假定obj.a有值，对obj.a进行类型断言，使得str的类型为string
// 以下作答
const str: string = obj.a;

console.log(str);

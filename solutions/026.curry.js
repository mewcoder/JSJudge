// 实现
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    }
    return (...nextArgs) => curried(...args, ...nextArgs);
  };
}
// 测试
function sum(a, b, c) {
  return a + b + c;
}
const curriedSum = curry(sum);

// 期望输出: 6
console.log(curriedSum(1)(2)(3));
console.log(curriedSum(1, 2)(3));
console.log(curriedSum(1)(2, 3));
console.log(curriedSum(1, 2, 3));
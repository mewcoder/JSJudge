// 实现
Function.prototype.myCall = function (obj, ...args) {
  const ctx = obj || globalThis;
  const fnKey = Symbol();
  ctx[fnKey] = this;
  const result = ctx[fnKey](...args);
  delete ctx[fnKey];
  return result;
};

// 测试
function sum(a, b) {
  return this.value + a + b;
}

const obj = {
  value: 3
};

// 期望输出: 6
console.log(sum.myCall(obj, 1, 2));

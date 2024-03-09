// 实现
Function.prototype.myBind = function (obj, ...args) {
  const ctx = obj || globalThis;
  const fn = Symbol();
  ctx[fn] = this;
  const self = this;
  const res = function (...others) {
    const target = this instanceof self ? this : ctx;
    return self.apply(target, [...args, ...others]);
  };
  if (this.prototype) {
    res.prototype = Object.create(this.prototype);
  }
  return res;
};

// 测试
function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function () {
  return this.x + ',' + this.y;
};
const emptyObj = {};
const YAxisPoint = Point.myBind(null, 1);
const axisPoint = new YAxisPoint(2);

// 期望输出
console.log(axisPoint.toString()); // 1,2
console.log(axisPoint instanceof Point); // true
console.log(axisPoint instanceof YAxisPoint); // true

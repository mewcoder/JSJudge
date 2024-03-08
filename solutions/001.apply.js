Function.prototype.myApply = function (obj, args = []) {
  const ctx = obj || globalThis;
  const fnKey = Symbol();
  ctx[fnKey] = this;
  const result = ctx[fnKey](...args);
  delete ctx[fnKey];
  return result;
};

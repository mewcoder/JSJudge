function objectCreate(proto) {
  if (proto === null)
    return {
      __proto__: null
    };
  function F() {}
  F.prototype = proto;
  return new F();
}

// 实现
function objectCreate(proto) {
  if (proto === null)
    return {
      __proto__: null
    };
  function F() { }
  F.prototype = proto;
  return new F();
}


// 测试
const person = {
  greet: function () {
    console.log(this.name);
  },
};

const obj = objectCreate(person);
obj.name = "Alice";

// 期望输出：Alice
obj.greet(); 
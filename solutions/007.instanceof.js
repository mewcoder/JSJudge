// 实现
function instanceOf(obj, constructor) {
  while (obj != null) {
    if (obj == constructor.prototype) return true;
    obj = Object.getPrototypeOf(obj);
  }
  return false;
}

// 测试
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const alice = new Person("Alice", 30);

// 期望输出
console.log(instanceOf(alice, Person)); // true
console.log(instanceOf(alice, Object)); // true
console.log(instanceOf(alice, Array)); // false
// 实现
function myNew(Fn, ...args) {
    const obj = Object.create(Fn.prototype);
    const result = Fn.apply(obj, args);
    return isObject(result) ? result : obj;
}

function isObject(obj) {
    return (typeof obj === "function" || typeof obj === "object") && obj !== null;
}

// 测试
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function () {
    console.log(`${this.name}-${this.age}`);
};

const person = myNew(Person, "Alice", 30);

console.log(person)

// 期望输出
console.log(person instanceof Person); // true
person.greet(); // Alice-30
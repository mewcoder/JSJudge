
function Parent(name) {
    this.name = name;
}

Parent.prototype.sayName = function () {
    console.log(this.name);
};

// 实现
function inherit(child, parent) {
    const prototype = Object.create(parent.prototype);
    prototype.constructor = child;
    child.prototype = prototype;
}

function Child(name, age) {
    Parent.call(this, name);
    this.age = age;
}

inherit(Child, Parent);

Child.prototype.sayAge = function () {
    console.log(this.age);
};


// 测试
const child = new Child("Kevin", 18);
console.log(child.name); // Kevin
console.log(child.age); // 18
child.sayName(); // Kevin
child.sayAge(); // 18
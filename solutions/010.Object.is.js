// 实现
function ObjectIs(x, y) {
    if (x === y) {
        // +0不等于-0
        return x !== 0 || 1 / x === 1 / y;
    } else {
        // 针对 NaN 等于 NaN
        return x !== x && y !== y;
    }
};

// 期望输出：
console.log(ObjectIs("foo", "foo")); // true
console.log(ObjectIs("foo", "bar")); // false
console.log(ObjectIs([], [])); //  false
console.log(ObjectIs(null, null)); // true
console.log(ObjectIs(0, -0)); //  false
console.log(ObjectIs(-0, -0)); // true
console.log(ObjectIs(NaN, 0 / 0)); // true
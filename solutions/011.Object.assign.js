// 实现
function ObjectAssign(target, ...sources) {
    if (target === null || target === undefined) {
        throw new TypeError('Cannot convert undefined or null to object');
    }
    let to = Object(target);
    sources.forEach(function (source) {
        if (source != null && source != undefined) {
            for (let key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    to[key] = source[key]
                }
            }
        }
    });
    return to;
}

// 测试
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = ObjectAssign(target, source);

// 期望输出：{ a: 1, b: 4, c: 5 }
console.log(target);
console.log(returnedTarget === target); //  true
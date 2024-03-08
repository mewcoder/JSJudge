// 实现
function uniqueArray(arr) {
    return [...new Set(arr)]
}

// 测试
const numbers = [1, 2, 2, 3, 4, 4, 5, 6, 6];

// 期望输出: [1, 2, 3, 4, 5, 6]
console.log(uniqueArray(numbers));
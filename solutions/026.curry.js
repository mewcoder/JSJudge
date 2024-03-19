//实现

// 使用递归函数调用的柯里化
// function curry(fn) {
//   return function curried(...args) {
//     if (args.length >= fn.length) {
//       return fn(...args);
//     }
//     return (...nextArgs) => curried(...args, ...nextArgs);
//   };
// }


// 考虑 this
// function curry(fn) {
//   return function curried(...args) {
//     if (args.length >= fn.length) {
//       return fn.apply(this, args);
//     }
//     return curried.bind(this, ...args);
//   };
// };



// 使用闭包
// function curry(fn) {
//   let len = fn.length
//   let curArgs = []
//   return function curried(...args) {
//     curArgs.push(...args)
//     if (curArgs.length >= len) {
//       const res = fn(...curArgs)
//       curArgs = []
//       return res
//     } else {
//       return curried
//     }
//   };
// };


// 不定参数
function curry(fn) {
  return function curried(...args) {
    if (args.length === 0) {
      return fn()
    }
    return (...nextArgs) => {
      if (nextArgs.length === 0) {
        return fn(...args);
      }
      return curried(...args, ...nextArgs);
    };
  };
};





// 使用闭包
// function curry(fn) {
//   let allArgs = []
//   return function curried(...args) {
//     if (args.length === 0) {
//       const res = fn(...allArgs);
//       allArgs = []
//       return res
//     }
//     allArgs.push(...args);
//     return curried;
//   };
// };


// 测试
function sum3(a, b, c) {
  return a + b + c;
}

function sum(...args) {
  return args.reduce((pre, cur) => pre + cur, 0)
}


const curriedSum = curry(sum);

console.log(curriedSum(1)(2)(3)()); // 输出: 6
console.log(curriedSum(1, 2)(3)()); // 输出: 6
console.log(curriedSum(1)(2, 3)()); // 输出: 6
console.log(curriedSum(1, 2, 3)()); // 输出: 6
// console.log(curriedSum())
// console.log(curriedSum()()(1, 2, 3)); // 输出: 6






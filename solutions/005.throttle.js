// 实现
function throttle(fn, timeout) {
    let last = 0;
    return function (...args) {
        let now = Date.now();
        if (now - last >= timeout) {
            last = now;
            fn.apply(this, args);
        }
    };
}

// 测试
function logText(text) {
    console.log(text);
}

const throttledLogText = throttle(logText, 500);

// 期望输出: 100 800
setTimeout(() => throttledLogText("100"), 100);
setTimeout(() => throttledLogText("500"), 500);
setTimeout(() => throttledLogText("800"), 800);
setTimeout(() => throttledLogText("1000"), 1000);
// 实现
function debounce(fn, timeout) {
    let timer = null;
    return function (...args) {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            fn.apply(this, args);
        }, timeout);
    };
}

// 测试
function logText(text) {
    console.log(text);
}

const debounceLogText = debounce(logText, 500);

// 期望输出: 400 1400
setTimeout(() => debounceLogText("100"), 100);
setTimeout(() => debounceLogText("400"), 400);
setTimeout(() => debounceLogText("1000"), 1000);
setTimeout(() => debounceLogText("1400"), 1400);
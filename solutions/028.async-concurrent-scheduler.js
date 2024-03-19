// class Scheduler {
//     constructor(max) {
//         this.max = max
//         this.queue = []
//         this.count = 0
//     }
//     add(task) {
//         return new Promise(resolve => {
//             // 关键，保存 resolve
//             task.resolve = resolve
//             if (this.count < this.max) {
//                 this.run(task)
//             } else {
//                 this.queue.push(task)
//             }
//         })
//     }
//     async run(task) {
//         if (task && typeof task === 'function') {
//             this.count++
//             await task()
//             task.resolve()
//             this.count--
//             const fn = this.queue.shift()
//             this.run(fn)
//         }
//     }
// }


class Scheduler {
    constructor(n) {
        this.max = n || 2;
        this.count = 0;
        this.queue = []; // 当前执行任务队列
    }

    add(task) {
        this.queue.push(task);
        this.run();
    }

    run() {
        if (this.count >= this.max || this.queue.length === 0) return
        this.count++;

        const fn = this.queue.shift();
        fn.then(() => {
            this.count--;
            this.run();
        })
    }
}
// https://juejin.cn/post/7093213891198451742

// 测试
const timeout = (time) =>
    new Promise((resolve) => {
        setTimeout(resolve, time);
    });

const scheduler = new Scheduler();
// const addTask = (time, order) => {
//     // scheduler.add(() => timeout(time)).then(() => console.log(order));
// };

// addTask(1000, '1');
// addTask(500, '2');
// addTask(300, '3');
// addTask(400, '4');


const curl = (i) => {
    console.log("开始" + i);
    return new Promise((resolve) =>
        setTimeout(() => {
            resolve(i);
            console.log("结束" + i);
        }, 1000 + Math.random() * 1000)
    );
};

scheduler.add(curl(2))
scheduler.add(curl(3))
scheduler.add(curl(4))
scheduler.add(curl(2))

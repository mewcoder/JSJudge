class Scheduler {
  constructor(max = 2) {
    this.max = max;
    this.queue = [];
    this.count = 0;
  }
  add(task) {
    return new Promise((resolve) => {
      // 关键，保存 resolve
      task.resolve = resolve;
      this.queue.push(task);
      this.run();
    });
  }
  run() {
    if (this.count >= this.max || this.queue.length === 0) return;
    this.count++;
    const fn = this.queue.shift();
    fn()
      .then(() => {
        fn.resolve();
        this._next();
      })
      .catch(() => {
        this._next();
      });
  }
  _next() {
    this.count--;
    this.run();
  }
}
// class Scheduler {
//   constructor(max=2) {
//     this.max = max;
//     this.queue = [];
//     this.running = 0;
//   }
//   add(task) {
//     return new Promise((resolve) => {
//       // 关键，加了一层 Promise 的封装，将其 resolve 的函数交出去
//       task.resolve = resolve;
//       if (this.running < this.max) {
//         this.run(task);
//       } else {
//         this.queue.push(task);
//       }
//     });
//   }
//   async run(task) {
//     if (task && typeof task === "function") {
//       this.running++;
//       await task();
//       task.resolve();
//       this.running--;
//       const fn = this.queue.shift();
//       this.run(fn);
//     }
//   }
// }

// 测试
const timeout = (time) =>
  new Promise((resolve) => {
    setTimeout(resolve, time);
  });

const scheduler = new Scheduler();
const addTask = (time, order) => {
  scheduler.add(() => timeout(time)).then(() => console.log(order));
};

addTask(1000, "1");
addTask(500, "2");
addTask(300, "3");
addTask(400, "4");

// 输出: 2 3 1 4

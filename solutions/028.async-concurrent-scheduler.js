class Scheduler {
  constructor(num = 2) {
    this.max = num;
    this.queue = [];
    this.count = 0;
  }
  add(promiseCreator) {
    return new Promise((resolve) => {
      promiseCreator._resolve = resolve;  // 关键点，怎么缓存这个 resolve; reject 同理
      this.queue.push(promiseCreator);
      this.run();
    });
  }
  run() {
    if (this.count >= this.max || this.queue.length === 0) return;
    this.count++;
    const promise = this.queue.shift();
    promise()
      .then(res => {
        promise._resolve(res);
      }).finally(() => {
        this.count--;
        this.run();
      })
  }
}

// 测试
const timeout = (time) => new Promise((resolve) => {
  setTimeout(resolve, time);
});

const scheduler = new Scheduler();
const addTask = (time, order) => {
  scheduler.add(() => timeout(time)).then(() => console.log(order));
};

addTask(1000, '1');
addTask(500, '2');
addTask(300, '3');
addTask(400, '4');

// 期望输出: 2 3 1 4

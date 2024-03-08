class _LazyMan {
  constructor(name) {
    this.tasks = [];
    console.log(`Hi! This is ${name}!`);
    setTimeout(() => this.next(), 0);
  }

  next() {
    let task = this.tasks.shift();
    task && task();
  }

  sleep(time) {
    this.addTask(() => {
      console.log(`Wake up after ${time}`);
      setTimeout(() => this.next(), time * 1000);
    });
    return this;
  }

  sleepFirst(time) {
    this.addTask(() => {
      console.log(`Wake up after ${time}`);
      setTimeout(() => this.next(), time * 1000);
    }, true);
    return this;
  }

  eat(food) {
    this.addTask(() => {
      console.log(`Eat ${food}~`);
      this.next();
    });
    return this;
  }

  addTask(task, isFirst = false) {
    if (isFirst) {
      this.tasks.unshift(task);
    } else {
      this.tasks.push(task);
    }
  }
}

function LazyMan(name) {
  return new _LazyMan(name);
}

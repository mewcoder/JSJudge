function Reactive(obj) {
  handlers = [];

  const subscribe = (handler) => {
    handlers.push(handler);
  };

  const notify = (key, oldValue, newValue) => {
    handlers.forEach((handler) => handler(key, oldValue, newValue));
  };

  const proxy = new Proxy(obj, {
    set(target, key, value) {
      if (value !== target[key]) {
        notify(key, target[key], value);
        target[key] = value;
      }
      return true;
    },
  });

  return {
    subscribe,
    state: proxy,
  };
}

// 测试
const obj = { a: 1, b: 2 };

const reactive = Reactive(obj);
reactive.subscribe((key, oldValue, newValue) => {
  console.log(key, oldValue, newValue);
});

reactive.state.a = 3; // console.log('a', 1, 3)
reactive.state.c = 10; // console.log('c', undefined, 10)

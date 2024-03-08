function Observe(obj) {
  const listeners = new Set();

  const listen = (fn) => {
    listeners.add(fn);
  };

  const trigger = () => {
    listeners.forEach((fn) => {
      fn.call(obj);
    });
  };

  const proxy = new Proxy(obj, {
    set(target, key, value) {
      const result = Reflect.set(target, key, value);
      trigger();
      return result;
    },
    get(target, key) {
      return Reflect.get(target, key);
    }
  });

  return {
    proxy,
    listen
  };
}

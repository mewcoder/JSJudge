function compose(...fns) {
  return (arg) => {
    return fns.reduceRight((result, fn) => fn(result), arg);
  };
}

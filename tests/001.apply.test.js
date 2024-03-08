describe('测试 实现 apply 方法', () => {
  it('使用指定的上下文来调用函数', function () {
    const context = { value: 1 };
    function testFunction() {
      return this.value;
    }
    expect(testFunction.myApply(context)).to.equal(1);
  });

  it('将参数传递给被调用的函数', function () {
    function sum(a, b) {
      return this.value + a + b;
    }
    const context = { value: 3 };
    expect(sum.myApply(context, [1, 2])).to.equal(6);
  });

  it('不指定this', function () {
    function returnThis() {
      return this;
    }
    expect(returnThis.myApply(null)).to.equal(globalThis);
    expect(returnThis.myApply()).to.equal(globalThis);
  });
});

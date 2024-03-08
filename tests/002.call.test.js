describe('测试 实现 call 方法', () => {
  it('使用指定的上下文来调用函数', function () {
    const context = { value: 1 };
    function testFunction() {
      return this.value;
    }
    expect(testFunction.myCall(context)).to.equal(1);
  });

  it('将参数传递给被调用的函数', function () {
    function sum(a, b) {
      return this.value + a + b;
    }
    const context = { value: 3 };
    expect(sum.myCall(context, 1, 2)).to.equal(6);
  });

  it('不指定this', function () {
    function returnThis() {
      return this;
    }
    expect(returnThis.myCall(null)).to.equal(globalThis);
    expect(returnThis.myCall()).to.equal(globalThis);
  });
});

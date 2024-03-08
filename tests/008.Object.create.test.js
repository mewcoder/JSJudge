describe('objectCreate', () => {
  it('should create a new object with the specified prototype', function () {
    const proto = { prop: 'value' };
    const obj = objectCreate(proto);
    expect(Object.getPrototypeOf(obj)).to.equal(proto);
    expect(obj.prop).to.equal('value');
  });

  it('should create an object without properties if null is passed', function () {
    const obj = objectCreate(null);
    expect(Object.getPrototypeOf(obj)).to.equal(null);
    expect(obj.hasOwnProperty).to.be.undefined;
  });

  it('should not create own properties', function () {
    const proto = { prop: 'value' };
    const obj = objectCreate(proto);
    expect(obj.hasOwnProperty('prop')).to.be.false;
  });
});

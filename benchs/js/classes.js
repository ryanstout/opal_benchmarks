function One() {}
One.prototype.one = function() {
  return 'one';
};

window.classVals1 = [];

window.jsTests.classes = function() {
  classVals1.push(new One().one());
};

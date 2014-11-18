Array.prototype.sum = function() {
  total = 0;
  for (var i=0;i < this.length;i++) {
    total += this[i];
  }

  return total;
};

window.jsTests.sum_array = function() {
  var a = [];
  for (var i=0;i < 1000;i++) {
    a.push(1);
  }

  a.sum();
};
class Array
  def sum
`    total = 0;
    for (var i=0;i < this.length;i++) {
      total += this[i];
    }

    return total;
`
  end
end

`window.rbTests.sum_array = function() {`
  a = []
  `for (var i=0;i < 1000;i++) {`
    `a.push(1);`
  `}`
  a.sum
`}`
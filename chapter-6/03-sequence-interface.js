function logFive(sequence) {
  for (let i = 0; i < 5; i += 1) {
    if (!sequence.next()) {
      break;
    }
    console.log(sequence.current());
  }
}

// ================== //
// ArraySeq Interface //
// ================== //
function ArraySeq(array) {
  this.pos = -1;
  this.array = array;
};

ArraySeq.prototype.next = function() {
  if (this.pos >= this.array.length -1) {
    return false;
  }
  this.pos += 1;
  return true;
};

ArraySeq.prototype.current = function() {
  return this.array[this.pos];
};

logFive(new ArraySeq([1, 2, 3, 4, 5, 6, 7, 8]));
// → 1
// → 2

// ================== //
// RangeSeq Interface //
// ================== //

function RangeSeq(from, to) {
  this.pos = from - 1;
  this.to = to;
};

RangeSeq.prototype.next = function() {
  if (this.pos >= this.to) {
    return false;
  }
  this.pos += 1;
  return true;
};

RangeSeq.prototype.current = function() {
  return this.pos;
};

logFive(new RangeSeq(100, 1000));
// → 100
// → 101
// → 102
// → 103
// → 104
/*
  Another Cell
  Implement a cell type named StretchCell(inner, width, height) that conforms to the table cell interface described earlier in the chapter. It should wrap another cell (like UnderlinedCell does) and ensure that the resulting cell has at least the given width and height, even if the inner cell would naturall be smaller.
*/

// Table Cell interface stuff:
function repeat(string, times) {
  let result = '';
  for (let i = 0; i < times; i += 1) {
    result += string;
  };
  return result;
};

// =================== //
// Text Cell Prototype //
// =================== //
function TextCell(text) {
  this.text = text.split('\n');
};

TextCell.prototype.minWidth = function() {
  return this.text.reduce(function(width, line) {
    return Math.max(width, line.length);
  }, 0);
};

TextCell.prototype.minHeight = function() {
  return this.text.length;
};

TextCell.prototype.draw = function(width, height) {
  let result = [];
  for (let i = 0; i < height; i += 1) {
    const line = this.text[i] || '';
    result.push(line + repeat(' ', width - line.length));
  };
  return result;
};

Object.defineProperty(TextCell.prototype, 'heightProp', {
  get: function() {
    return this.text.length;
  }
});

// My Solution:
function StretchCell(inner, width, height) {
  this.inner = inner;
  this.width = width;
  this.height = height;
};

StretchCell.prototype.minWidth = function() {
  return Math.max(this.width, this.inner.minWidth());
};

StretchCell.prototype.minHeight = function() {
  return Math.max(this.height, this.inner.minHeight());
};

StretchCell.prototype.draw = function(width, height) {
  return this.inner.draw(width, height);
};


var sc = new StretchCell(new TextCell("abc"), 1, 2);
console.log(sc.minWidth());
// → 3
console.log(sc.minHeight());
// → 2
console.log(sc.draw(3, 2));
// → ["abc", "   "]
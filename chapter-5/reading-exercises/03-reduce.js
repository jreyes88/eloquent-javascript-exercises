const ancestryFile = require('../../data/ancestry.js');
const ancestry = JSON.parse(ancestryFile);

function reduce(array, combine, start) {
  let current = start;
  for (let i = 0; i < array.length; i += 1) {
    current = combine(current, array[i]);
  };
  return current;
};

console.log(reduce([1, 2, 3, 4], function(a, b){
  return a + b;
}, 0));

console.log(ancestry.reduce(function(min, cur) {
  if (cur.born > min.born) {
    return cur;
  } else {
    return min;
  };
}));

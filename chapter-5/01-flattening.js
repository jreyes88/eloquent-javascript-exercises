/*
  Flattening
  Use the reduce method in combination with the concat method to "flatten" an array of arrays into a single array that has all the elements of the input arrays.
*/

// My Solution:
const arrays = [[1, 2], [3, 4], [5, 6]];

const flattened = arrays.reduce(function(accumulator, current) {
  return accumulator.concat(current);
});
console.log(flattened);

// Solution:
console.log(arrays.reduce((flat, current) => flat.concat(current), []));

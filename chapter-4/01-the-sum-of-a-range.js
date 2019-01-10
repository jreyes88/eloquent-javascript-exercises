/*
  The Sum of a Range
  The introduction of this book alluded to the following as a nice way to compute the sum of a range of numbers:

  console.log(sum(range(1, 10)));

  Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.

  Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the previous program and see whether it does indeed return 55.

  As a bonus assignment, modify your range function to take an optional third argument that includes the "step" value used to build up the array. If no step is given, the array elements go up by increments of one, corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].
*/

// My solution:
function range(start, end, step = 1) {
  let range = [];
  if (start < end) {
    for (let i = start; i <= end; i += step) {
      range.push(i);
    };
  } else {
    for (let i = start; i >= end; i += step) {
      range.push(i);
    };
  }
  return range;
};

function sum(array) {
  const sum = array.reduce(function(accumulator, currentNumber) {
    return accumulator + currentNumber;
  });
  return sum;
};

const answer = sum(range(5, 2, -1));

// Solution:
function range(start, end, step = start < end ? 1 : -1) {
  let array = [];

  if (step > 0) {
    for (let i = start; i <= end; i += step) array.push(i);
  } else {
    for (let i = start; i >= end; i += step) array.push(i);
  }
  return array;
}

function sum(array) {
  let total = 0;
  for (let value of array) {
    total += value;
  }
  return total;
}

console.log(range(1, 10))
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55

/*
  Range function is mostly the same, minus use of a ternary operator to compare the step (and I used default arguments from ES6, which can be redefined to be something else when the function is called).

  Sum function is far more different, because I used the .reduce array method (which wasn't covered in this chapter).
*/

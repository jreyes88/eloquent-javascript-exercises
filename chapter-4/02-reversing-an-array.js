/*
  Reversing an Array
  Arrays have a method `reverse`, which changes the array by inverting the order in which its elements appear. For this exercise, write two functions reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as an argument and produces a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument in order to reverse its elements. Neither may use the standard reverse method.

  Thinking back to the notes about side effects and pure functions in the previous chapter, which variant do you expect to be useful in more situations? Which one is more efficient?
*/

// My Solution:
const array = [1, 2, 3, 4, 5, 6];

function reverseArray(array) {
  let newArray = [];
  for (let i = array.length - 1; i >= 0;  i -= 1) {
    newArray.push(array[i]);
  };
  return newArray;
};

const result = reverseArray(array);
console.log(result);

function reverseArrayInPlace(array) {
  for (let i = 0; i < Math.floor(array.length / 2); i += 1) {
    let temporary = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = temporary;
  };
  return array;
};

let resultInPlace = reverseArrayInPlace(array);
console.log(resultInPlace);

// Solution:
function reverseArray(array) {
  let output = [];
  for (let i = array.length - 1; i >= 0; i--) {
    output.push(array[i]);
  }
  return output;
}

function reverseArrayInPlace(array) {
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    let old = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
  }
  return array;
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]

/*
  Admittedly I always need to check the solution before I try the second function out. Walking through it, the loop inside the function divides the array in half (ignoring the middle number if the array has an odd number of items in it), then replaces array[0] with array[array.length - 1 - 0], then array [1] with array[array.length - 1 - 1], and so on.

  I hesitate to take a wild guess as to which is more useful or efficient, but I think in production I would always opt to go with the first function, reverseArray().
*/

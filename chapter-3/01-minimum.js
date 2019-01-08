/*
  Minimum
  The previous chapter introduced the standar function Math.min that returns its smallest argument. We can do that ourselves now. Write a function min that takes two arguments and returns their minimum.
*/

// My Solution:
function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
};

console.log(min(3, 32));

// Solution:
function min(a, b) {
  if (a < b) return a;
  else return b;
};

// Pretty much spot on, minus some syntax differences

/*
  Bean Counting
  You can get the Nth character, or letter, from a string by writing "string".charAt(N), similar to how you get its length with "s".length. The returned value will be a string containing only one character (for example, "b"). The first character has position zero, which causes the last one to be found at position string.length - 1. In other words, a two-character string has length 2, and its characters have positions 0 and 1.

  Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase "B" characters are in the string.

  Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase "B" characters). Rewrite countBs to make use of this new function.
*/

// My Solution:
function countBs(string) {
  let count = 0;
  for (let i = 0; i < string.length; i += 1) {
    if (string[i] === "B") {
      count += 1;
    }
  }
  return count;
};

function countChar(string, character) {
  let count = 0;
  for (let i = 0; i < string.length; i += 1) {
    if (string[i] === character) {
      count += 1;
    }
  }
  return count;
}

const Bs = countChar("Before bumbleBees bleBeBebb", "B");
console.log(Bs);

// Solution:
function countChar(string, ch) {
  let counted = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == ch) {
      counted += 1;
    }
  }
  return counted;
}

function countBs(string) {
  return countChar(string, "B");
}

/*
  I'm a bit confused by this solution, but I think it's trying to demonstrate that you can pass functions to other functions. The Prompt also was a bit of a red herring, with the bit about.charAt() which doesn't really get used in the solution.
*/

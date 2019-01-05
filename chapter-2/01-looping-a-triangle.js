/* 
  Looping a Triangle
  Write a loop that makes seven calls to console.log to output the following triangle:

  #
  ##
  ###
  ####
  #####
  ######
  #######

  It may be useful to know that you can find the length of a string by writing .length after it.

  var abc = "abc";
  console.log(abc.length);
  Output: 3
*/

// My solution:
let triangleLine = "";
for (let i = 0; i < 7; i += 1) {
  triangleLine += "#";
  console.log(triangleLine);
};

// Solution:
for (let line = "#"; line.length < 8; line += "#") {
  console.log(line);
};

/*
  Notes:
  Mine wasn't incorrect, but I did forget to use .length, which makes the solution more succinct.
*/

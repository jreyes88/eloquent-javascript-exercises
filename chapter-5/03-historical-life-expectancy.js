/*
  Historical Life Expectancy
  When we looked up all the people in our data set that lived more than 90 years, only the latest generation in the data came out. Let's take a closer look at that phenomenon.

  Compute and output the average age of the people in the ancestry data set per century. A person is assigned to a century by taking their year of death, dividing it by 100, and rounding it up, as in Math.ceil(person.died / 100).

  For bonus points, write a function groupBy that abstracts the grouping operation. It should accept as arguments an array and a function that computes the group for an element in the array and returns an object that maps group names to arrays of group numbers.
*/
const ancestryFile = require('../data/ancestry.js');
const ancestry = JSON.parse(ancestryFile);

// My Solution:
// Average utility function
function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

// Function that takes in array and group determination callback
function groupBy(array, groupOf) {
  // Groups is an empty object
  let groups = {};
  // Loop over each item in the array
  array.forEach(function(element) {
    // Pull out group determination
    const groupName = groupOf(element);
    // If there's a key with the name of that group, push element into that item
    if (groupName in groups) {
      groups[groupName].push(element);
    } else {
      // Otherwise if there isn't a key with the name of that group, create that key, and start an array with that element
      groups[groupName] = [element]
    }
  })
  return groups;
};
  

// Using the groupBy function, produce an object where the ancestry array has been grouped by their century
const byCentury = groupBy(ancestry, function(person) {
  return Math.ceil(person.died / 100);
});

console.log(byCentury);


// For each century in the byCentury object,
for (let century in byCentury) {
  // calculate each person's age
  const ages = byCentury[century].map(function(person) {
    return person.died - person.born
  });
  console.log(`${century}: ${average(ages)}`)
  
  // then console.log the average age, using the Average utitlity function
}

// Solution:


/*
  Mother-Child Age Difference
  Using the example data set from this chapter, compute the average age difference between mothers and children (the age of the mother when the child is born). You can use the average function defined earlier in this chapter.

  Note that not all the mothers mentioned in the data are themselves present in the array. The byName object, which makes it easy to find a person's object from their name, might be useful here.
*/
const ancestryFile = require('../data/ancestry.js');
const ancestry = JSON.parse(ancestryFile);

// My Solution:

// Take a person
function average(array) {
  function plus(a, b) {
    return a + b;
  };
  return array.reduce(plus) / array.length;
};


// For Each person in ancestry, map their birth year - their mother's birth year
const arrayOfAges = [];
const findAges = ancestry
  .map(person => {
    const mother = ancestry
      .filter(mother => mother.name === person.mother)
    if (mother[0]) {
      age = person.born - mother[0].born;
      arrayOfAges.push(age);
    }
  });
console.log(average(arrayOfAges));

// Solution:
function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

var differences = ancestry.filter(function(person) {
  return byName[person.mother] != null;
}).map(function(person) {
  return person.born - byName[person.mother].born;
});

console.log(average(differences));
// → 31.2

/*
  Still struggling with this high order function approach as Marijn Haverbeke uses it. I started out in the same way, using the average and byName code portions, but once I started working with the entire data structure I quickly fell back to my comfort area of .map and .filter.
*/

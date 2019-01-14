const ancestryFile = require('../../data/ancestry.js');
const ancestry = JSON.parse(ancestryFile);

const theSet = ['carel Haverbeke', 'Maria van Brussel', 'Donald Duck'];

function isInSet(set, person) {
  return set.indexOf(person.name) > - 1;
};

console.log(ancestry.filter(function(person) {
  return isInSet(theSet, person);
}));

console.log(ancestry.filter(isInSet.bind(null, theSet)));

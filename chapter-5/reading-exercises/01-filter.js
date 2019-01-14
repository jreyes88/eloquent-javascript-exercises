const ancestryFile = require('../../data/ancestry.js');
const ancestry = JSON.parse(ancestryFile);

function filter(array, test) {
  var passed = [];
  for (var i = 0; i < array.length; i += 1) {
    if (test(array[i])) {
      passed.push(array[i]);
    }
  }
  return passed;
}

console.log(filter(ancestry, function(person) {
  return person.born > 1900 && person.born < 1925;
}));

console.log(ancestry.filter(function(person) {
  return person.father == 'Carel Haverbeke';
}))
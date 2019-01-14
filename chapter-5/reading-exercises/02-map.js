const ancestryFile = require('../../data/ancestry.js');
const ancestry = JSON.parse(ancestryFile);

function map(array, transform) {
  let mapped = [];
  for (let i = 0; i < array.length; i += 1) {
    mapped.push(transform(array[i]));
  };
  return mapped;
};

let overNinety = ancestry.filter(function(person) {
  return person.died - person.born > 90;
});

console.log(map(overNinety, function(person) {
  return person.name;
}));

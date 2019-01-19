let map = {};
function storePhi(event, phi) {
  map[event] = phi;
};

storePhi('pizza', 0.069);
storePhi('touched tree', -0.081);

// 
Object.prototype.nonsense = 'hi';

for (var name in map) {
  console.log(name);
};

// nonsense is an enumerable property
console.log('nonsense' in map);

// toString is a nonenumerable property
console.log('toString' in map);

delete Object.prototype.nonsense;

// We can define our own nonenumerable properties
Object.defineProperty(Object.prototype, "hiddenNonsense", {
  enumerable: false,
  value: "hi",
});

for (var name in map) {
  console.log(name);
};

console.log(map.hiddenNonsense);

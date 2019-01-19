console.log('Are Array.prototype.toString and Object.prototype.toString the same?');
console.log(Array.prototype.toString == Object.prototype.toString);

console.log(' ');
console.log('Array.prototype.toString:');
console.log([1, 2].toString());

console.log(' ');
console.log('vs.');

console.log(' ');
console.log('Object.prototype.toString:');
console.log(Object.prototype.toString.call([1, 2]));

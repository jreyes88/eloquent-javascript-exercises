function Rabbit(type) {
  this.type = type;
};

Rabbit.prototype.speak = function(line) {
  console.log(`The ${this.type} rabbit says '${line}'.`);
};

Rabbit.prototype.teeth = 'small';

const killerRabbit = new Rabbit('killer');
const blackRabbit = new Rabbit('black');

console.log(killerRabbit.teeth);

killerRabbit.teeth = 'long, sharp, bloody';
console.log(killerRabbit.teeth);

console.log(blackRabbit.teeth);
console.log(Rabbit.prototype.teeth);

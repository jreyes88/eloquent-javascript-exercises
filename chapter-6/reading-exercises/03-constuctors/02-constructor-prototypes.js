function Rabbit(type) {
  this.type = type;
};

Rabbit.prototype.speak = function(line) {
  console.log(`The ${this.type} rabbit says '${line}'.`);
};

const blackRabbit = new Rabbit('black');
blackRabbit.speak('Doom...');

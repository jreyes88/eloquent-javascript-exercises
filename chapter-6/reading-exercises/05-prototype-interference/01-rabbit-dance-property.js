function Rabbit(type) {
  this.type = type;
};

Rabbit.prototype.speak = function(line) {
  console.log(`The ${this.type} rabbit says '${line}'.`);
};

Rabbit.prototype.teeth = 'small';

Rabbit.prototype.dance = function() {
  console.log(`The ${this.type} rabbit dances a jig.`);
};

const killerRabbit = new Rabbit('killer');

killerRabbit.dance();

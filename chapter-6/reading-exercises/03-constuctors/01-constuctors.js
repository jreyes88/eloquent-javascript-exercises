function Rabbit(type) {
  this.type = type;
};

const killerRabbit = new Rabbit('killer');
const blackRabbit = new Rabbit('black');
console.log(blackRabbit.type);

const protoRabbit = {
  speak: function(line) {
    console.log(`The ${this.type} rabbit says '${line}'.`)
  }
}

const killerRabbit = Object.create(protoRabbit);
killerRabbit.type = 'killer';
killerRabbit.speak('SKREEEEEE!');

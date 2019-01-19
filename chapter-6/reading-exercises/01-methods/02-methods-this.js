function speak(line) {
  console.log(`The ${this.type} rabbit says '${line}'.`);
};

const whiteRabbit = {
  type: 'white',
  speak,
};

const fatRabbit = {
  type: 'fat',
  speak,
};

whiteRabbit.speak('Oh my years and whiskers, how late it\'s getting!');
fatRabbit.speak('I could sure use a carrot right now.');

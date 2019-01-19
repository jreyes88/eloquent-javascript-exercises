/*
  When you are worried that someone (some other code you loaded into your program) might have messed with the base object prototype, I recommend you write your for/in loops like this:
*/

for (var name in map) {
  if (map.hasOwnProperty(name)) {
    // ...this is an owned and enumerable
  }
};

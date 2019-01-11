/*
  Deep Comparison
  The == operator compares objects by identity. But sometimes, you would prefer to compare the values of their actual properties.

  Write a function, deepEqual, that takes two values and returns true only if they are the same value or are objects with the same properties whose values are also equal when compared with a recursive call to deepEqual.

  To find out whether to compare two things by identity (use the === operator for that) or by looking at their properties, you can use the typeof operator. If it produces "object" for both values, you should do a deep comparison. But you have to take one silly exception into account: by a historical accident, typeof null also produces "object".
*/

function deepEqual(a, b) {

  // If the two objects are the same without type coercion, return true.
  if (a === b) {
    return true;
  };

  // If neither is an object, or either is "null", return false.
  if (a == null || typeof(a) != "object" ||
      b == null || typeof(b) != "object" ) {
    return false;
  }

  // Store each object's keys into a respective variable.
  let keysA = Object.keys(a), keysB = Object.keys(b);

  // If the number of keys in each object does not match, return false.
  if (keysA.length != keysB.length) {
    return false;
  }

  // Compare keys in Object A to keys in Object B
  for (let key of keysA) {
    // If there's no key in Object B to match the key in Object A
    // OR
    // If we call this function recursively against the keys in both objects
    // then return false
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) {
      return false;
    }
  }

  // Otherwise, return true.
  return true;
};

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true

/*
  A List
  Objects, as generic blobs of values can be used to build all sorts of data structures. A common data structure is the list (not to be confused with the array). A list is a nested set of objects, with the first object holding a reference to the second, the second to the third, and so on.

  var list = {
    value: 1,
    rest: {
      value: 2,
      rest: {
        value: 3,
        rest: null,
      }
    }
  }

  A nice thing about lists is that they can share parts of their structure. For example, if I create two new values {value: 0, rest: list} and {value: -1, rest: list} (with list referring to the variable defined earlier), they are both independent lists, but they share the structure that makes up their last three elements. In addition, the original list is also still a valid three-element list.

  Write a function arrayToList that builds up a data structure like the previous one when given [1, 2, 3] as an argument, and write a listToArray function that produces an array from a list. Also write the helper functions prepend, which takes an element and a list and creates a new list that adds the element to the front of the input list, and nth, which takes a list and a number and returns the element at the given position in the list, or undefined when there is no such element.

  If you haven't already, also write a recursive version of nth.
*/

// My solution:
function arrayToList(array) {
  let list = null;
  for (let i = array.length - 1; i >= 0; i -= 1) {
    list = {
      value: array[i],
      rest: list,
    }
  }
  return list;
};
const list = arrayToList([1, 2, 3]);

function listToArray(list) {
  let array = [];
  for (let node = list; node; node = node.rest) {
    array.push(node.value);
  }
  return array;
};
const array = listToArray(arrayToList([1, 2, 3]));

function prepend(value, list) {
  return { value, rest: list }
};
const prepended = prepend(5, prepend(4, null));

function nth(list, n) {
  if (!list) {
    return null;
  } else if (n == 0) {
    return list.value;
  } else {
    return nth(list.rest, n - 1);
  }
};
const nthvalue = nth(arrayToList([10, 20, 30]), 2);
console.log(nthvalue);

/*
  arrayToList() works by working backwards through the array and building up the list from right to left. We start by declaring rest as null, but with each iteration left, rest is defined as the whole list, almost recursively.

  listtoArray() is a tricky one, because of the odd for-loop construction. The important part is the section "node; node = node.rest." The middle argument of the for-loop is the condition to terminate the loop. Typically it's i > array.length or something. In this loop, node compares itself to node.rest, and the loop will continue until node = null, at which point the loop terminates. With that as the iteration rule, the loop otherwise simply pushes node.value into the empty array.

  prepend() is fairly straight-forward so long as you can envision the function and its arguments as well as the result we're seekend.

  nth() first checks whether there's no list provided. Then it recursively calls itself for each step of the list, and reducing n until n is 0, at which point it returns list.value.
*/
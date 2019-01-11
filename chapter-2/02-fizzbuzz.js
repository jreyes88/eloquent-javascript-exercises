/* 
  FizzBuzz
  Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead. When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5.
*/

// My Solution:
for (let i = 1; i <= 100; i += 1) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  }
  if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  }
  else {
    console.log(i);
  };
};

// Solution:
for (let i = 1; i <= 100; i += 1) {
  let output= "";
  if (i % 3 === 0) {
    output += "Fizz";
  }
  if (i % 5 === 0) {
    output += "Buzz";
  };
  console.log(output || i);
};

/*
  Notes:
  Again, I wasn't incorrect, but there was a more succint way to do it.
  The two if conditionals using modulus were correct.
  But one thing we can rely on is that JavaScript will check the i % 3 before i % 5 every time.
  By storing "Fizz" in a variable we can later on concatenate "Buzz" if both conditions are met.
  It's important not to use an "if else" here, though.
  Lastly, we can use the || double pipes to log either the output string, or i.
*/

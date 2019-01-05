/*
  Chess Board
  Write a program that creates a string that represents and 8 x 8 grid, using new-line characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chess board.
  Passing this string to console.log should show something like this:

  # # # # 
   # # # #
  # # # # 
   # # # #
  # # # # 
   # # # #
  # # # # 
   # # # #

  When you have a program that generates this pattern, define a variable `size = 8` and change the program that it works for any `size`, outputting a gird of the given width and height.
*/

// My Solution:
let board = "";
let size = 8;
for (let i = 0; i < size; i += 1) {
  if (i % 2 === 0) {
    for (let j = 0; j < size; j += 1) {
      if (j % 2 !== 0) {
        board += "#";
      } else {
        board += " ";
      }
    };
  } else {
    for (let j = 0; j < size; j += 1) {
      if (j % 2 === 0) {
        board += "#";
      } else {
        board += " ";
      }
    };
  }
  if (i !== (size - 1)) {
    board += "\n";
  } else if (i === size - 1) {
    break;
  }
};
console.log(board);

// Solution:
let size = 8;
let board = "";
for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += "#";
    } else {
      board += " ";
    }
  }
  if (y !== (size - 1)) {
    board += "\n";
  } else {
    break;
  }
}
console.log(board);

/*
  Notes:
  What makes the solution work is recognizing the pattern of the relationship between the X and Y coordinates.
  The X and Y coordinates that are both even or odd will always yield an even number (checked by % 0);
  The sum where X is even and Y is odd or vice versa will yield and odd number.
  Coordinates with even sums can always be assigned a "#" and odd sums a " ".
  I got the nested loop correct, but the solution, recognizing this pattern, eliminated one of the loops I wrote.

  The last thing that I will add to the solution is lines 58 to 62, in order to eliminate the extra break line at the very end of the board, which was not in the target output from the question.
*/

Checks if a given number is within a given range.  
First arg is the range array, which holds 2 numbers:  the lowest possible number and the highest.
Second arg is the number you're checking.

inRange(range: [min, max], numberToCheck); // returns boolean

Examples:

inRange([2.5, 8.5], 9.5);  // returns false

inRange([0, 200], 100); // returns true

inRange([-10, 0], 10); // returns false
const inputYear = '1994';
console.log(Number(inputYear)); // Convert the string to number
console.log(inputYear + 18);

// Number
Number(inputYear) + 2; // 1996
Number('Senthur'); // NaN (Not a number)
console.log(typeof NaN); // Number

// String
console.log(String(25)); //converts number 25 to string "25"

/****************************************
 * type coercion
 */
console.log('I am ' + 28 + ' years old');
// Javascript automatically converts number to string when using concatination operator +

// Other Mathemetical operators tends to convert string to number other than + operator.
console.log('6' - '1'); // 5
console.log('6' * 2); // 12

let n = '1' + 1;  // '11' (concatinates as + operator and converts number 1 to string);
n = n - 1; // converts '11' string to number and -1 results in 10 as number
console.log(n); // 10
console.log(1 + 2 + '3'); // '33'

// 6 Falsy values
/*
* 0, '', undefined, null, NaN, false,
* All above will be converted to false on Boolean
*/

console.log(Boolean(0));  //false
console.log(Boolean(undefined)); // false
console.log(Boolean('Senthur')); // true
console.log(Boolean({})) // true
console.log(Boolean('')) // false
console.log(Boolean(NaN)) // false


// example
const money = 0;
if (money) {
    console.log("Don't spend it all");
} else {
    console.log('You should get a job!');
}

let height;
if (height) {
    console.log('Height is defined!');
} else {
    console.log('Height is undefined!');
}
// Ternary Operator requires a condition and true value and false value
const age = 28;
age >= 18 ? console.log('I like to drink wine!') : console.log('I like to drink water!');

// its like an if else statement in a single line 
// ternary operator always returns a value

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);



// without ternary Operator
let drink2;
if (age >= 18) {
    drink2 = 'wine';
} else {
    drink2 = 'water';
}
console.log(drink);

// Ternary Operator can also be used in string literals as expressions.
console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);
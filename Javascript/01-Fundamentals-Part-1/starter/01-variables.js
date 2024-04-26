// Variables

// Variables Best is to use Camel case
let first = 'Senthur';
let firstName = "Senthur"; // for morethan one word in camel case
let firstNameWithText = 'Senthur';

// Variables can't start with a number
/*
let 3firstname = 3;         // SyntaxError: Invalid or unexpected Token
*/

// Variables can only contain numbers/letters/underscores/dollarsign
/* 
let first&LastName = 'Senthur Athiban';
let first_name = 'Senthur Athiban';
*/

// Reserved keywords too not allowed on variables
/*
let new = 50;
let function = 20;
*/

// underscores and dollars are allowed
let $new = 50;
let _function = 20;

// Should not start with the Capital letter variable though it is not illegal but its a convension to be followed
let Person = 'Senthur';
// If its a constant then should write in capital case
let PI = 3.1415;
// instead of 
let pi = 3.1415;
// Also define variable based on the value it holds so that variable name gives some meaning.
let test;
// if a variable is declared but not defined then the type of variable and value of the variable would be undefined

// Variables can be defined by var,let, const keywords
/*
let, var - value of these variables can be changed in future.
const - value can't be changed and can't define withoud declaring it.
Avoid declaring variables without any of these keywords
*/


// Exercise

// Declare variables called country, continent and population and assign their values according to your own country (population in millions).
let country = 'India';
let continent = 'Asia';
let population = 10000000;
console.log(country, continent, population);

// Declare a variable called isIsland and set its value according to your country. The variable should hold a Boolean value. Also declare a variable language, but don't assign it any value yet.

let isIsland = false;
let language;
console.log(typeof isIsland, typeof population, typeof country, typeof language);

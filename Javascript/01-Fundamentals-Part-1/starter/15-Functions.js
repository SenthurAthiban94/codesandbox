function logger() {
    console.log('My name is Logger');
}

// without Parameters
logger(); // Using a function called  as calling/running/invoking a function
logger();
logger();

// A function can receive a data and return a data.
// With parameters
function fruitProcessor(apples, oranges) {
    // params will be defined once this function is called;
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const apoleJuice = fruitProcessor(5, 0); // store the value in variable returned from function
console.log(apoleJuice)

// If there is no function call the function will never execute, and it is used to reuse the code.
// ex: const num = Number('28');


// Function Declaration
function calcAge1(birthYear) {
    return 2024 - birthYear;
}

// Argument is the actual value passed to a function - 1994
// Parameter is the value received inside the function - birthyear
const age1 = calcAge1(1994);

// Function expression
const calcAge2 = function (birthYear) {
    return 2024 - birthYear;
}
const age2 = calcAge2(1994);

console.log(age1, age2);

// Differece between function declaration & function expression is that function call can be done before declaration in function declaration varies in func expression it can be called only after function is declared.

// Function calling another function
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    // params will be defined once this function is called;
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}
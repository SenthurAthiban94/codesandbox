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


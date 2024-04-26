const firstName = 'Senthur';
const job = 'Software Engineer';
const birthYear = 1994;

const senthur = "I'm " + firstName + ", a " + (2024 - birthYear) + "years old " + job + '!';
console.log(senthur);

// Template Literals in ES6
const senthurES6 = `I'm ${firstName}, a ${2024 - birthYear}years old ${job}!`;
console.log(senthur);

// Before ES6 for multiline
console.log('I am line 1 \n\
I am line 2\n\
I am line 3');

// After ES6 using Template Literals
console.log(`I am line 1
I am line 2
I am line 3`)
const age = 19;
const isOldEnough = age >= 18;

if (isOldEnough) {
    console.log('Sarah can start with driving license');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait for another ${yearsLeft} years`);
}

const birthYear = 1994;
let century;
if (birthYear <= 2000) {
    century = 20;
}
else {
    century = 21;
}
console.log(century);

// Multiple conditions
if (age < 18) {
    console.log('you are less than 18');
} else if (age === 18) {
    console.log('your age is 18');
} else {
    console.log('your age is more than 18');
}
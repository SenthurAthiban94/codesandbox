const calcAge2 = function (birthYear) {
    return 2024 - birthYear;
}

// Arrow function return implicitly 
const calcAge3 = birthYear => 2024 - birthYear;
const age3 = calcAge3(1994);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2024 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement}`;
}

console.log(yearsUntilRetirement(1994, 'Senthur'));
// Operators
/*
Mathematical
comparision operator
assignment operator
logical operator, etc
*/


// Mathematical Operators
const ageSenthur = 2024 - 1994;
console.log(ageSenthur, ageSenthur * 2, ageSenthur / 4);

// Power of operation 2 to the power of 3
// ** - power of
console.log(2 ** 3);


// Concatination operator
const firstName = 'senthur';
const lastName = 'athiban';
console.log(firstName + ' ' + lastName); // senthur athiban


// Assignment operator is =
let a = 5 + 5;
console.log(a); // 10
a += 5; // x= x+5;
console.log(a); // 15
a *= 2;
console.log(a); // 30
a /= 15;
console.log(a); // 2
a++;
console.log(a); // 3
a--;
console.log(a); // 2


// Comparision Operator >,<,>=,<=
console.log(ageSenthur > 18);
console.log(ageSenthur < 18);
console.log(ageSenthur >= 18);
console.log(ageSenthur <= 18);

// Equality Operators ==,===
console.log(ageSenthur == 18); // loose comparision to comare values without checking type
console.log(ageSenthur === 18); // strict comparision to compare both value and type
// Difference Operators !=, !==
console.log(ageSenthur != 18); // loose comparision to comare values without checking type
console.log(ageSenthur !== 18); // strict comparision to compare both value and type


// Operator Precedance
console.log(ageSenthur + 1 > ageSenthur - 1);

/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence

1. Grouping ()
2. Mathematical operators from left to right
3. Comparision operator
4. Exponentiation Operator from right to left
5. Assignment or Nullish operators from right to left
*/

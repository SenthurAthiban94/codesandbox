const friend1 = 'Senthur';
const friend2 = 'barani';
const friend3 = 'Prabakaran';

// Array can be defined by the following ways and can hold different datatypes
const multidata = ['Senthur', 28, true];
const friends = ['Senthur', 'Barani', 'Prabakaran'];
const years = new Array(1994, 1995, 1996);

console.log(friends[0]); // first element
console.log(friends[2]); // last element
console.log(freinds[12]); // undefined as array contains only 3 elements so index can be till 0,1,2 and not 12

console.log(friends.length) // 3 - total elements in that array
console.log(friends[friends.length - 1]) // to get last element in an array

friends[2] = 'Jai';     // Prabakaran -> Jai
console.log(friends);
// As friends is defined as const how can be the value be changed.
// Only Primitive values are immutable when declared as const
// So value of the array could be changed but not the array itself
friends = ['james']; // this can't be done as it changes the value of variable friends instead of changing the value inside the array. Same goes with objects.


const calcAge = function (birthYear) {
    return 2024 - birthYear;
}

const result = calcAge(years);
console.log(result); //NaN as its try to subtract array from a number (2024-[...])

const result1 = calcAge(years[0]);
const result2 = calcAge(years[1]);
const result3 = calcAge(years[2]);
console.log(result1, result2, result3);
const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[2])];
//  results of functions will also be stored in the ages array on its corresponding index.



// Array Methods
// push - adds new element to the last of the array and returns the updated array length
const friends = ['senthur'];
const updatedFriendsLength = friends.push('Athiban');
console.log(friends); // ['senthur','Athiban'];
console.log(updatedFriendsLength); // 2

// unshift - adds element to start of the array and returns updated array length
const friendslength = friends.unshift('john');
console.log(friends); // ['john', 'senthur', 'Athiban']
console.log(friendslength); // 3

// pop - removes last element and returns the index of deleted element
const poppedElement = friends.pop();
console.log(friends);   // ['john','senthur']
console.log(poppedElement); // Athiban

// shift - removes first element from array and returns the deleted element;
const shiftedElement = friends.shift();
console.log(friends); // ['senthur'];
console.log(shiftedElement); // john

// indexOf - returns the index of the element in the array and if the element doesn't exist in array then returns -1
console.log(friends.indexOf('senthur')); // 0
console.log(friends.indexOf('Aswin')); // -1

// includes - returns boolean (true/false) to check if element exist in an array;
console.log(friends.includes('senthur')); // true
console.log(friends.includes('athiban')); // false

/**
 * map - requires a function that would be called with 2 parameters for each element of an array 
 * param1 - element of the current iteration in array
 * param2 - index of the current element in array
 * returns a new array leaving the existing array unmodified.
 */
const updatedFriends = friends.map((friend, friendIndex) => `Name${friendIndex + 1}: ${friend}`);
console.log(friends); // ['senthur']
console.log(updatedFriends); // ['Name1: senthur']


/**
 * filter - requires a function that would be called with 2 parameters for each element of an array 
 * param1 - element of the current iteration in array
 * param2 - index of the current element in array
 * returns a new array with only the elements for which the iteration function returns true, leaving the existing array unmodified.
 * if non of the iterative function returns true then empty array is returned.
*/
console.log(friends); // ex: ['senthur', 'athiban']
const filteredFriends = friends.filter((friend, friendIndex) => friend === 'senthur');
console.log(filteredFriends); // ['senthur'];
const emptyfilteredFriends = friends.filter((friend, friendIndex) => friend === 'selva');
console.log(friends); // ['senthur', 'athiban']
console.log(emptyfilteredFriends); // []




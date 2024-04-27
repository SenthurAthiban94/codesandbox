console.log('Lifting weights repetition 1');
console.log('Lifting weights repetition 2');
console.log('Lifting weights repetition 3');
console.log('Lifting weights repetition 4');
console.log('Lifting weights repetition 5');

// For Loop
for (let rep = 1; rep <= 5; rep++) {
    console.log(`Lifting weights repetition ${rep}`);
}

// Looping Array
const profile = [
    'Senthur',
    'Athiban',
    1994,
    'Software Engineer',
    ['FE', 'BE']
]
const types = [];

for (let i = 0; i < profile.length; i++) {
    // reading an array
    console.log(profile[i], typeof profile[i]);

    // Filling another array
    // types[i] = typeof profile[i];

    // push array methods can be used instead of key
    types.push(typeof profile[i])
}
console.log(types); // ['string','string','number','string','object']


// Continue & Break in loops
for (let i = 0; i < profile.length; i++) {
    if (typeof profile[i] !== 'string') continue; // continueing or skipping current iteration on this condition
    types.push(typeof profile[i])
}
console.log(types); // ['string','string','string']

// Break when there is a number
for (let i = 0; i < profile.length; i++) {
    if (typeof profile[i] === 'number') break; // breaking the for loop iteration
    types.push(typeof profile[i])
}
console.log(types); // ['string','string']


// Loop through an array in reverse (Backward)
for (let i = profile.length - 1; i >= 0; i--) {
    types.push(typeof profile[i])
}
console.log(types); // ['object','string','number','string','string']

// Nested Loops
const nestedFriends = [
    'senthur athiban',
    ['amit', 'shivam', 'aswin']
]
const people = [];

for (let friend = 0; friend < nestedFriends.length; friend++) {
    if (Array.isArray(nestedFriends[friend])) {
        for (let j = 0; j < nestedFriends[friend].length; j++) {
            people.push(nestedFriends[friend][j]);
        }
    } else {
        people.push(nestedFriends[friend]);
    }
}
console.log(people); // ['senthur athiban','amit', 'shivam', 'aswin']
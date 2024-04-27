// Unless Array storing values based on index Object stores values based on key-value pairs usually created by open and close curly braces
const employee = {
    firstName: 'Senthur',
    age: 28,
    birthYear: 1994,
    calcAge: function () {
        // set the calculated age to its own object itself incase this method has to be called in multiple places instead of doing the below operation multiple times we can directly retrive from calculatedAge field by calling this method only once.
        this.age = 2024 - this.birthYear;
        return this.age;
    },
    'created at': '01-03-2024',

}

// Note Arrays to be used for ordered data and unordered data in objects.

// values of the object can be accessed using keys by bracket notation or dot notation
console.log(employee['firstName']); // senthur - bracket notation
console.log(employee.firstName); // senthur - dot notation

// Note: Dot notation can't be used in terms of 2 words as key seperated by space.
// ex:
console.log(employee['created at']); // '01-03-2024' - bracket notation
// console.log(employee.created at);  throws syntax error

// if we try to access keys that are not present in object then undefined will be returned
console.log(employee.invalidKey); // undefined

// we can also add new keys through dot notation
employee.lastName = 'Athiban';
console.log(employee);
/**
 * {
 *      firstName: 'Senthur',
 *      lastName: 'Athiban',
 *      age: 28,
 *      'created at': '01-03-2024'
 * }
 */

// Functions can also be defined within the object and are called as object methods.

employee.printFullName = function () {
    // this keyword usually refers to the object calling the method.
    return this.firstName + ' ' + this.lastName;
}

// Here Employee is the object calling printFullName() method and so this refers to employee object.
console.log(employee.printFullName()); // Senthur Athiban
console.log(employee['printFullName']());// Senthur Athiban


// In this case this function doesn't belong to any object instead to the root window object of the browser.
function test() {
    console.log('test', this);
}
// So calling this would refer to the window object itself
test(); // will print 'test', {...}<window Object>

// Object Methods
// keys - returns the array of keys present in that object
const employeeKeys = Object.keys(employee);
console.log(employeeKeys); // ['firstName','lastName','age','created at']

employee.calcAge();
console.log(employee.age);
console.log(employee.age);
console.log(employee.age);
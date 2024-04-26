'use strict'; // Activate strict mode in javascript


let hasDrivingLicense = false;
const passTest = true;

if (passTest) {
    // Without strict mode this don't throw error as there is 's' added additionaly in this variable
    hasDrivingsLicense = true;
    /* With strict mode this would be the error msg in console.
        14-Strict Mode.js:9 Uncaught ReferenceError: hasDrivingsLicense is not defined
    */
}
if (hasDrivingLicense) {
    console.log('i can drive');
}


/* Reserved keywords names for variables would be thrown error on strict mode turned on 
Uncaught SyntaxError: Unexpected strict mode reserved word
*/
const interface = 'Audio';
const private = 'Audio';
// const if = 'If case';
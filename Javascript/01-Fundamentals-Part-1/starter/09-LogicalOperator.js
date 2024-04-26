const hasDrivingLicense = true;
const hasGoodvision = false;

console.log(hasDrivingLicense && hasGoodvision); // false
console.log(hasDrivingLicense || hasGoodvision); // true
console.log(!hasDrivingLicense); // false


const shouldDrive = hasDrivingLicense && hasGoodvision;

if (shouldDrive) {
    console.log('Sarah is able to drive');
} else {
    console.log('Someone else should drive...');
}

const isTired = true;
console.log(hasDrivingLicense && hasGoodvision && isTired); // false

if (hasDrivingLicense && hasGoodvision && !isTired) console.log('Sarah can drive vehicle');
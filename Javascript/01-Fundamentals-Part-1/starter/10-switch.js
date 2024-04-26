const day = 'monday';

switch (day) {
    case 'monday':       // day === 'monday'
        console.log('Plan course structure');
        break;
    case 'tuesday':
        console.log('prepare theory videos');
        break;
    case 'wednessday':
    case 'thursday':        // day === 'wednessday' || day === 'thursday'
        console.log('Write code on wednesday & thursday');
        break;
    case 'friday':
        console.log('record videos');
        break;
    case 'saturday':
    case 'sunday':      // day === 'saturday' || day === 'sunday'
        console.log('Enjoy the weekend!');
        break;
    default:
        console.log('Not a valid Day');
        break;
}
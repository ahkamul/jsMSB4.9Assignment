// with if --- else

// let a = 3;
// let b = 3; 

// if (a > b){
//     console.log(a + ' is greater than ' + b + '.');
// } else if (b > a) {
//     console.log (b + ' is greater than ' + a + '.')
// } else {
//     console.log (a + ' and ' + b + ' are equal.')
// }

// with switch ----- case

// let a = 13;
// let b = 13;

// switch (true){
//     case (a > b):
//         console.log(a + ' is greater than ' + b + '.');
//         break;
//     case (a < b):
//         console.log(b + ' is greater than ' + a + '.');
//         break;
//     default:
//         console.log (a + ' and ' + b + ' are equal.')

// }


// with ternary operator

let a = 13;
let b = 19;

console.log (
    a > b
    ? a + ' is greater than ' + b + '.'
    : a < b 
    ? b + ' is greater than ' + a + '.'
    : a + ' and ' + b + ' are equal.'
)
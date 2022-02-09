// if ----- else

// let num1 = -22;
// let num2 = -2;
// let num3 = 22;

// if (num1 <= num2 && num1 <= num3) {
//     console.log (num1 + ' is the smallest number');
// } else if (num2 <= num1 && num2 <= num3){
//     console.log (num2 + ' is the smallest number')
// } else {
//     console.log (num3 + ' is the smallest number')
// }

// switch ---- case 

// let num1 = 22;
// let num2 = 2;
// let num3 = 22;

// switch (true) {
//     case (num1 <= num2 && num1 <= num3):
//         console.log (num1 + ' is the smallest number');
//         break;

//     case (num2 <= num1 && num2 <= num3):
//         console.log (num2 + ' is the smallest number');
//         break;

//     default:
//         console.log (num3 + ' is the smallest number');
// }


// with ternary operator

let num1 = 12;
let num2 = -92;
let num3 = -22;

console.log (
    num1 <= num2 && num1 <= num3
    ? num1 + ' is the smallest number'
    : num2 <= num1 && num2 <= num3
    ? num2 + ' is the smallest number'
    : num3 + ' is the smallest number'
)


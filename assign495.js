// with if ---- else

let number = 112;

if (number % 5 === 0 && number % 11 !== 0){
    console.log (number + ' is divisible by 5')
} else if (number % 11 === 0 && number % 5 !== 0){
    console.log (number + ' is divisible by 11')
} else if (number % 5 === 0 && number % 11 === 0){
    console.log (number + ' is divisible by 5 and 11 both')
} else {
    console.log (number + ' is not divisible by 5 and 11')
}
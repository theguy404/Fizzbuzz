// How high to count to
const COUNTER = 100;
// Multiples of below will Fizz
const FIZZ = 3;
// Multiples of below will buzz
const BUZZ = 5;

//counts to the counter number
for (let i = 1; i < COUNTER + 1; i++) {
    let result = [ test(i, FIZZ), test(i, BUZZ) ];
    
    // check if i is equal to a fizz or a buzz or both
    if (result.find(isZero) == 0) {
        
        // if the number is a multiple of both then log FizzBuzz
        if (isZero(result[0]) && isZero(result[1])) {
            console.log("FizzBuzz");
        }
        
        // if the number is a mutiple of FIZZ value then log Fizz
        if (result[0] == 0 && !result[1] == 0) {
            console.log("Fizz");
        }
        
        // if the number is a multiple of BUZZ value then log Buzz
        if (result[1] == 0 && !result[0] == 0) {
            console.log("Buzz");
        }
        
    // if i is not equal to a fizz or a buzz then log the number
    } else {
        console.log(i);
    }
}

function test(input1, input2) {
    return input1 % input2;
}

function isZero(input) {
    if (input == 0) {
        return true;
    } else {
        return false;
    }
}
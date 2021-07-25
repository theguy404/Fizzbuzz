// How high to count to
const COUNTER = 100;
// Multiples of below will Fizz
const FIZZ = 3;
// Multiples of below will buzz
const BUZZ = 5;

//counts to the counter number
for (let i = 1; i < COUNTER + 1; i++) {
    let fizzarg = i % FIZZ;
    let buzzarg = i % BUZZ;
    
    // check if i is equal to a fizz or a buzz or both
    if(fizzarg == 0 || buzzarg == 0) {
        if(fizzarg == 0 && buzzarg == 0) {
            console.log("FizzBuzz");
        } else if (fizzarg == 0) {
            console.log("Fizz");
        } else if (buzzarg == 0) {
            console.log("Buzz");
        }
    // if i is not equal to a fizz or a buzz then log the number
    } else {
        console.log(i);
    }
}
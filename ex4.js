// Use a for loop to ...
// 1. Log numbers from 1 to 100 that are divisible by 5

const divideByFive = n => {
    for(let i=0; i <= n; i += 5){
        console.log(i); 
    }
}
divideByFive(100);

// 2. Use a nested for loop to print “I’m the outer loop” 3 times and “I’m the inner loop” within the inner loop.

const nestedLoop = (n=3) => {
    for(let i=0; i < n; i++){
        console.log(`I’m the outer loop`);
        for(let j=0; j < n; j++){
            console.log(`I’m the inner loop`);
        }
    }
}
nestedLoop(2);


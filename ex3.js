// Write a function  ...

// 1. That logs “The current date and time is “ - the current date and time 
// hint; you will need to research the Date object to get the current date! (https://www.w3schools.com/jsref/jsref_obj_date.asp)

// 2. That prints “I’m ready” after 5 seconds.
// hint: you will need to research the setTimeout JavaScript function. (https://www.w3schools.com/jsref/met_win_settimeout.asp)

// 3. Create a function to convert today’s temperature from Celsius to Fahrenheit
// a) Celsius to Fahrenheit: (°C × 9/5) + 32 = °F
// b) Fahrenheit to Celsius: (°F − 32) x 5/9 = °C

// 1. That logs “The current date and time is “ - the current date and time 
todaysDay = () =>{
let currentdate = new Date(); 
let day = currentdate.toDateString().split('T')[0];
let time = currentdate.toLocaleDateString()
console.log(`The current date and time : ${day} - ${time}`);
}
todaysDay();

// 2. That prints “I’m ready” after 5 seconds
 setTimeout(myGreeting, 5000);


function myGreeting() {
    console.log(`I'm ready after 5 second`);
  }
  // 3. Create a function to convert today’s temperature from Celsius to Fahrenheit
  // a) Celsius to Fahrenheit: (°C × 9/5) + 32 = °F
  const celciusToFahrenheit = (celcius) => (celcius * 9/5) + 32;
  console.log(celciusToFahrenheit(32));

 // b) Fahrenheit to Celsius: (°F − 32) x 5/9 = °C
 const fahrenheitToCelcius = (fahrenheit) => ((fahrenheit - 32) * 5/9).toFixed(2);
  console.log(fahrenheitToCelcius(100));
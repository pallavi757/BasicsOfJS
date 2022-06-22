//1.Example
const message = function() {  
    console.log("This message is shown after 3 seconds");
}
 
setTimeout(message, 3000);

// callback function example
function main(x){ // x is function passed as an argument
  x();
}
function callback(){
  console.log("hi");
}

main(callback);   

//Synchronous Callback
function showTime(x,done){    
  console.log(" Show Time is at ", x);
  done();
}

function showEnd(){
  console.log("Show Ends")
}
showTime(9,showEnd);

console.log("done");//code execute line by line


//2.callback with anonymous function
setTimeout(function() {  
    console.log("This message is shown after 3 seconds");
}, 3000);

//Non blocking asynchronous method
console.log(1);
    setTimeout(function(){console.log(2)});// with callback
    console.log(3);

//callback with anonymous function 
// function filter(numbers, callback) {
//     let results = []; //stores odd numbers 
//     for (const number of numbers) {
//       if (callback(number)) {
//         results.push(number);
//       }
//     }
//     return results;
//   }
  
//   let numbers = [1, 2, 4, 7, 3, 5, 6]; //declare array of numbers
  
//   let oddNumbers = filter(numbers, function (number) {
//     return number % 2 != 0;
//   });
  
//   console.log(oddNumbers);

//3.Callback as an Arrow Function
setTimeout(() => { 
    console.log("This message is shown after 3 seconds");
}, 3000);

//4.Parameters in callback function
function newShow(x){ // x is argument for callback function
  console.log("show starts at", x);
}
setTimeout(newShow,0,9) // newShow is callback functions


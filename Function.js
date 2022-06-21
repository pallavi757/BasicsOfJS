/*1.Decleration of function with no parameter*/
function demo(){
    console.log("This is function declareation without parameter");
}
demo();

/*2. Declareation of function with  parameter*/
function multi(a,b){
    console.log("Muliplication is:"+a*b);
    
}
multi(10,5);//function call

/*3. program for Function Expression (anonymous) return to perform substraction */
// declaring a function
var calSub = function(x, y){
    let z = x - y;
    return z;
}
console.log("Subtraction : " + calSub(7, 4));

/*4. program for Function Expression means anonymous function */
const x=function(a,b){
    return a * b
};//The function ends with a semicolon because it is a part of an executable statement
let z= x(2,3);
console.log("Value of z is:"+z);

/* 5.Function Hoisting 
A function can be called before declaring it*/
// program to print the text
greet();
function greet() {
    console.log('Hi, there.');
}
//Variable Hoisting
// program to display value
a = 5;
console.log(a);
var a; 
//program to display value
var a;
a = 5;
console.log(a); // 5

/*6. Arrow Function with No Argument */

let show = () => console.log('Hello');
show(); // Hello

//Arrow Function with One Argument
let display = x => console.log(x);
display('Hello'); // Hello 

//Arrow Function as an Expression
let age = 5;

let welcome = (age < 18) ?
  () => console.log('kid') :
  () => console.log('Adult');

welcome(); // Kid

// Multiline Arrow Functions
let sum = (a, b) => {
    let result = a + b;
    return result;
}

let result1 = sum(5,7);
console.log(result1); // 12








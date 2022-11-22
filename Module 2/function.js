function sayHello(){
    console.log("hello from function");
}
sayHello();
//functions with parameter
function sum(num1,num2)
{
    let add= num1+num2;
    console.log(add);
}
sum(3,5);
//function with return type
function multiply(num1,num2)
{
    return num1*num2;
}
console.log(multiply(2,3));
//function stored in variable
//functions are first class citizen in js because A programming language is said to have First-class functions if functions in that language are treated like other variables. So the functions can be assigned to any other variable or passed as an argument or can be returned by another function. JavaScript treat function as a first-class-citizens. 
let a=function(num1,num2){
        return num1-num2;
      }
console.log(a(10,5));
let b=function diff(num1,num2){
    return num1-num2;
  }
console.log(b(9,8));
//Immediately invoked function expression
(function(){
    console.log("hello");
})();
//iife with parameters
(function(num1,num2){
    console.log(num1/num2)
})(9,3);
console.log((function(num1,num2){
    return(num1/num2)
})(10,3));



//empty array
let arr=[];
console.log(arr);

//array with elements
let eleArr=[1,2,3,4,5,"String in same Array",'c',false,true,4.5];
console.log(eleArr);

console.log(eleArr[0]);
console.log(eleArr[6]);

eleArr[5]=7;
console.log(eleArr);
//Arrays methods
//1.push(),takes an argument
//it pushes an element at last of an array
//2.pop()
//it removes an element at last of an array
//3.shift()
//it removes the first element
//4.unshift(),takes an argument
//it pushes an element in the beginning of the array

//length of Array
console.log(eleArr.length);

//push
eleArr.push("Character");
console.log(eleArr);

//pop
eleArr.pop();
console.log(eleArr);

//shift
eleArr.shift();
console.log(eleArr);

//unshift
eleArr.unshift("I am the beginning element of this array");
console.log(eleArr);

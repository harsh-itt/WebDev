 //console.log("Swagat hai aap sabhi ka!!!!");
 //console.log("pepcoders");

//variable in js
/*let a=10;
console.log(a);
let char ='a';
console.log(char);
let str='I am string';
console.log(str);
let bool=true;
console.log(bool);
//for loop
for(let i=1;i<5;i++)
{
    console.log(i);
    console.log("dekhte haui kya hota hai"); 
}
//while loop
let b=5;
while(b>=1)
{
    console.log(b);
    b--;
}*/
//prime number
let n=55;
for(let i=2;i*i<=n;i++)
{
    if(n%i==0)
    {
        console.log("Not a prime number");
        return;
    }
}
console.log("prime number");

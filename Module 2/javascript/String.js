let str1="My name is Harshit";
let str2="camel is desert and an animal of desert";
//str length
console.log(str1.length);
console.log(str2.length);

//charAt
for(let i=0;i<str1.length;i++)
{
    if(str1.charAt(i)==" ")
    continue;
    console.log(str1.charAt(i));
}

//slice
console.log(str2.slice(0,13));

//replace
//by default,replaces just the first instance of the word
let strn1=str2.replace("desert","snow");
console.log(strn1);

//to replace all the instances of the word
let strn2=str2.replace(/desert/g,"snow");
console.log(strn2);

//split
let splitted1=str1.split(" ");
console.log(splitted1);

let splitted2=str1.split("a");
console.log(splitted2);

//toUpperCase,toLowerCase
console.log(str1+" "+str2);
console.log(str1.toUpperCase());
console.log(str1.toLowerCase());

//concat
let sconcat=str1+str2;
//str1+str2
console.log(sconcat);

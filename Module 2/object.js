//empty object
let obj={};
//console.log(obj);

let objHarshit={
    Name:"Harshit Kumar",
    Age:21,
    phoneNo:9110136747,
    lastName:"Poddar",
    45:67
};
console.log(objHarshit["45"]);

let capAmerica={
    Name:"steve",
    Age:9999,
    Friends:["Natasha","Thor","Tony","Bucky","Bruce"],
    address:{
        city:"Queens",
        state:"Haryana",
        district:"Patna"
    },
    sayHi:function(){
        console.log("Cap America says Hiii");
    }
}
//console.log(capAmerica);
//capAmerica.sayHi();
//console.log(capAmerica.address);

//name of captainAmerica
//console.log(capAmerica.Name);
//age of captain America
//console.log(capAmerica.Age);
//friends of captaoin America
//console.log(capAmerica.Friends);
//console.log(capAmerica.Friends[2]);
//address object
//console.log(capAmerica.address);
//console.log(capAmerica.address.district);
// call function sayHi
//capAmerica.sayHi();
//add a new key to object or update
//console.log(capAmerica);
capAmerica.Movies=["Avengers","Civil War","EndGame"];
//console.log(capAmerica);
capAmerica.address.state="New York";
//console.log(capAmerica);
//delete a key
//delete capAmerica.Movies;

//second method to access a key

//console.log(capAmerica.Name);
//console.log(capAmerica["Name"]);






//const { clear } = require("console");

/*const name1 = 'mario';

    console.log(name1);

    

const greet = (name2)  => {
    
    console.log(`hello, ${name2}`);
} 

greet('dfg');




// Global Object

const express = require('express');
const app = express();




let port=8000;
app.listen(port,()=> console.log(`Sercer on ${port}`));


console.log(global);

setTimeout(() => {
    console.log('in the timeout')
    clearInterval(int);
},3000);

const int = setInterval(() => {
    console.log('in the inerval')
},1000)



console.log(__dirname);
console.log(__filename);
*/

//get; 

//map 
var liste = ["2","3 ","4","7","5"];
liste = liste.map(e => e **2);
console.log(liste);

//filter
//I can use and manipulate object via `object.entries(bla bla bla)`
var nesne ={
    "1": 15,
    "2": 10,
    "3": 5,
    "4": 4,
    "5": 3,
}

var age = Object.entries(nesne);

age = Object.entries(nesne).filter(e => e[1] > 4)
console.log(age);



//sort 

var list = [3,1,8,4,2,7];
list = list.sort((a,b) => b-a );

console.log(list);

// for in

var obj = {
    "a" : 1,
    "b" : 2,
    "c" : 3,
    "d" : 4
}

  for (var key in obj){
    console.log(key , obj[key])
  }

  //math

  var result = Math.round(Math.random() * 100)

  console.log(result)


  //Math.sqrt = square root `kare kokunu veriyor`


  //module

  //core module


  //third party module

  //local module
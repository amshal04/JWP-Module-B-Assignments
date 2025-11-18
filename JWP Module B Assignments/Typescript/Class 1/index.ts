// // type casting 

// let firstName:string = "amshal";
// firstName = "100 tariq"
// console.log(firstName);



// // tuple

// let arr:number[] = [1,2,3,4,5,6,7,8,9,10];
// arr.push(100)
// console.log(arr);

// let arr:(number | string | boolean)[] = [1,2,3,4,5,6,7,8,9,10];
// arr.push(true)
// console.log(arr);



// // function
// function greet():void

















// single type casting
         
let firstName:string = "faraz";

console.log(firstName);


let num:number  = 100;

console.log(num);


let statuss:boolean  = true;

console.log(statuss);


// mutli type casting


var num1:string | number | boolean= 512;

num1 = "50";

num1 = true

console.log(num1);


// tuple

let arr:number[] = [1,2,3,4,5,6,7,8,9,10];

arr.push(100)

console.log(arr);


let arr:(number | string | boolean)[] = [1,2,3,4,5,6,7,8,9,10];

arr.push(true)

console.log(arr);


// function

function greet():void{
    var a:number = 10;
    var b:number = 20;
    console.log(a + b);  
}

greet()

function greet():number{
    return 100 - 50;  
}

console.log(greet());



function greet(name:string,age:number):number{
    return `hello my name is ${name}`;  
}

console.log(greet('faraz',20));


function greet(a:number,b:string,name?:string):string{
    return a + b;  
}

console.log(greet(30,"20"));


// object

type User = {
    id:number,
    name:string,
    age:number | string,
    city:string
}


let obj:User  ={
    id:1,
    name:"hamza",
    age:25,
    city:"karachi",
}

console.log(obj);



type User = {
    id:number,
    name:string,
    age:number | string,
    city:string,
    status?:boolean
}


interface User  {
    id:number,
    name:string,
    age:number | string,
    city:string,
    status?:boolean
}


let obj:User  ={
    id:1,
    name:"hamza",
    age:25,
    city:"karachi",
}

console.log(obj);


// type

// interface

// enum

// classes and inheritence

// MERN Stack developer

// postrgres sql


// full stack developer

// devops
// docker
// kubernetes


// public ,protected private OOP









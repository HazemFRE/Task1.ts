// let num : number = 10;
// let str : string = "Hello";
// let bool : boolean = true;
// let arr : number[] = [1,2,3];
// let obj : object = {name: "John", age: 25};
// let any : any = "Hello";


//Task1 ////////////////

let number10 : number = 10; // Number
if (number10 % 2 == 0) {
    console.log("Even");
} else {
    console.log("Odd");
} 


//Task2////////////////////

let price20: number[] = [10, 20, 30, 40, 50]; 
let sum30: number = 0;

for (let i = 0; i < price20.length; i++) {
    sum30 += price20[i];
}

console.log("Total Sum:", sum30);


//Task3 //////////////////////////

let number11 : number[] = [10, 20, 30, 40, 50];
let sum115 : number = 0;
let index23 : number = 0;

while (index23 < number11.length) {
    sum115 += number11[index23];
    index23++;
}

console.log("Total Sum:", sum115);
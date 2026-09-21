function clickMe() {
            alert("Thanks for clicking me");
        }

//Data Types
console.log (typeof "boy"); //string
console.log (typeof (true)); //boolean
console.log (typeof (3.123)); //number


//Variables
var studentName = "John";
console.log(studentName);
var allStudents = ["Mike", "Shauny", "John", "Mary"]
console.log(allStudents);


function clickMe() {
    alert(`Yes please you are very much welcome`)
}



// Data Types
console.log(typeof ("boy"))
console.log(typeof (true))
console.log(typeof (3.142))





console.log(2 * 2 - 4 + 8);


// Variables
var studentName = "AbdulGaniy"
console.log(studentName)
var allStudents = ["Michael", "Shaun", "Ben", "Afoma", "Caleb", "Henry", "Treasure", "Abdulganiy", "Desire", "Yasser"]
console.log(allStudents)


const students = { fullName: "Ibrahim", age: 19, }
console.log(students);



let Cars = [
    { id: 1, carName: "Mustang", carYear: 2019, isAvailable: true },
    { id: 2, carName: "Mustang", carYear: 2019, isAvailable: true },
    { id: 3, carName: "Mustang", carYear: 2019, isAvailable: true },
    { id: 4, carName: "Mustang", carYear: 2019, isAvailable: true },
    { id: 5, carName: "Mustang", carYear: 2019, isAvailable: true },
    { id: 6, carName: "Mustang", carYear: 2019, isAvailable: true },
    { id: 7, carName: "Mustang", carYear: 2019, isAvailable: true },
    { id: 8, carName: "Mustang", carYear: 2019, isAvailable: true },
    { id: 9, carName: "Mustang", carYear: 2019, isAvailable: true },
    { id: 10, carName: "Mustang", carYear: 2019, isAvailable: true },
]


console.log(Cars);


// array of strings



// + - / % *


// var, let, const
// Arithmetic Operators in JavaScript
// + Addition - (Number)/Concatenation (Joining) - String
// - Subtraction 
// * Multiplication
// / Division
// ** Raised to the power of
// % Modulus - Divide it and returns the remainder as answer	5%3 = 1 R 2 = 2
// = assignment operator: assigns the value on the right hand side to the left hand side
// == Equals to  /checks the value only
// === Exactly Equal To  //checks the value and the data type
// !== Not equals to
// < less than
// > greater than	
// <= less or equals to
// >= greater or equals to
// ++ Increament
// -- decrement

let firstNumber = 10;
let secondNumber = 2;
let totalNumber = firstNumber % secondNumber;
console.log(totalNumber)


console.log("2" == 2); //true
console.log("2" === 2); //false
console.log("2" !== 2); //true



console.log(5);






// DOM = Document Object Model
let header = document.getElementById("header")
header.innerHTML = `I have said earlier I am not welcoming y'all again............................`



// input numbers
// use any operations on their number
// 



let desire = Number("12");
console.log(desire)



function addNum() {
    let number1 = Number(document.getElementById("number1").value)
    let number2 = Number(document.getElementById("number2").value)
    console.log(number1 + number2)
}
function subNum() {
    let number1 = Number(document.getElementById("number1").value)
    let number2 = Number(document.getElementById("number2").value)
    console.log(number1 - number2)
    
}
function mulNum() {
    let number1 = Number(document.getElementById("number1").value)
    let number2 = Number(document.getElementById("number2").value)
    console.log(number1 * number2)
}
function divNum() {
    let number1 = Number(document.getElementById("number1").value)
    let number2 = Number(document.getElementById("number2").value)
    console.log(number1 / number2)
}
function modNum() {
    let number1 = Number(document.getElementById("number1").value)
    let number2 = Number(document.getElementById("number2").value)
    console.log(number1 % number2)
}
function powNum() {
    let number1 = Number(document.getElementById("number1").value)
    let number2 = Number(document.getElementById("number2").value)
    console.log(number1 ** number2)
}





// let num1 = parseInt(prompt("Enter First Number"))
// let num2 = parseInt(prompt("Enter Second Number"))
// alert(num1 + num2)




// Global Variable
// Local Variable
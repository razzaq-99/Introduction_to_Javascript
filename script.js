                                // Basics of JS

// console.log('Hello');
// console.log('We are Pakistani');

// window.alert('This is an alert message');
// window.alert('alert 2');

// window.prompt('whats ur name ?');

// window.confirm('Are you sure you want to delete this file?');



// document.getElementById("h1").textContent='this is H1';
// document.getElementById("p1").textContent='this is p1 element';

// document.getElementById("h1").textContent = 'My website';
// document.getElementById("p1").textContent = "hdash sahd ashd hae hqwjhw ahhwah ajhwhqh ahwhq ahwh ahwha ahwh ewhh qjhwh jhwahq anwhq awhhq ehjhw ahhsw wjhehw ahwhq wqj qjq "



                                    // variables in JS

// let x
// x = 1220
// console.log(x);

// let age = 21;
// let height = 5.11;
// let weight = 70;

// console.log(typeof age);
// console.log(typeof height);
// console.log(typeof weight);
// console.log(`you are ${age} years old`);
// console.log(`your height is ${height} ft`);
// console.log(`and your weight is ${weight} kg`);


// let firstname = 'Abdul';
// let lastname = 'Razzaq';
// let email = 'abdulrazzaq39@gmail.com'
// let hobby = 'coding'

// console.log(typeof firstname);
// console.log(`firstname: ${firstname}`);

// console.log(typeof lastname);
// console.log(`lastname: ${lastname}`);

// console.log(typeof email);
// console.log(`email: ${email}`);

// console.log(typeof hobby);
// console.log(`hobby: ${hobby}`);


// let online = true;
// let isEmpty = false;
// let isStudent = true;

// console.log(typeof online);
// console.log(`Is he online ? - ${online}`);
// console.log(`Is it Empty ? - ${isEmpty}`);
// console.log(`Is he enrolled ? - ${isStudent}`);



// let fullname = 'abdul razzaq';
// let age = 21;
// let isStudent = true;

// document.getElementById('p1').textContent = `Your name is ${fullname}`;
// document.getElementById('p2').textContent = `Your age is ${age}`;
// document.getElementById('p3').textContent =  `enrolled as student - ${isStudent}`;







                                   // Operators in JS
// let students = 60;
// students = students + 1;
// students = students - 1;
// students = students * 2;
// students = students / 2;
// students = students % 2;
// students = students ** 2;

// students += 1;
// students -= 1;
// students *= 2;
// students /= 2;
// students %= 2;

// students++;
// students--;

// console.log(students);

// let a = 10 + 12 - 3 * 6 ** 2 / 2;
// let b = 10 + 12 - 3 ** 3 / (2+2);

// console.log(a);
// console.log(b);




                                  // User input in JS
// let name ;
// username = window.prompt("whats your name")

// console.log(`Hello ${name}!`);


// let username;

// document.getElementById('mybutton').onclick = function(){
//     username = document.getElementById('usernameInput').value;
//     console.log(username);
//     document.getElementById('myh1').textContent = `Hello ${username}`;
// }






                                       // Type Conversion
// let age = window.prompt("How old are you?");
// age = Number(age);
// age = age +1;
// console.log(age,typeof age);


// let a = "Carrot";
// let b = "Carrot";
// let c = "Carrot";

// a = Number(a);
// b = String(b);
// c = Boolean(c);

// console.log(a,typeof a);
// console.log(b,typeof b);
// console.log(c,typeof c);



// let x = "0";
// let y = "0";
// let z = "0";

// x = Number(x);
// y = String(y);
// z = Boolean(z);

// console.log(x,typeof x);
// console.log(y,typeof y);
// console.log(z,typeof z);

// let xx;
// let yy;
// let zz;

// xx = Number(xx);
// yy = String(yy);
// zz = Boolean(zz);

// console.log(xx,typeof xx);
// console.log(yy,typeof yy);
// console.log(zz,typeof zz);






                                     // const
// const PI = 3.14159;
// let radius;
// let circumference;

// PI= 490.333  

// radius = window.prompt("Enter the radius of the circle");
// radius = Number(radius);

// circumference = 2 * PI * radius;
// console.log(circumference);


// document.getElementById('mybutton').onclick = function(){
//     radius = document.getElementById('mytext').value;
//     radius = Number(radius);
//     circumference = 2 * PI * radius;
//     document.getElementById('myh3').textContent = 'Circumference is '+circumference+'cm';
    
// }









                                       // Counter Program
// const decreasebtn = document.getElementById('decrementbutton');
// const resetbtn = document.getElementById('resetbutton');
// const increasebtn = document.getElementById('incrementbutton');
// const countLabel = document.getElementById('countLabel');

// let count = 0;
// increasebtn.onclick = function(){
//     count++;
//     countLabel.textContent = count;
// }

// decreasebtn.onclick = function(){
//     count--;
//     countLabel.textContent = count;
// }

// resetbtn.onclick = function(){
//     count = 0;
//     countLabel.textContent = count;
// }





                                  //Math (objects,functions,contants)
// console.log(Math.PI);
// console.log(Math.E);
// console.log(Math.round(4.6));
// console.log(Math.sqrt(144));
// console.log(Math.abs(-144));
// console.log(Math.pow(2,5));
// console.log(Math.min(1,2,3,4,5,6,7,8,9,10));
// console.log(Math.max(1,2,3,4,5,6,7,8,9,10));
// console.log(Math.floor(3.88));
// console.log(Math.ceil(3.88));

// let x = 13;
// let y = 5;
// let z;

// z= Math.max(x,y);
// z = Math.min(x,y);
// z = Math.pow(x,y);
// z = Math.sqrt(x);
// console.log(z);







                                    // Random Number Generator

// let min = 50;
// let max = 100;
// let randomNumber = Math.floor(Math.random() * (max-min)) + min ;
// console.log(randomNumber);


// const myButton = document.getElementById('mybutton');
// const Label1 = document.getElementById('label1');
// const Label2 = document.getElementById('label2');
// const Label3 = document.getElementById('label3');

// const min = 1;
// const max = 10;

// let randomNumber1;
// let randomNumber2;
// let randomNumber3;

// myButton.onclick = function(){
//     randomNumber1 = Math.floor(Math.random() * (max-min)) + min ;
//     randomNumber2 = Math.floor(Math.random() * (max-min)) + min ;
//     randomNumber3 = Math.floor(Math.random() * (max-min)) + min ;
//     Label1.textContent = randomNumber1;
//     Label2.textContent = randomNumber2;
//     Label3.textContent = randomNumber3;
// }










                                // Conditional Statements 
// let age = 12;

// if(age>=18){
//     console.log("You are eligible to vote")
// }
// else{
//     console.log("You are not eligible to vote")
// }

// let isStudent = true;
 
// if(isStudent ){
//     console.log("You are a student!")
// }
// else{
//     console.log("You are not a student!")
// }



// let age = -9;
// let islicense = true;

// if(age>=16 && age<=100){
//     console.log("You are old enough to drive");
//     if(islicense){
//         console.log("you have your license");
//     }
//     else{
//         console.log("you do not have your license");
//     }
// }
// else if(age>100){
//     console.log("You are too old to drive")
// }
// else if(age < 0){
//         console.log("age can't be negative");
// }
// else{
//     console.log("You must be 16+ to get a license");
// }




// const AgeInput = document.getElementById("ageInput");
// const submitbutton = document.getElementById("mybutton")
// const resultElement = document.getElementById("result");

// let age;

// submitbutton.onclick = function(){
//     age = AgeInput.value;
//     age = Number(age);
//     if(age>=16 && age<=100){

//         resultElement.textContent = `You are old enough to drive`;

//     }
//     else if(age>100){

//         resultElement.textContent = `You are too old to drive`;

//     }
//     else if(age < 0){
            
//             resultElement.textContent = "Age can't be negative";
//     }
//     else{
        
//         resultElement.textContent = "You must be 16+ to get a license";
//     }
    
// }






                                   // CheckBox and Radio button
// const mycheckbox = document.getElementById("mycheckbox");
// const radio1 = document.getElementById("radio1");
// const radio2 = document.getElementById("radio2");
// const radio3 = document.getElementById("radio3");
// const mybutton = document.getElementById("mybutton");
// const subresult = document.getElementById("subresult");
// const genresult = document.getElementById("genresult");

// mybutton.onclick = function(){
//     if(mycheckbox.checked == true){
//         subresult.textContent = "You are subscribed";
//     }
//     else{
//         subresult.textContent = "You are not subscribed";
//     }

//     if(radio1.checked == true){
//         genresult.textContent = "You are Male";
//     }
//     else if(radio2.checked == true){
//         genresult.textContent = "You are Female";
//     }
//     else if(radio3.checked == true){
//         genresult.textContent = "Common gender";
//     }
//     else{
//         genresult.textContent = "Select your gender";
//     }
// }







                                //Ternary Operator
// let age = 21;
// let result = age >= 18 ? "You are eligible to vote" : "You are not eligible to vote";
// console.log(result);


// let isStudent = true;
// let result1 = isStudent ? "You are a student!" : "You are not a student!";
// console.log(result1);


// let gender = "female";
// let result2 = gender == "male" ? "You are a male" : "You are a female";
// console.log(result2);


// let purchaseamount = 110;
// let discount = purchaseamount >= 100 ? 10 : 0;
// console.log(`Your total bill is ${purchaseamount-purchaseamount*(discount/100)}`);







                                 // Switch Statement 
// let day = 7;

// switch(day){
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;
//     default:
//         console.log("Invalid day");
// }



// let marks = 83;
// let grade;

// switch(true){
//     case marks >= 90:
//         grade = "A+";
//         break;
//     case marks >= 83:
//         grade = "A";
//         break;
//     case marks >= 75:
//         grade = "B+";
//         break;
//     case marks >= 65:
//         grade = "B";
//         break;
//     case marks >= 60:
//         grade = "C+";
//         break;
//     case marks >= 50:
//         grade = "C";
//         break;
//     default:
//         grade = "F";

// }

// console.log(`Grade is ${grade}`)






                                  // String Methods
// let username = "  Abdul Razzaq"

// console.log(username.charAt(0));

// console.log(username.charCodeAt(0));

// console.log(username.indexOf("Razzaq"));

// console.log(username.lastIndexOf("a"));

// console.log(username.indexOf("l"));

// console.log(username.replace("Abdul","Ali"));

// console.log(username.toUpperCase());

// console.log(username.toLowerCase());


// if(username.includes(" ")){
//     console.log("Username contains space");
// }
// else{
//     console.log("Username does not contain space");
// }

// console.log(username.trim());

// console.log(username.startsWith("A"));

// console.log(username.endsWith("q"));








                                  // String Slicing
// let fullname = "Abdul Razzaq"

// let firstname = fullname.slice(0,5);
// console.log(`Your firstname is ${firstname}`);

// let lastname = fullname.slice(6);
// console.log(`Your lastname is ${lastname}`);

// let firstchar = fullname.slice(0,1);
// console.log(firstchar);

// let lastchar = fullname.slice(-1);
// console.log(lastchar);


// let email = "abdulrazzaq39@gmail.com"

// let username = email.slice(0,email.indexOf("@"));

// console.log(`Your username is ${username}`);








                                  // Method Chaining
// No-Method Chaining
// let username = window.prompt("Enter your username");
// username = username.trim();
// let firstletter = username.charAt(0);
// firstletter = firstletter.toUpperCase();
// let otherletter = username.slice(1);
// otherletter = otherletter.toLowerCase();
// username = firstletter + otherletter;

// console.log(`Your username is ${username}`);


// Method Chaining
// username = username.trim().charAt(0).toUpperCase() + 
// username.slice(1).toLowerCase();
// console.log(`Your username is ${username}`);








                               // While loop 

// let username = "";

// while(username === "" || username === null){
    // console.log("you didn't enter your username")
    // username = prompt("Enter your username");
// }

// console.log(`Your username is ${username}`);




// let loggedIn = false;
// let username;
// let password;

// while(!loggedIn){
//     username = window.prompt("Enter your username");
//     password = window.prompt("Enter your password");

//     if(username === "abdulrazzaq39" && password === "12345"){
//         loggedIn = true;
//         console.log("Login successful");
//     }
//     else{
//         console.log("Invalid username or password");
//     }
// }








                                    // For loop 
// for(let i = 0; i<=10; i+=2){
    // console.log(i);
    // console.log(`Hello ${i}`);
// }


// for(let i =3 ; i>0; i--){
//     console.log(i);
// }

// console.log("Pilly!")

// for(let i = 0; i<=20; i++){
//     if(i==12){
//         // continue;
//         break;

//     }
//     else{
//         console.log(i);
//     }
// }








                                 // Number Guessing Game 
// const min = 50;
// const max = 100;

// const answer = Math.floor(Math.random() * (max - min + 1)) + min;

// let attemps = 0;
// let guesses ;
// let running = true;

// while(running){
//     guesses = window.prompt(`Guess a number between ${min} - ${max}`);
//     guesses = Number(guesses);

//     if(isNaN(guesses))
//         {
//             window.alert("Please enter a valid number");
//         }
//     else if(guesses < min || guesses > max){
//         console.log("Please enter a valid number")
//     }
//     else{
//         attemps++;
//         if(guesses < answer ){
//             window.alert("Too low! Try again");
//         }
//         else if(guesses > answer){
//             window.alert("Too high! Try again");
//         }
//         else{
//             window.alert(`Congratulations! You guessed the correct number ${answer} in ${attemps} attempts`);
//             running = false;
//         }
//     }

// }








                                    // Functions 

// function HelloWorld(){
//     console.log("Hello World");
//     console.log("Hello World");
//     console.log("Hello World is runnning...");
//     console.log("Hello World");

// }

// HelloWorld();
// HelloWorld();

// function HappyBirthday(username,age){
//     console.log(`Happy Birthday ${username}! You are ${age} years old`);
//     console.log("Happy Birthday");
//     console.log("Happy Birthday is running...");
// }

// HappyBirthday("Abdul Razzaq", 21);

// function add(x,y){
//     return x + y;
// }
// function sub(x,y){
//     return x - y;
// }
// function mul(x,y){
//     return x*y;
// }
// function div(x,y){
//     return x/y;
// }

// console.log(div(6,3));

// function isEven(number){
//     if(number % 2 ==0){
//         console.log("number is even");
//     }
//     else{
//         console.log("Number is odd");
//     }
// }

// console.log(isEven(9));
// console.log(isEven(68));


// function isvalid(email){
//         if(email.includes("@")){
//             console.log(`Valid Email : ${email}`);
//         }
//         else{
//             console.log(`Invalid Email : ${email}`);
//         }
// }

// console.log(isvalid("abdulrazzaq39@gmail.com"))








                                 // Temperature Conversion Program

// const textBox = document.getElementById("textBox");
// const toFahrenheit = document.getElementById("toFahrenheit");
// const toCelsius = document.getElementById("toCelsius");
// const result = document.getElementById("result");
// let temp;

// function Convert(){
//         if(toFahrenheit.checked){
//             temp = Number(textBox.value);
//             temp = temp * 9 / 5 + 32;
//             result.textContent = temp.toFixed(1) + '°F';
//         }
//         else if(toCelsius.checked){
//             temp = Number(textBox.value);
//             temp = (temp-32) * (5/9);
//             result.textContent = temp.toFixed(1) + '°C';
//         }
//         else{
//             result.textContent = "Select a unit!"
//         }
// }





                                 // Arrays
// let fruits = ["apple","orange","banana"];

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);

// fruits.push("Grapes"); 
// fruits.pop()
// fruits.shift();
// fruits.unshift("Mango");

// for(let i =0; i<fruits.length; i++){
//     console.log(fruits[i]);
// }






                                   // Dice Roller
// function rollDice(){
//     const diceInput = document.getElementById("diceInput").value;
//     const result = document.getElementById("result");
//     const diceImages = document.getElementById("diceImages");
//     const values = [];
//     const images = [];

//     for(let i =0; i<diceInput; i++){
//         const value = Math.floor(Math.random() * 6) + 1;
//         values.push(value);
//         images.push(`<img src="dice_images/${value}.png" alt="dice: ${value}">`);
//     }

// result.textContent = `dice: ${values.join(", ")}`;
// diceImages.innerHTML = images.join(" ");

// }







                                    // Random Password Generator
// function generatePassword(length, lowercase, uppercase, numbers, symbols){

//         const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
//         const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//         const numberChars = "0123456789";
//         const symbolChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
//         let passwords = '';
//         let allowedChars = '';

//         allowedChars += lowercase ? lowercaseChars : "";
//         allowedChars += uppercase ? uppercaseChars : "";
//         allowedChars += numbers ? numberChars : "";
//         allowedChars += symbols ? symbolChars : "";

//         if(length <= 0){
//             return `(Password lenght must be atleast 1)`
//         }
//         if(allowedChars.length === 0){
//             return `Atleast 1 set of characters required`
//         }

//         for(let i = 0; i < length; i++){
//             passwords += allowedChars.charAt(Math.floor(Math.random() * allowedChars.length));
//         }

//            return passwords;
// }

// const length = 8;
// const lowercase = true;
// const uppercase = true;
// const numbers = true;
// const symbols = true;

// const password = generatePassword(length, lowercase, uppercase, numbers, symbols);

// console.log(`Generated Password: ${password}`);






                                    // Foreach and callback

// let numbers = [1,2,3,4,5];

// numbers.forEach(square);
// numbers.forEach(triple);
// numbers.forEach(double);
// numbers.forEach(display);


// function display(element) {
//     console.log(element)
// }

// function double(element, index, array){
//     array[index] = element * 2;
// }

// function triple(element, index, array){
//     array[index] = element * 3;
// }

// function square(element, index, array){
//     array[index] = Math.pow(element, 2);
// }



// let fruits = ["apple","BANANA","orange","grapes","seashell"];


// fruits.forEach(capitalize);
// fruits.forEach(lowercasefruits);
// fruits.forEach(capital);
// fruits.forEach(display);

// function capital(element, index, array){
//     array[index] = element.toUpperCase();
// }

// function lowercasefruits(element, index, array){
//     array[index] = element.toLowerCase();
// }

// function capitalize(element, index, array){
//     array[index] = element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
// }

// function display(element) {
//        console.log(element);
// }







                                // map method

// let numbers = [1,2,3,4,5,6,7];

// let printnumbers = numbers.map(square);
// console.log(printnumbers);

// function display(element) {
//     console.log(element)
// }

// function double(element){
//     return element * 2;
// }

// function triple(element){
//     return element * 3;
// }

// function square(element){
//     return element * element;
// }


// const dates = ["2022-01-01","2024-10-26","2019-04-31","2020-12-25"];

// let formattedDates = dates.map(dateFormat);


// console.log(formattedDates);

// function dateFormat(element){
//         const parts = element.split("-");
//         return `${parts[2]}-${parts[1]}-${parts[0]}`;
// }





                                // filter method
// let numbers = [1,2,3,4,5,6,7,8,9]

// let isEvens = numbers.filter(isEven);
// let isOdds = numbers.filter(isOdd);

// console.log(`Odd numbers are ${isOdds}`);
// console.log(`Even numbers are ${isEvens}`);

// function isEven(element){
//     return element % 2 === 0;
// }

// function isOdd(element){
//     return element % 2 !== 0;
// }



// let ages = [21,13,15,33,65,11,18,19,18]

// let isAdults = ages.filter(isAdult);
// console.log(`Adults: ${isAdults}`);

// let ischildren = ages.filter(ischild);
// console.log(`Children: ${ischildren}`);

// function isAdult(element){
//     return element >= 18;
// }

// function ischild(element){
//     return element < 18;
// }






                                // function expression

// setTimeout(function(){
//     console.log("Hello world");
// }, 3000)


// let numbers = [1,2,3,4,5,6,7,8,9];

// const doublenumbers = numbers.map(function(element){
//     return element + element;
// });

// console.log(`Double Numbers: ${doublenumbers}`);



// const isEvens = numbers.filter(function(element){
//     return element % 2 === 0;
// }
// );

// console.log(`Even numbers: ${isEvens}`);

// const isOdds = numbers.filter(function(element){
//     return element % 2 !== 0;
// });

// console.log(`Odd numbers: ${isOdds}`);

// const hello = function(){
//     console.log("Hello world 2");
// }

// hello();






                                    // Arrow function
                
// const hello = () => {
//     console.log("Hey!");
// }

// hello();

// const intro = (name,age) =>{
//     console.log(`My name is ${name} and I am ${age} years old.`);
// }

// intro("Abdul", 21);


// setTimeout( () =>console.log("Goodbye!"),3000);



// let numbers = [1,2,3,4,5,6];

// const squares = numbers.map((element) => Math.pow(element, 2));
// const squares = numbers.map((element) => element * element);


// console.log(`Square of numbers: ${squares}`);







                                // Object as function or Properties
                    
// const person1 = {
//     firstname : "Abdul",
//     lastname : "Razzaq",
//     age : 21,
//     isStudent : true,
//     sayHello: function(){
//         console.group("Hey! I am Abdul!")
//     },
//     sayBye: function(){
//         console.log("Goodbye!")
//     }
// }

// const person2 = {
//     firstname : "Ali",
//     lastname : "Rahman",
//     age : 25,
//     isStudent : false,
//     sayHello: function(){
//         console.group("Hey! I am Ali!")
//     },
//     sayBye: function(){
//         console.log("Goodbye!")
//     }
// }

// console.log(person1.firstname);
// console.log(person1.lastname);
// console.log(person1.age);
// console.log(person1.isStudent);

// person1.sayHello();
// person1.sayBye();

// console.log(person2.firstname);
// console.log(person2.lastname);
// console.log(person2.age);
// console.log(person2.isStudent);

// person2.sayHello();
// person2.sayBye();







                                // Constructor in JS

function Car(make,model,year,drive){
    this.make = make;
    this.model = model;
    this.year = year;
    this.drive = function(){
        console.log(`you drive ${model} car`);
    };
}
 
const car1 = new Car("Toyota","Corolla",2010);
const car2 = new Car("Honda","Civic",2015);

console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car2.make);
console.log(car2.model);
console.log(car2.year);

car1.drive();
 car2.drive();



class Product {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    displayProducts(){
        console.log(`Name: ${this.name}, Price: $${this.price.toFixed(2)}, Quantity: ${this.quantity}`);
    }

    updateQuantity(newQuantity){
        this.quantity = newQuantity;
    }

    totalPrice(){
        return this.price * this.quantity;
    }



}

const product1 = new Product("Apple", 7.99, 10.5);

product1.updateQuantity(15);
product1.displayProducts();
console.log(`Total Price: $${product1.totalPrice().toFixed(2)}}}`);

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
let day = 7;

switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}



let marks = 83;
let grade;

switch(true){
    case marks >= 90:
        grade = "A+";
        break;
    case marks >= 83:
        grade = "A";
        break;
    case marks >= 75:
        grade = "B+";
        break;
    case marks >= 65:
        grade = "B";
        break;
    case marks >= 60:
        grade = "C+";
        break;
    case marks >= 50:
        grade = "C";
        break;
    default:
        grade = "F";

}

console.log(`Grade is ${grade}`)

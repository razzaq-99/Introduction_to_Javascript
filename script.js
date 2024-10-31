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
const decreasebtn = document.getElementById('decrementbutton');
const resetbtn = document.getElementById('resetbutton');
const increasebtn = document.getElementById('incrementbutton');
const countLabel = document.getElementById('countLabel');

let count = 0;
increasebtn.onclick = function(){
    count++;
    countLabel.textContent = count;
}

decreasebtn.onclick = function(){
    count--;
    countLabel.textContent = count;
}

resetbtn.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}

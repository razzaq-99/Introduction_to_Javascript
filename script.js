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
let name ;
username = window.prompt("whats your name")

console.log(`Hello ${name}!`);


let username;

document.getElementById('mybutton').onclick = function(){
    username = document.getElementById('usernameInput').value;
    console.log(username);
    document.getElementById('myh1').textContent = `Hello ${username}`;
}
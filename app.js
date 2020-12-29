// log to console
// console.log(typeof 'derpsrwerps');
// console.log(typeof true);
// console.log(typeof 4);
// console.log(typeof 3.14);
// console.log([1, 2, 3, 4, 5]);
// console.log({ a: 1, b: 2 });
// console.table({ a: 1, b: 2 });
// console.error('asfdhfiihs');
// console.time('session 1');
// console.timeEnd('session 1');
// console.clear();

// var, let, const
// var hi = 'hello world';
// console.log(hi);

// let high = 'hello world';
// console.log(high);
// high = 'asih';
// console.log(high);

// const hii = 'hello universe';
// console.log(hii);
// hii = 'sijfasd';
// console.log(hii);

// let ryan;
// console.log(ryan);

// const ryanPi = {
//   age: 12,
//   superpower: 'big brain',
// };

// console.log(ryanPi.age);
// console.log(ryanPi.superpower);

// ryanPi.superpower = 'naruto run';
// console.log(ryanPi.superpower);
// ryanPi.team = 'celtics yay';
// console.log(ryanPi.team);

// const numbers = [1, 2, 3, 4];
// console.log(numbers);
// numbers.push(5);
// console.log(numbers);

// let josh;
// console.log(josh);

// const today = new Date();
// console.log(today);
// console.log(typeof today);

// let val;
// val = String(4 + 4);
// val = Number('hello');
// console.log(val);
// console.log(typeof val);

// const val1 = String(5);
// const val2 = 4;
// const sum = Number(val1) + val2;
// console.log(sum);
// console.log(typeof sum);

// const num1 = 100;
// const num2 = 50;
// let val;

// val = num1 / num2;
// val = num1 % num2;
// val = Math.PI;
// val = Math.E;
// val = Math.round(2.55555);
// val = Math.ceil(2.1);
// val = Math.floor(2.6);
// val = Math.sqrt(64);
// val = 10 ** 10;
// val = Math.pow(10, 10);
// val = Math.abs(-3);
// val = Math.min(1, 2, 3, 4);
// val = Math.max(1, 2, 3, 5);
// val = Math.random();
// val = Math.floor(Math.random() * 10 + 1);

// console.log(val);

// const firstName = 'rYaN';
// const lastName = 'pI';
// const age = 12;
// const str = 'am i a person?';
// // let val;

// val = firstName + ' ' + lastName + ': ' + age;
// val = "that's awesome";
// val = firstName.length;
// val = firstName.indexOf('N');
// val = firstName[0];
// val = firstName.substring(0, 2);
// val = str.includes('?');

// console.log(val);

// let html =
//   '<ul>' +
//   '<li>name:' +
//   firstName +
//   lastName +
//   '</li>' +
//   '<li>age:' +
//   age +
//   '</li>' +
//   '</ul>';

// html = `
// <ul>
//   <li>name: ${firstName + ' ' + lastName}</li>
//   <li>age: ${age}</li>
// </ul>
// `;

// document.body.innerHTML = html;

// const numbers = [1, 2, 12, , 124, 2, 34, 42, 345, 2, 346, 32, 46, 26];
// let val;

// val = numbers.length;
// val = numbers[3];
// numbers[3] = 1;
// val = numbers;

// function sort(x, y) {
//   return x - y;
// }

// function reverseSort(x, y) {
//   return y - x;
// }

// val = numbers.sort(reverseSort);

// console.log(val);

// const person = {
//   firstName: 'Bob',
//   age: 100,
//   email: 'bob@hotmail.com',
//   hobbies: ['math', 'studying'],
//   address: {
//     city: 'Suwanee',
//     state: 'GA',
//   },
// };

// console.log(person.address.state);
// console.log(person.email);
// console.log(person.address.city);
// console.log(person.hobbies[0]);

// const people = [
//   {
//     name: 'John',
//     age: 30,
//   },
//   {
//     name: 'Ryan',
//     age: 12,
//   },
//   {
//     name: 'Mike',
//     age: 61,
//   },
// ];

// for (let i = 0; i < people.length; i++) {
//   // console.log(people[i].name + ' is ' + people[i].age);
//   console.log(`${people[i].name} is ${people[i].age}`);
// }

// const id = '100';

// if (id == 100) {
//   console.log('correct');
// } else {
//   console.log('incorrect');
// }

// if (id != 100) {
//   console.log('correct');
// } else {
//   console.log('incorrect');
// }

// if (id === 100) {
//   console.log('correct');
// } else {
//   console.log('incorrect');
// }

// if (id !== 100) {
//   console.log('correct');
// } else {
//   console.log('incorrect');
// }

// if (id > 100) {
//   console.log('correct');
// } else {
//   console.log('incorrect');
// }

// if (id < 100) {
//   console.log('correct');
// } else {
//   console.log('incorrect');
// }

// if (id >= 100) {
//   console.log('correct');
// } else {
//   console.log('incorrect');
// }

// if (id <= 100) {
//   console.log('correct');
// } else {
//   console.log('incorrect');
// }

// const color = 'RED';

// if (color === 'red' || color === 'Red' || color === 'RED') {
//   console.log('red');
// } else if (color === 'blue') {
//   console.log('blue');
// } else {
//   console.log('color is not red');
// }

// const person = {
//   name: 'Steve',
//   age: 19,
// };

// if (person.age > 0 && person.age < 12) {
//   console.log(`${person.name} is a child.`);
// } else if (person.age >= 12 && person.age <= 18) {
//   console.log(`${person.name} is a teen.`);
// } else {
//   console.log(`${person.name} is an adult.`);
// }

// // ternary operator
// console.log(
//   person.name === 'Steve' ? 'his name is Steve' : 'his name is not Steve'
// );

// let day;
// switch (7) {
//   case 0:
//     day = 'Sunday';
//     break;
//   case 1:
//     day = 'Monday';
//     break;
//   case 2:
//     day = 'Tuesday';
//     break;
//   case 3:
//     day = 'Wednesday';
//     break;
//   case 4:
//     day = 'Thursday';
//     break;
//   case 5:
//     day = 'Friday';
//     break;
//   case 6:
//     day = 'Saturday';
//     break;
//   default:
//     day = 'Not a day';
// }
// console.log(day);

// function greet(firstName = 'Kemba', lastName = 'Walker') {
//   return `Hi ${firstName} ${lastName}!`;
// }

// console.log(greet()); // Hi Kemba Walker!

// function square(x = 2) {
//   return x ** 2;
// }
// console.log(square());

//FUNCTION EXPRESSION

// const power = function (x = 2, power = 2) {
//   return x ** power;
// };
// console.log(power());

//IMMEDIATELY INVOKABLE FUNCTION EXPRESSION - IIFEs
// (function (x = 2, power = 2) {
//   console.log(x ** power);
// })(10, 10);

// const todo = {
//   add: function () {
//     console.log('add todo');
//   },
//   edit: function (id) {
//     console.log(`edit todo ${id}`);
//   },
// };

// todo.add();
// todo.edit(1000);

// todo.delete = function () {
//   console.log('delete todo');
// };

// todo.delete();

// const books = {
//   write: function (book) {
//     console.log(`wrote ${book}`);
//   },
//   read: function (book, duration) {
//     console.log(`read ${book} for ${duration} hours`);
//   },
// };

// books.write('Harry Potter');
// books.read('Harry Potter', 5);

// let ryan = '';
// for (let i = 0; i < 10; i++) {
//   ryan = ryan + 'ryan';
//   console.log(ryan);
// }

// const cars = ['Honda', 'Mercedes Benz', 'Porsche', 'Toyota', 'Hyundai', 'Kia'];
// for (let i = 0; i < cars.length; i++) {
//   console.log(`${i} ${cars[i]}`);
// }

// function callBackFunction(message) {
//   console.log(message);
// }

// function anotherFunction(func) {
//   func('hola');
// }

// anotherFunction(callBackFunction);

// cars.forEach(function (value, index, array) {
//   console.log(`${index} ${value}`);
//   console.log(array);
// });

// for (let i in cars) {
//   console.log(`${i} ${cars[i]}`);
// }

// const users = [
//   { id: 1, name: 'John' },
//   { id: 2, name: 'Sarah' },
//   { id: 3, name: 'Karen' },
//   { id: 4, name: 'Steve' },
//   { id: 5, name: 'Steve' },
// ];

// const ids = users.map(function (user) {
//   return user.id;
// });

// console.log(ids);

// let i = 0;

// while (i < 10) {
//   console.log(`index ${i}`);
//   i = i + 1;
// }

// let input = window.prompt('What is 9 + 10?');

// while (input !== '19') {
//   input = window.prompt('Incorrect. Try Again. What is 9 + 10?');
// }

// Window methods, objects, and properties

// alert('ALERT ALERT THIS IS AN EMERGENCY');

// const input = prompt('What is your name');
// alert(`hi ${input}`);

// if (confirm('Are u sure about that')) {
//   console.log('YES');
// } else {
//   console.log('NO');
// }

// let val;

// val = window.outerHeight;
// val = window.outerWidth;

// val = window.location;
// val = window.location.href;
// val = window.navigator;
// val = window.navigator.appVersion;
// val = window.navigator.userAgent;
// val = window.navigator.platform;

// redirect
// window.location.href = 'https://google.com';

// reload
// window.location.reload();

// history
// window.history.go(-2);
// val = window.history.length;

// console.log(val);

// let b = 2;
// const c = 3;

// function test() {
//   let b = 5;
//   const c = 6;
//   console.log('function scope: ', b, c);
// }

// test();

// if (true) {
//   // let b = 7;
//   // const c = 8;
//   console.log('if scope: ', b, c);
// }

// for (let b = 0; b < 5; b++) {
//   console.log(`loop: ${b}`);
// }

// console.log('global scope: ', b, c);

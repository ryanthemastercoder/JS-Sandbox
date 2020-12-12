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

const person = {
  firstName: 'Bob',
  age: 100,
  email: 'bob@hotmail.com',
  hobbies: ['math', 'studying'],
  address: {
    city: 'Suwanee',
    state: 'GA',
  },
};

console.log(person.address.state);

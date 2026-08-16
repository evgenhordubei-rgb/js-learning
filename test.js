// let a = 31
// console.log(a)

// const number = Number('51');
// console.log(Number.isNaN(number));

// const string = Number('dasaasa');
// console.log(Number.isNaN(string));

// console.log(Number.parseInt('746fhs84di'));
// console.log(Number.parseInt('fjdif.,f93df,,'));

// let str = 'hello world';
// let name = 'Софійко';
// let str2 = `Привіт, ${name}!`;
// console.log(str2);

// const massege = 'javascript ' + 'is' + ' awesome';
// console.log(massege);

// const user = {}
// user.name = 'Софійко';
// user.age = 31;
// console.log(user);

// const user = {
//     name: 'Софійко',
//     age: 31,
//     isAdmin: true,
// }

// for (const key in user) {
//     console.log(key);
//     console.log(user[key]);
// }

// const test = confirm('Are you sure?');
// console.log(test);

// value = false;
// console.log(typeof value);
// const NewValue = String(value);
// console.log(typeof NewValue);

// value = "123";
// console.log(typeof value);
// const NewValue = Number(value);
// console.log(typeof NewValue);

// console.log(1 + 2);
// console.log(1 - 2);
// console.log(1 * 2);
// console.log(1 / 2);

// alert('Hello, world!');

// switch ('Oleg') {
//     case 'Nastya':
//         console.log('true');
//         break;
//     case 'Roma':
//         console.log('true');
//         break;
//     case 'Vika':
//         console.log('true');
//         break;
// }

// let leng = 'ru';

// if (leng === 'ua') {
//     console.log('мова');
// } else if (leng === 'en') {
//     console.log('language');
// } else {
//     console.log('error');
// }

// if (2 + 3 === 4) {
//     console.log('true');
// } else {
//     console.log('false');
// }


// const min = Number(prompt('Введіть хвилини'));

// if (min >= 0 && min <= 15) {
//     console.log('Перша чверть');
// } else if (min >= 16 && min <= 30) {
//     console.log('Друга чверть');
// } else if (min >= 31 && min <= 45) {
//     console.log('Третя чверть');
// } else if (min >= 46 && min <= 59) {
//     console.log('Четверта чверть');
// } else {
//     console.log('Помилка');
// }


// const value = prompt('Введіть назву товару').toLowerCase();
// let cost;

// switch (value) {
//     case 'риба':
//         cost = 100;
//         alert(`Вартість товару ${value} становить ${cost} грн.`);
//         break;
//     case 'молоко':
//         cost = 50;
//         alert(`Вартість товару ${value} становить ${cost} грн.`);
//         break;
//     case 'хліб':
//         cost = 20;
//         alert(`Вартість товару ${value} становить ${cost} грн.`);
//         break;
//     default:
//         alert(`Товар ${value} не знайдено`);
// }


//функція для багаторазового використання
// function showMessage(name, age) {
//     console.log('Hello i am ' + name + ' and i am ' + age + ' years old');
// }
// showMessage('John', 30);
// showMessage('Nastya', 48);







//функція для того щоб передати функцію як аргумент в іншу функцію або якщо функція потрібна лише для одноразового використання

// let userName = ' Anna';

// const sayHi = function () {
//     let message = 'hello';
//     console.log(message + userName);
// }
// sayHi();

// function sum(a, b) {
//     return a + b;
// }

// let result = sum(7, 8);
// console.log(result);

// const testFunction = function (a, b) {
//     console.log('a :', a);
//     console.log('b :', b);
// }
// testFunction(5, 10);



// const a = function () {
//     c();
//     console.log('function a');
//     b();
// }
// const b = function () {
//     console.log('function b');
// }
// const c = function () {
//     console.log('function c');
// }

// a();



// const addName = function () {
//     const arg = Array.from(arguments);
//     console.log(arguments);
//     console.log(arg);
// };
// addName(1, 3, 5);
// addName(1, 3, 5, 98, 45);




// function ask(question, yes, no) {
//     if (confirm(question)) {
//         yes()
//     } else {
//         no()
//     }
// }

// function showOk() {
//     console.log('you say ok');
// }

// function showCancle() {
//     console.log('you say no');
// }

// ask('yes or no?', showOk, showCancle);



// const hello = function (name) {
//     console.log(`Hello, ${name}`);
// }

// const searchName = function (callback) {
//     const name = 'ivan';
//     callback(name);
// }

// searchName(hello);



// const hello = function (town) {
//     console.log(`Hello, ${town}`);
// }

// const searchTown = function (callback) {
//     const town = 'Kyiv';
//     callback(town);
// }

// searchTown(hello);


// function checkAge(age) {
//     if (age >= 18) {
//         return console.log('Hello');
//     }
//     return console.log('Goodbye');

// }
// checkAge(19);


// function showMovie(age) {
//     if (age <= 21) {
//         return console.log('You are not allowed to watch this movie');
//     }
//     return console.log('Enjoy the movie!');
// }
// showMovie(22);

// стрілкові функції
// const test = (arg) => {
//     console.log(arg);
// }
// test('Hello, world!');



// const showMovie = (age) => {
//     if (age <= 21) {
//         return console.log('You are not allowed to watch this movie');
//     }
//     return console.log('Enjoy the movie!');
// }
// showMovie(21);


// const a = () => {
//     console.log('a');
// }
// const b = () => {
//     console.log('b');
// }
// const c = () => {
//     console.log('c');
//     a();
//     b();
// }
// c();

console.log(document);

const addNumber = (number) => {
    let sum = Number(number) + 10;
    return console.log(sum);
}

const numberRef = document.querySelector('input[name="number"]');

const buttonRef = document.querySelector('button');

buttonRef.addEventListener('click', () => addNumber(numberRef.value));



// buttonRef.addEventListener('click', () => {
//     console.log(numberRef.value);
// });

// buttonRef.addEventListener('click', () => {
//     console.log('click');
// });
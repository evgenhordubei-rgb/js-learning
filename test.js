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


//------------


// console.log(document);

// const addNumber = (number) => {
//     let sum = Number(number) + 10;
//     return console.log(sum);
// }


// const numberRef = document.querySelector('input[name="number"]');

// const buttonRef = document.querySelector('button');  //спосіб як використовувати querySelector

// buttonRef.addEventListener('click', () => addNumber(numberRef.value));


// buttonRef.addEventListener('click', () => {
//     console.log(numberRef.value);
// });

// buttonRef.addEventListener('click', () => {
//     console.log('click');
// });

//----------

//замикання
// function createNewSum(n) {
//     return function () {
//         console.log(10 * n)
//     }
// }

// const calc = createNewSum(20)
// calc()

// function createNewNum(n) {
//     return function (num) {
//         return n + num;
//     };
// }
// const myNum = createNewNum(15);
// console.log(myNum(40));

// function createUrl(domain) {
//     return function (url) {
//         return `https://${url}.${domain}`;
//     };
// }
// const myDomain = createUrl('com')
// console.log(myDomain('youtube'))

//this

// const user = {
//     name: "Анна",
//     sayHi: function () {
//         console.log(this.name);
//     }
// };
// user.sayHi(); 



// function hello() {
//     console.log('hello', this)
// }
// hello()

// const user = {
//     name: "Ivan",
//     city: "Odessa",
//     sayHello: hello,
// };
// user.sayHello()



// function abc() {
//     console.log('в функції');
//     console.log(this);
// }
// abc();

// document.querySelector('p').onclick = abc;    //-ще один спосіб як використовувати querySelector



// function changeColor() {
//     console.log(this);
//     this.style.background = 'green';
// }
// document.querySelector('div').onclick = changeColor; //-легкіший путь

// const textRef = document.querySelector('div'); //-альтернатива(для розуміння коду)
// textRef.addEventListener('click', changeColor);



// function changeColor() {
//     this.style.background = 'green';
// }

// let user = document.querySelectorAll('div');
// user.forEach(function (element) {
//     element.onclick = changeColor;
// });


// const showList = () => {
//     console.log(this);
// };
// showList();

// const list = {
//     names: ['Anna', 'Olga', 'Nata'],
//     showList: showList,
// };

// list.showList(); 



// function hello() {
//     console.log(this);
// }
// const user = {
//     name: "Ivan",
//     age: 30,
//     hello: hello,
//     sayHelloWindow: hello.bind(window),
//     info: function () {
//         console.log(`My name is ${this.name}`)
//         console.log(`My age is ${this.age}`)
//     }
// };

// user.sayHelloWindow();
// user.info();

//використання this //-перший спосіб

// const user1 = {
//     name: "Ivan",
//     age: 30,
//     info: function () {
//         console.log(`My name is ${this.name}`)
//         console.log(`My age is ${this.age}`)
//     },
// };

// const user2 = {
//     name: "Nastya",
//     age: 24,
//     info: user1.info,
// };
// user1.info()
// user2.info()

//використання bind //-другий спосіб

// const user = {
//     name: "Ivan",
//     age: 30,
//     info: function (city) {
//         console.log(`My name is ${this.name}`)
//         console.log(`My age is ${this.age}`)
//         console.log(`My city is ${city}`)

//     },
// };

// const natali = {
//     name: 'Natali',
//     age: 42,
// };

// const Alex = {
//     name: 'Alex',
//     age: 18,
// };

// user.info.bind(natali)('Kyiv') // + ще можна в функції писати змінну яка вже не буде потребувати this, але доведеться писати в дужки змінні окремо
// user.info.bind(Alex)('London') //-останні дужки в кодови означають виконання функції, тобіш без них команда просто чекатиме на виконання
// user.info('Paris')


//-----call and console.group
// const userInfo = {
//     name: 'Vanya',
//     age: 45,
//     logInfo: function (job) {
//         console.group(`${this.name} info:`)
//         console.log(`name is : ${this.name}`)
//         console.log(`age is : ${this.age}`)
//         console.log(`job is : ${job}`)
//         console.groupEnd();
//     },
// };
// userInfo.logInfo('developer');


// const Vano = {
//     name: 'Ivan',
//     age: 45,
// };
// userInfo.logInfo.call(Vano, 'developer');

//-----apply

// const showUserInfo = {
//     name: name,
//     age: 78,
//     logInfo: function (job, city) {
//         console.group(`${this.name} info:`)
//         console.log(`name is : ${this.name}`)
//         console.log(`age is : ${this.age}`)
//         console.log(`job is : ${job}`)
//         console.log(`city is : ${city}`)

//         console.groupEnd();
//     }
// }


// const Vano = {
//     name: 'Ivan',
//     age: 45,
// };

// showUserInfo.logInfo.apply(Vano, ['developer', 'Lviv']);


///////////////////////

//-apply call and bind in one project

// const message = function (name, stars) {
//     console.log(`${name}, Welcome to ${this.hotel}, stars ${stars}`);
// };

// const Bukovel = { hotel: 'Bukovel' };
// const Turist = { hotel: 'Turist' };

// message.apply(Bukovel, ['alina', '4'])
// message.call(Turist, 'alina', '2')
// message.bind(Turist, 'alina', '3')()


//////////////////////

// const cart = {
//     showItems() {
//         console.log('в корзині:', this.items);
//     },
// };

// const woman = {
//     items: ['dress, shoe'],
// };
// const man = {
//     items: ['jeans, socks'],
// };
// const kid = {
//     items: ['cap, trausers'],
// };

// document.querySelector('#woman').addEventListener('click', cart.showItems.bind(woman));
// document.querySelector('#man').addEventListener('click', cart.showItems.bind(man));
// document.querySelector('#kid').addEventListener('click', cart.showItems.bind(kid));

////////////////
//-перший спосіб
// const infoCar = {
//     name: 'BMW',
//     model: 'M7',
//     color: 'black',
//     showInfo: function () {
//         console.log('Car: ' + this.name + ' model: ' + this.model + ' color: ' + this.color);
//     },
// };

// const infoCar2 = {
//     name: 'Marcedes',
//     model: 'S class',
//     color: 'white',
// };
// infoCar.showInfo.bind(infoCar2)();
// infoCar.showInfo.call(infoCar2);
// infoCar.showInfo.apply(infoCar2);


//-другий спосіб

// const infoCar = {
//     name: 'BMW',
//     model: 'M7',
//     color: 'black',
//     showInfo: function () {
//         console.group(this.name, 'info:')
//         console.log(`Car : ${this.name}`)
//         console.log(`model : ${this.model}`)
//         console.log(`color : ${this.color}`)
//         console.groupEnd();
//     },
// };

// const infoCar2 = {
//     name: 'Marcedes',
//     model: 'S class',
//     color: 'white',
// };
// infoCar.showInfo.bind(infoCar2)();
// infoCar.showInfo.call(infoCar2);
// infoCar.showInfo.apply(infoCar2);

// infoCar.showInfo.bind(infoCar)();
// infoCar.showInfo.call(infoCar);
// infoCar.showInfo.apply(infoCar);


//процедурне програмування
// const sum = 20000;
// const month = 12;
// const p = 1000;


// const credit = (sum, month, p) => {
//     return sum + p * month;
// }
// console.log(credit(sum, month, p));



//об'єктно орієнтоване програмування - ООП
// const credit = {
//     sum: 20000,
//     month: 12,
//     p: 1000,
//     result() {
//         return this.sum + this.p * this.month;
//     },
// };
// console.log(credit.result());





// //класи
// class bank { //-зробили цей клас і надали другому класові успадкування
//     static type = 'privat'; //-викликати можна через
//     constructor(options) {
//         this.sum = options.sum;
//         this.month = options.month;
//         this.p = options.p;
//     }
//     credit() {
//         return console.log('i m private');
//     }
// }

// // const Userbank = new bank({
// //     sum: 30000,
// //     month: 5,
// //     p: 500,
// // });
// // console.log(bank.type);
// // console.log(Userbank.credit());

// class Newbank extends bank { //-надали новому класові успадкування старого     
//     constructor(options) {
//         super(options);
//         this.card = options.card; //-воно тут
//         this.result = options.result; //-воно тут
//     }
//     credit() {
//         super.credit();
//         return console.log('i m new bank');
//     }
// }

// const aval = new Newbank({
//     sum: 30000,
//     month: 5,
//     p: 500,
//     card: true, //-треба записувати в констукторі класу присвоєння 
//     result() { //-треба записувати в констукторі класу присвоєння 
//         return this.sum + this.p * this.month;
//     }
// })
// aval.credit();
// console.log(aval.card);
// console.log(aval.result());
// console.log(bank.type);




//get & set
// class User { //-створили пустого юзера і надали йому властивості
//     constructor(props) {
//         this.name = props.name;
//     }
//     FirstName = '';
//     lastName = '';
//     age = '';
//     city = '';

//     set name(newName) { //-цьому name потім можна присвоїти любе значення іменні в змінній
//         const nameRow = newName.split(' ');
//         this.FirstName = nameRow[0];
//         this.lastName = nameRow[1];
//         this.age = nameRow[2];
//     }
//     get name() {
//         return `First name: ${this.FirstName}, Last name: ${this.lastName}`;
//     }
// }


// const Kris = new User({ //-дали новому юзеру властивості і присвоїли значення
//     name: 'Kris Smith', //- задали значення змінній name
// });
// console.log(Kris);



//з age

// class User { //-створили пустого юзера і надали йому властивості
//     constructor(props) {
//         this.name = props.name;
//         this.age = props.age; //-так, як нам не потрібно обробляти вік то просто його записуємо сюда
//     }
//     FirstName = '';
//     lastName = '';
//     age = '';
//     city = '';

//     set name(newName,) { //-цьому name потім можна присвоїти любе значення іменні в змінній
//         const nameRow = newName.split(' ');
//         this.FirstName = nameRow[0];
//         this.lastName = nameRow[1];
//     }
//     get name() {
//         return `First name: ${this.FirstName}, Last name: ${this.lastName}`;
//     }
// }


// const Kris = new User({ //-дали новому юзеру властивості і присвоїли значення
//     name: 'Kris Smith', //- задали значення змінній name
//     age: 31, //- задали значення змінній age

// });
// console.log(Kris);

//такий самий спосіб тільки без get & set, але тоді не можна буде обробляти значення змінної name

// class User {
//     constructor(props) {
//         this.name = props.name;
//         this.age = props.age;
//     }
// }

// const Kris = new User({
//     name: 'Kris Smith',
//     age: 31,
// });

// console.log(Kris.name); 





//- властивості об'єкта і прототипи

// const a = {
//     x: 10,
//     y: 20,
// };

// const b = Object.create(a);
// console.log(b); //-b успадковує властивості a


// const Manager = function (name, sales) {
//     this.name = name;
//     this.sales = sales;

//     // this.sale = function () {
//     //     this.sales += 1;
//     // }
// };

// const ann = new Manager('Ann', 5);
// const ivan = new Manager('ivan', 3);

// Manager.prototype.sale = function () {
//     this.sales += 1;
// }


// console.log(ann);
// ann.sale();
// console.log(ann);

//-кофе машинка з set & get та умовами

// class coffeeMachine {
//     _water = 0;
//     #waterLimit = 200;

//     constructor(power) {
//         this.power = power;
//     }

//     set WaterAmount(value) {
//         if (value < 0) {
//             value = 0;
//         }
//         if (value > this.#waterLimit) {
//             value = 0;
//         }
//         this._water = value;
//     }
// }

// let coffeeMachine1 = new coffeeMachine(100);
// coffeeMachine1.WaterAmount = 150;
// console.log(coffeeMachine1);

//перший спосіб

// const person = {
//     a: 'John',
//     b: 'Wick',
// };
// const { a: name, b: lastname } = person;
// console.log('hello', name, lastname);



// другий спосіб
// const person = {
//     a: 'John',
//     b: 'Wick',
// };

// const func1 = ({ a: name, b: lastname }) => {
//     console.log('hello', name, lastname);

// };
// func1(person);

//Iterator and Generator
// const numbers = [10, 20, 30];
// const iterator = numbers[Symbol.iterator]();

// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// function* numbers() {
//     yield 10;
//     yield 20;
// }

// const generator = numbers();

// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());

//Map and Set
// const myMap = new Map();

// myMap.set('name', 'Kris');

// console.log(myMap.get('name')); //-метод get() використовується коли використовуємо Map



// const mySet = new Set([10, 20, 30]);

// console.log(mySet.has(20)); //-метод has() використовується коли використовуємо Set, він чи є значення в переліку
// console.log(mySet.has(50)); 


//promise
//задачка
// const age = 15;

// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (age <= 18) {
//             resolve('дозволено');
//         }
//         else {
//             reject('не дозволено');
//         }
//     }, 1000);
// });


// myPromise
//     .then(result => console.log(result)) //- якщо умова виконується то спрацьовує then
//     .catch(error => console.log(error)); //- якщо умова не виконується то спрацьовує catch



//proxy

// const target = {}; //-обєкт

// const handler = { //-метод, перекладається як обробник
//     get: function (obj, prop) { //- ця функція знаходиться в ключеві і ця функція в собі має два параметра перший обєкт який відповідає за таргет а другий проп який відповідає за властивість обєкту
//         return prop in obj //-перевіряє чи є влістивість в обєкті
//             ? obj[prop] //-якщо так то перевіряє значення знайденої властивості (ключа)
//             : 'Property does not exist'; //-інакше повертає повідомлення що властивість не існує
//     }
// };

// const proxy = new Proxy(target, handler);

// console.log('Proxy Example:', proxy.noExist); //-дуже важливо розуміти що після проксі текст є ДОВІЛЬНИМ і якшо він не буде співпадати з ключем таргета то він видасть noExist


//задачка

// const product = {
//     name: 'phone',
//     price: 1000,
// };
// const handler = {
//     get: function (obj, prop) {
//         return prop in obj
//             ? obj[prop]
//             : 'Такої властивості немає';
//     }
// };

// const proxyProduct = new Proxy(product, handler);
// console.log(proxyProduct.name);
// console.log(proxyProduct.price);
// console.log(proxyProduct.color);
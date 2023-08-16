// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log

let string1='hello';
let string2 = 'owu';
let string3 = 'com';
let string4 = 'ua';
let number1 = 1;
let number2 = 10;
let number3 = -999;
let number4 = 123;
const PI = 3.14;
let number5 = 2.7;
let number6 = 16;
let variableOfTrue = true;
let variableOfFalse = false;

console.log(string1);
console.log(string2);
console.log(string3);
console.log(string4);
console.log(number1);
console.log(number2);
console.log(number3);
console.log(number4);
console.log(PI);
console.log(number5);
console.log(number6);
console.log(variableOfTrue);
console.log(variableOfFalse);

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)

let firstName = 'Tetiana';
let middleName = 'Borisyvna';
let lastName = 'Korsun';
let person = `${firstName} ${middleName} ${lastName}`;
console.log(person)

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
let a = 100;
let b = '100';
let c = true;

console.log(typeof a, a);
console.log(typeof b, b);
console.log(typeof c, c);

// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль

console.log(prompt("Please enter your name"));
console.log(prompt("Please enter your last name"));
console.log(prompt("Please enter your date of birth"))


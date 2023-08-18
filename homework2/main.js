// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let array = [];
array[0]='hello';
array[1] = 5;
array[2]=true;
array[3]='some';
array[4]=false;
array[5]=888;
array[6]='word';
array[7]=452;
array[8]='75';
array[9]=true;
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array[4]);
console.log(array[5]);
console.log(array[6]);
console.log(array[7]);
console.log(array[8]);
console.log(array[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let bookOfHarryPotter = {
    title:'Harry Potter',
    pageCount:450,
    genre:'fantasy'
};
let bookOfTheLyingGame={
    title:'The Lying Game',
    pageCount:320,
    genre:'thrillers'
};
let bookOfOneByOne={
    title:'One by one',
    pageCount:412,
    genre:'thrillers'
};

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let book1 = {
    title:'Book1',
    pageCount:214,
    genre:'drama',
    authors:[
        {name:'First author', age:54},
        {name:'Second author', age:47}
    ]
};
let book2 ={
    title:'Book2',
    pageCount:141,
    genre:'detective',
    authors: [
        {name:'Some author', age:31},
        {name:'Other author', age:38},
        {name:'Author', age:41}
    ]
};
let book3 ={
    title:'Book3',
    pageCount:201,
    genre:'fantasy',
    authors: [
        {name:'Vasyl', age:27},
        {name:'Anna', age:25}
    ]
};

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let users = [
    {name:'Vasyl', age:45, password:'qwe212'},
    {name:'Anna', age:41, password:'2846'},
    {name:'Tanya', age:25, password:'hgg28'},
    {name:'Petro', age:17, password:'qwhe212'},
    {name:'Maksim', age:16, password:'fdjfn741'},
    {name:'Oleksii', age:36, password:'369852'},
    {name:'Vlad', age:45, password:'45jh1g5'},
    {name:'Vadim', age:85, password:'ikkkk'},
    {name:'Alina', age:74, password:'74k5k'},
    {name:'Yuriy', age:36, password:'d5d5d'}
];
console.log(users[0].password);
console.log(users[1]['password']);
console.log(users[2].password);
console.log(users[3]['password']);
console.log(users[4].password);
console.log(users[5]['password']);
console.log(users[6].password);
console.log(users[7]['password']);
console.log(users[8].password);
console.log(users[9]['password']);

// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = 5252;
if (x !== 0){
    console.log("Вірно");
}else {
    console.log("Невірно");
}

let a = 0; // Підставляла 1, 0, -3. Все працює згідно завдання.
if (a !== 0){
    console.log("Вірно");
}else {
    console.log("Невірно");
}

//- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = 31;
if (time>=0 && time<=15){
    console.log("Перша частина");
}else if (time>=16 && time<=30){
    console.log("Друга частина");
}else if (time>=31 && time<=45){
    console.log("Третя частина");
}else if (time>=46 && time<=59){
    console.log("Четверта частина");
}else {
    console.log('Неправильне значення. Потрібно ввести значення від 0 до 59.')
}

//- У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = 18;
if (day>=1 && day<=10){
    console.log("Перша декада");
}else if (day>=11 && day<=20){
    console.log("Друга декада");
}else if (day>=21 && day<=31){
    console.log("Третя декада");
}else {
    console.log("Неправильне значення. Потрібно ввести значення від 1 до 31.")
}

//- Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let weekDay = 5;

switch (weekDay){
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

    default :
        console.log("Wrong number. Please enter a number between 1 and 7 ")
}

//- Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.
let firstNumber = +prompt("enter a first number");
let secondNumber= +prompt("enter a second number");

if (firstNumber>secondNumber){
   alert("First number is higher")
}else if (secondNumber>firstNumber) {
    alert("Second number is higher")
}else if (firstNumber===secondNumber){
    alert("Numbers are equal")
}else {
    alert("Only numbers accepted")
}

//- є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
// за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)

let x1 = prompt("enter something") || "default";
console.log(x1)

// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if (coursesAndDurationArray[0].monthDuration>5){
    console.log(`Супер ${coursesAndDurationArray[0].title}`)
}
 if (coursesAndDurationArray[1].monthDuration>5) {
     console.log(`Супер ${coursesAndDurationArray[1].title}`)
 }
if (coursesAndDurationArray[2].monthDuration>5) {
    console.log(`Супер ${coursesAndDurationArray[2].title}`)
}
 if (coursesAndDurationArray[3].monthDuration>5) {
     console.log(`Супер ${coursesAndDurationArray[3].title}`)
 }
if (coursesAndDurationArray[4].monthDuration>5) {
    console.log(`Супер ${coursesAndDurationArray[4].title}`)
}
if (coursesAndDurationArray[5].monthDuration>5){
    console.log(`Супер ${coursesAndDurationArray[5].title}`)
}

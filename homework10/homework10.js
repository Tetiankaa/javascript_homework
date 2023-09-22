//Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів,
// та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом

// let form1 = document.forms['form_1'];
//
// form1.onsubmit = function (e) {
//     e.preventDefault();
//
//     let name = this.name.value;
//     let surname = this.surname.value;
//     let age = this.age.value;
//
//     let div = document.createElement('div');
//     div.innerText = `${name} ${surname} ${age} years old`;
//     div.style.fontSize = '24px';
//     document.body.appendChild(div);
// };
//
// //є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1

let blockWithNumber = +document.getElementById('number').innerText;

let numFromStorage = JSON.parse(localStorage.getItem('number'));
if (!numFromStorage) {
    localStorage.setItem('number', JSON.stringify(blockWithNumber))
}

window.onload = function () {
    numFromStorage += 1;
    document.getElementById('number').innerText = numFromStorage;
    localStorage.setItem('number', JSON.stringify(numFromStorage));
}
//зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
// При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів


let users = [
    {id:1,name: 'vasya', age: 31, status: false},
    {id:2,name: 'petya', age: 30, status: true},
    {id:3,name: 'kolya', age: 29, status: true},
    {id:4,name: 'olya', age: 28, status: false},
    {id:5,name: 'max', age: 30, status: true},
    {id:6,name: 'anya', age: 31, status: false},
    {id:7,name: 'oleg', age: 28, status: false},
    {id:8,name: 'andrey', age: 29, status: true},
    {id:9,name: 'masha', age: 30, status: true},
    {id:10,name: 'karina', age: 31, status: false},
    {id:11,name: 'marina', age: 31, status: false},
    {id:12,name: 'maks', age: 30, status: true},
    {id:13,name: 'kolya', age: 29, status: true},
    {id:14,name: 'olya', age: 28, status: false},
    {id:15,name: 'max', age: 30, status: true},
    {id:16,name: 'anya', age: 31, status: false},
    {id:17,name: 'oleg', age: 28, status: false},
    {id:18,name: 'andrey', age: 29, status: true},
    {id:19,name: 'masha', age: 30, status: true},
    {id:20,name: 'katya', age: 31, status: false},
    {id:21,name: 'vasya', age: 31, status: false},
    {id:22,name: 'vira', age: 30, status: true},
    {id:23,name: 'kolya', age: 29, status: true},
    {id:24,name: 'svitlana', age: 28, status: false},
    {id:25,name: 'max', age: 30, status: true},
    {id:26,name: 'anya', age: 31, status: false},
    {id:27,name: 'oleg', age: 28, status: false},
    {id:28,name: 'andrey', age: 29, status: true},
    {id:29,name: 'masha', age: 30, status: true},
    {id:30,name: 'mykola', age: 31, status: false},
    {id:31,name: 'ivan', age: 31, status: false},
    {id:32,name: 'petya', age: 30, status: true},
    {id:33,name: 'boris', age: 29, status: true},
    {id:34,name: 'olya', age: 28, status: false},
    {id:35,name: 'max', age: 30, status: true},
    {id:36,name: 'anya', age: 31, status: false},
    {id:37,name: 'oleg', age: 28, status: false},
    {id:38,name: 'viktoria', age: 29, status: true},
    {id:39,name: 'masha', age: 30, status: true},
    {id:40,name: 'anna', age: 31, status: false},
    {id:41,name: 'vasya', age: 31, status: false},
    {id:42,name: 'galyna', age: 30, status: true},
    {id:43,name: 'kolya', age: 29, status: true},
    {id:44,name: 'olya', age: 28, status: false},
    {id:45,name: 'petro', age: 30, status: true},
    {id:46,name: 'anya', age: 31, status: false},
    {id:47,name: 'oleg', age: 28, status: false},
    {id:48,name: 'olha', age: 29, status: true},
    {id:49,name: 'masha', age: 30, status: true},
    {id:50,name: 'olya', age: 31, status: false},
    {id:51,name: 'maks', age: 31, status: false},
    {id:52,name: 'petya', age: 30, status: true},
    {id:53,name: 'anna', age: 29, status: true},
    {id:54,name: 'olya', age: 28, status: false},
    {id:55,name: 'oleksandr', age: 30, status: true},
    {id:56,name: 'anya', age: 31, status: false},
    {id:57,name: 'oleg', age: 28, status: false},
    {id:58,name: 'andrey', age: 29, status: true},
    {id:59,name: 'boris', age: 30, status: true},
    {id:60,name: 'olya', age: 31, status: false},
    {id:61,name: 'vasya', age: 31, status: false},
    {id:62,name: 'oksana', age: 30, status: true},
    {id:63,name: 'kolya', age: 29, status: true},
    {id:64,name: 'olya', age: 28, status: false},
    {id:65,name: 'max', age: 30, status: true},
    {id:66,name: 'anya', age: 31, status: false},
    {id:67,name: 'oleg', age: 28, status: false},
    {id:68,name: 'andrey', age: 29, status: true},
    {id:69,name: 'masha', age: 30, status: true},
    {id:70,name: 'olya', age: 31, status: false},
    {id:71,name: 'vasya', age: 31, status: false},
    {id:72,name: 'petya', age: 30, status: true},
    {id:73,name: 'kolya', age: 29, status: true},
    {id:74,name: 'olya', age: 28, status: false},
    {id:75,name: 'max', age: 30, status: true},
    {id:76,name: 'anya', age: 31, status: false},
    {id:77,name: 'oleg', age: 28, status: false},
    {id:78,name: 'andrey', age: 29, status: true},
    {id:79,name: 'masha', age: 30, status: true},
    {id:80,name: 'olya', age: 31, status: false},
    {id:81,name: 'vasya', age: 31, status: false},
    {id:82,name: 'petya', age: 30, status: true},
    {id:83,name: 'kolya', age: 29, status: true},
    {id:84,name: 'olya', age: 28, status: false},
    {id:85,name: 'max', age: 30, status: true},
    {id:86,name: 'anya', age: 31, status: false},
    {id:87,name: 'oleg', age: 28, status: false},
    {id:88,name: 'andrey', age: 29, status: true},
    {id:89,name: 'masha', age: 30, status: true},
    {id:90,name: 'olya', age: 31, status: false},
    {id:91,name: 'vasya', age: 31, status: false},
    {id:92,name: 'petya', age: 30, status: true},
    {id:93,name: 'kolya', age: 29, status: true},
    {id:94,name: 'olya', age: 28, status: false},
    {id:95,name: 'max', age: 30, status: true},
    {id:96,name: 'anya', age: 31, status: false},
    {id:97,name: 'oleg', age: 28, status: false},
    {id:98,name: 'andrey', age: 29, status: true},
    {id:99,name: 'masha', age: 30, status: true},
    {id:100,name: 'olya', age: 31, status: false},
];


let prevBtn = document.getElementById('prevBtn');
let nextBtn = document.getElementById('nextBtn');


let startIndex = 0;

window.onload = function () {

    let endIndex = startIndex + 10;
    for (let i = startIndex; i < endIndex; i++) {
        if (i < users.length) {
            let div = document.createElement('div');
            div.classList.add('items');
            div.innerText = `${users[i].id} ${users[i].name}`;
            document.body.appendChild(div);
        }
    }
};

nextBtn.onclick = function () {

    startIndex += 10;
    let endIndex = startIndex + 10;

    for (let i = startIndex; i < endIndex; i++) {
        if (i < users.length) {
            let div = document.getElementsByClassName('items')[0];
            div.innerText = `${users[i].id} ${users[i].name}`;
            document.body.appendChild(div);
        }
    }

};

prevBtn.onclick = function () {

    startIndex -= 10;
    let endIndex = startIndex + 10;

    if (startIndex < 0) {
        startIndex = 0;
    }else if (startIndex >users.length) {
     startIndex -=10;
    }else {
        for (let i = startIndex; i < endIndex; i++) {
            let div = document.getElementsByClassName('items')[0];
            div.innerText = `${users[i].id} ${users[i].name}`;
            document.body.appendChild(div);

        }
    }

};

//Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text"

// let removeBtn = document.getElementById('removeBtn');
//
// removeBtn.onclick = function () {
//     let getText = document.getElementById('text');
//     getText.style.display = 'none';
// }

//створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
// let form2 = document.forms['form_2'];
//
// form2.onsubmit = function (e) {
//     e.preventDefault();
//
//     let enteredAge = this.age.value;
//
//     if (enteredAge > 0 && enteredAge < 18) {
//         alert("Your age is less than 18 !!! Content can't be displayed")
//     } else if (enteredAge > 18) {
//         alert("Go ahead!")
//     } else {
//         alert("Value can't be less than 0")
//     }
// }

//*** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

// let form3 = document.forms['form_3'];
//
// form3.onsubmit = function (e){
//     e.preventDefault();
//     let table = document.createElement('table');
//
//     let rows = this.rows.value;
//     let columns = this.columns.value;
//     let content = this.content.value;
//
//     for (let i = 0; i < rows; i++) {
//        let row =  document.createElement('tr');
//        row.style.border = '1px solid black';
//         for (let j = 0; j < columns; j++) {
//            let column = document.createElement('td');
//            column.innerText = `${content}`;
//            column.style.border = '1px solid black';
//            row.appendChild(column);
//         }
//         table.appendChild(row);
//     }
//     document.body.appendChild(table);
// }
//
// //*** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// // при перезавантаженні сторінки до значаення додається по 10грн, але !!!
// //  зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
// //  При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається
//
// let uah = +document.getElementById('uah').innerText;
//
// let valueFromStorage = JSON.parse(localStorage.getItem('UAH'));
// if (!valueFromStorage){
//     localStorage.setItem('UAH',JSON.stringify(uah));
// }
//
// window.onload = function () {
//     let lastTime = +localStorage.getItem('time');
//     let currentTime = new Date().getTime();
//
//     if (!lastTime || currentTime - lastTime >=3000 ){
//         valueFromStorage +=10;
//
//         document.getElementById('uah').innerText = valueFromStorage;
//         localStorage.setItem('time',JSON.stringify(currentTime));
//         localStorage.setItem('UAH',JSON.stringify(valueFromStorage));
//     }else {
//         document.getElementById('uah').innerText = valueFromStorage;
//     }
// }


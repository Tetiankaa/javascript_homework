//ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

let rectangle = (a, b) => a * b;

console.log(rectangle(10,5));
// - створити функцію яка обчислює та повертає площу кола з радіусом r
let circle = r => Math.PI * Math.pow(r, 2);

console.log(circle(10));
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let cylinder = (r, h) => 2 * Math.PI * r * h;

console.log(cylinder(10, 15));

// - створити функцію яка приймає масив та виводить кожен його елемент
let users = [
    {name: "vasya", age: 26, status: true},
    {name: "maksim", age: 22, status: false},
    {name: "anna", age: 29, status: true},
    {name: "olena", age: 45, status: false},
    {name: "tetiana", age: 66, status: true}
];

let printUsers = array => {
    for (const element of array) {
        console.log(element);
    }
}

printUsers(users);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
let createParagraph = text => document.write(`<p>${text}</p>`);

createParagraph("This is paragraph");
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let createListOfItems = item => {
    document.write(`<ul>`)
    document.write(`<li>${item}</li>`)
    document.write(`<li>${item}</li>`)
    document.write(`<li>${item}</li>`)
    document.write(`</ul>`)
}

createListOfItems("This is list item");
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let createList = (text, numberOfItems) => {
    document.write(`<ul>`)
    for (let i = 0; i < numberOfItems; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
}

createList("How are you", 3);
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let array = [true, 41, "aaa", "hello", 96, false, 85];

let list = array => {
    document.write(`<ul>`)

    for (const item of array) {
        document.write(`<li>${item}</li>`)
    }
    document.write(`</ul>`)
}
list(array);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let users2 = [
    {id: 1, name: "vasya", age: 26},
    {id: 2, name: "maksim", age: 22},
    {id: 3, name: "anna", age: 29},
    {id: 4, name: "olena", age: 45},
    {id: 5, name: "tetiana", age: 66}
];

let printArray = array => {
    for (const arrayElement of array) {
        document.write(`<div>
        <p>
        ${arrayElement.id} - ${arrayElement.name} - ${arrayElement.age}
        </p>
</div>`)
    }
}
printArray(users2);
// - створити функцію яка повертає найменьше число з масиву
let numbers = [100,25,7,99,258,158,5,69];
let smallNumber = array => {
    let smallest = array[0];
    for (const item of array) {
        if (item<smallest){
            smallest=item;
        }
    }
    return smallest;
}

console.log(smallNumber(numbers));
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
let num = [10,5,10,5,5];

let sum = arr => {
    let s = arr[0];
    for (let i = 1; i < arr.length; i++) {
        const item = arr[i];
        s += item;
    }
    return s;
}

console.log(sum(num));
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
let array2 = [11,22,33,44];

let swap = (arr,index1,index2) => {
    let firstIndex = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = firstIndex;
    return arr;
}
console.log(swap(array2,0,1));
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

let currencyValues = [{currency:'USD',value:40},{currency:'EUR',value:42}];
let exchange = (sumUAH,currencyValues,exchangeCurrency) => {
    for (let i = 0; i < currencyValues.length; i++) {
        const item = currencyValues[i];
        if (exchangeCurrency === item.currency){
            return sumUAH/item.value;
        }
    }
    return console.error("Wrong value.")
}
console.log(exchange(10000,currencyValues,"USD"));
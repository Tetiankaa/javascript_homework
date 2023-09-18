//Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати
// всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію

let sessionsFromStorage = JSON.parse(localStorage.getItem('sessions'));
let count = 1;

for (let i = 0; i < sessionsFromStorage.length; i++) {
    const session = sessionsFromStorage[i];

    let createBlock = document.createElement('div');
    createBlock.innerText =`${count} session => ${session}`;
    document.body.appendChild(createBlock);

    count++;
}
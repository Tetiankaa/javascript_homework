//- Знайти та вивести довижину настипних стрінгових значень
let string1 = 'hello world';
let string2 = 'lorem ipsum';
let string3 = 'javascript is cool';

console.log(string1.length);
console.log(string2.length);
console.log(string3.length);


// - Перевести до великого регістру наступні стрінгові значення
console.log(string1.toUpperCase());
console.log(string2.toUpperCase());
console.log(string3.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
let string4 = 'HELLO WORLD';
let string5 = 'LOREM IPSUM';
let string6 = 'JAVASCRIPT IS COOL';

console.log(string4.toLowerCase());
console.log(string5.toLowerCase());
console.log(string6.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   ';
console.log(str.trim());

//- Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
//     let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

let str2 = 'Ревуть воли як ясла повні';

function stringToArray(str) {
    return str.split(' ');
}

let arr = stringToArray(str2);
console.log(arr);

//- є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let numbers = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
let convertNumberToString = numbers.map(value => value.toString());
console.log(convertNumberToString);

//- створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

let nums = [11, 21, 3];

function sortNums(array, direction) {
    if (direction === 'ascending') {
        array.sort((a, b) => a - b)
    } else if (direction === 'descending') {
        array.sort((a, b) => b - a)
    } else {
        return console.error("Wrong value")
    }
    return array;
}

let sort = sortNums(nums, 'descending');
console.log(sort)

//- є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

let modifiedArray = coursesAndDurationArray
    .sort((first, second) => second.monthDuration - first.monthDuration)
    .filter(duration => duration.monthDuration > 5)
    .map(function (element) {
        element.id = Math.floor(Math.random() * 1000)
        return element;
    });
console.log(modifiedArray);

// описати колоду карт (від 6 до туза без джокерів)
let deck = [
    {cardSuit: 'Spade', value: 6, color: 'Black'},
    {cardSuit: 'Clubs', value: 6, color: 'Black'},
    {cardSuit: 'Hearts', value: 6, color: 'Red'},
    {cardSuit: 'Diamonds', value: 6, color: 'Red'},
    {cardSuit: 'Spade', value: 7, color: 'Black'},
    {cardSuit: 'Clubs', value: 7, color: 'Black'},
    {cardSuit: 'Hearts', value: 7, color: 'Red'},
    {cardSuit: 'Diamonds', value: 7, color: 'Red'},
    {cardSuit: 'Spade', value: 8, color: 'Black'},
    {cardSuit: 'Clubs', value: 8, color: 'Black'},
    {cardSuit: 'Hearts', value: 8, color: 'Red'},
    {cardSuit: 'Diamonds', value: 8, color: 'Red'},
    {cardSuit: 'Spade', value: 9, color: 'Black'},
    {cardSuit: 'Clubs', value: 9, color: 'Black'},
    {cardSuit: 'Hearts', value: 9, color: 'Red'},
    {cardSuit: 'Diamonds', value: 9, color: 'Red'},
    {cardSuit: 'Spade', value: 10, color: 'Black'},
    {cardSuit: 'Clubs', value: 10, color: 'Black'},
    {cardSuit: 'Hearts', value: 10, color: 'Red'},
    {cardSuit: 'Diamonds', value: 10, color: 'Red'},
    {cardSuit: 'Spade', value: 'Jack', color: 'Black'},
    {cardSuit: 'Clubs', value: 'Jack', color: 'Black'},
    {cardSuit: 'Hearts', value: 'Jack', color: 'Red'},
    {cardSuit: 'Diamonds', value: 'Jack', color: 'Red'},
    {cardSuit: 'Spade', value: 'Queen', color: 'Black'},
    {cardSuit: 'Clubs', value: 'Queen', color: 'Black'},
    {cardSuit: 'Hearts', value: 'Queen', color: 'Red'},
    {cardSuit: 'Diamonds', value: 'Queen', color: 'Red'},
    {cardSuit: 'Spade', value: 'King', color: 'Black'},
    {cardSuit: 'Clubs', value: 'King', color: 'Black'},
    {cardSuit: 'Hearts', value: 'King', color: 'Red'},
    {cardSuit: 'Diamonds', value: 'King', color: 'Red'},
    {cardSuit: 'Spade', value: 'Ace', color: 'Black'},
    {cardSuit: 'Clubs', value: 'Ace', color: 'Black'},
    {cardSuit: 'Hearts', value: 'Ace', color: 'Red'},
    {cardSuit: 'Diamonds', value: 'Ace', color: 'Red'}
];
//  - знайти піковий туз(spade ace)
let findSpadeAce = deck.find(element => element.cardSuit === 'Spade' && element.value === 'Ace');
console.log(findSpadeAce);
//  - всі шістки
let findAllSix = deck.filter(element => element.value === 6);
console.log(findAllSix);
//  - всі червоні карти
let findAllRedCards = deck.filter(element => element.color === 'Red');
console.log(findAllRedCards)
//  - всі буби (diamond)
let findAllDiamonds = deck.filter(element => element.cardSuit === 'Diamonds');
console.log(findAllDiamonds);
//  - всі трефи від 9 та більше (clubs)

let findClubsFromNine = deck.filter(element => element.cardSuit === 'Clubs' &&
    (element.value >= 9 || element.value === 'Jack' || element.value === 'Queen' || element.value === 'King' || element.value === 'Ace'))
console.log(findClubsFromNine);

//Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }

let filterByCardSuit = deck.reduce(function (accumulator,card) {
    if (card.cardSuit === 'Spade'){
        accumulator.spades.push(card)
    }else if (card.cardSuit === 'Diamonds'){
        accumulator.diamonds.push(card)
    }else if (card.cardSuit === 'Hearts' ){
        accumulator.hearts.push(card)
    }else if (card.cardSuit === 'Clubs' ){
        accumulator.clubs.push(card)
    }

    return accumulator;
},{ spades:[], diamonds:[], hearts:[], clubs:[]})

console.log(filterByCardSuit)

//взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
// --написати пошук всіх об'єктів, в який в modules є sass
let findObjectsWithSass = coursesArray.filter(item => item.modules.includes('sass'));
console.log(findObjectsWithSass);

// --написати пошук всіх об'єктів, в який в modules є docker
let findObjectsWithDocker = coursesArray.filter(item => item.modules.includes('docker'));
console.log(findObjectsWithDocker);


//- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let users = [
    new User(11, 'Tanya', "Korsun", "tanyakorsun@gmail.com", +380678899321),
    new User(8, "Olha", "Dubrovina", "olha11@gmail.com", +380936644785),
    new User(3, "Oleksii", "Krivtsun", "oleksii@gmail.com", +380991236852),
    new User(25, "Anna", "Chepurna", "anna2536@gmail.com", +380991235896),
    new User(12, "Ruslan", "Bondar", "bondar@gmail.com", +380631478963),
    new User(10, "Vasyl", "Chomych", "vasyyyl@gmail.com", +380935511239),
    new User(7, "Valeriya", "Kryvych", "vallerii@gmail.com", +380991589123),
    new User(19, "Natasha", "Morozova", "natali@gmail.com", +380731155963),
    new User(2, "Vlad", "Gubskii", "vladgub@gmail.com", +380751485963),
    new User(18, "Yevhen", "Danilov", "yevhenii@gmail.com", +380632369741)
];
console.log(users);

//- Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let usersWithEvenId = users.filter(user => user.id % 2 === 0);
console.log(usersWithEvenId);

//- Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let sortIdByGrowth = users.sort((x, y) => x.id - y.id);
console.log(sortIdByGrowth);

//- створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client extends User {
    constructor(id, name, surname, email, phone, ...order) {
        super(id, name, surname, email, phone)
        this.order = order;
    }
}

let client1 = new Client(11, 'Tanya', "Korsun", "tanyakorsun@gmail.com", +380678899321, "water", "rice", "tea", "coffee");
let client2 = new Client(8, "Olha", "Dubrovina", "olha11@gmail.com", +380936644785, "cookies", "bread", "cake");
let client3 = new Client(3, "Oleksii", "Krivtsun", "oleksii@gmail.com", +380991236852, "apples", "biscuit");
let client4 = new Client(25, "Anna", "Chepurna", "anna2536@gmail.com", +380991235896, "meat", "pizza", "sausage", "bacon");
let client5 = new Client(12, "Ruslan", "Bondar", "bondar@gmail.com", +380631478963, "salami", "waffle", "chololate", "bread", "meat");
let client6 = new Client(10, "Vasyl", "Chomych", "vasyyyl@gmail.com", +380935511239, "eggs", "water", "ham", "bacon");
let client7 = new Client(7, "Valeriya", "Kryvych", "vallerii@gmail.com", +380991589123, "milk", "kefir", "shrimp", "spaghetti", "oysters");
let client8 = new Client(19, "Natasha", "Morozova", "natali@gmail.com", +380731155963, "salama", "cheese", "banana", "apples", "juice", "water");
let client9 = new Client(2, "Vlad", "Gubskii", "vladgub@gmail.com", +380751485963, "strawberry", "melon", "cherry", "orange", "pear");
let client10 = new Client(18, "Yevhen", "Danilov", "yevhenii@gmail.com", +380632369741, "kiwi");

let clients = [];
clients.push(client1, client2, client3, client4, client5, client6, client7, client8, client9, client10);
console.log(clients);

//- Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let sortByOrderItems = clients.sort((x, y) => x.order.length - y.order.length);
console.log(sortByOrderItems);

//- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.додати в об'єкт функції:
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//  -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car1(model, producer, year, maxSpeed, engineVolume) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineVolume = engineVolume;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    };
    this.info = function () {
        console.log(`Model: ${this.model}, producer: ${this.producer}, year: ${this.year}, max speed: ${this.maxSpeed} m/hour, volume of engine: ${this.engineVolume} cm3`)
    };
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed += newSpeed;
    };
    this.changeYear = function (newValue) {
        this.year = newValue;
    };
    this.addDriver = function (...drivers) {
        this.driverName = drivers;
    }

}

let car1 = new Car1("Corolla", "Toyota", 2021, 120, 50);
car1.drive();
car1.info();
car1.increaseMaxSpeed(50);
car1.changeYear(2023);
car1.addDriver({name:"Tetiana Korsun",licence:true});
console.log(car1);

//- (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class Car2 {
    constructor(model, producer, year, maxSpeed, engineVolume) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    };

    info() {
        console.log(`Model: ${this.model}, producer: ${this.producer}, year: ${this.year}, max speed: ${this.maxSpeed} m/hour, volume of engine: ${this.engineVolume} cm3`)
    };

    increaseMaxSpeed(newSpeed) {
        this.maxSpeed += newSpeed;
    };

    changeYear(newValue) {
        this.year = newValue;
    };

    addDriver(...drivers) {
        this.driverName = drivers;
    };
}
function Driver (name,licence){
    this.name=name;
    this.licence=licence;
}
let car2 = new Car2("Corolla", "Toyota", 2021, 140, 50);
car2.drive();
car2.info();
car2.increaseMaxSpeed(20);
car2.changeYear(2020);
car2.addDriver({name:"First driver",licence:true},{name: "Second driver",licence:true});

console.log(car2);

//-створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.

function Cinderella(name, age, footSize) {
    this.name = name;
    this.age = age;
    this.footSize = footSize;
}

let cinderellas = [
    new Cinderella("Olha", 22, 37),
    new Cinderella("Anna", 25, 32),
    new Cinderella("Marina", 26, 36),
    new Cinderella("Tetiana", 29, 37),
    new Cinderella("Katya", 19, 35),
    new Cinderella("Diana", 28, 38),
    new Cinderella("Galyna", 23, 40),
    new Cinderella("Olena", 21, 34),
    new Cinderella("Oksana", 25, 39),
    new Cinderella("Polina", 33, 37)
];

class Prince {
    constructor(name, age, findSize) {
        this.name = name;
        this.age = age;
        this.findSize = findSize;
    }
}

let prince = new Prince("Vasyl", 25, 34);

for (const woman of cinderellas) {
    if (woman.footSize === prince.findSize) {
        console.log(`${woman.name} should be with prince ${prince.name}`);
    }
}
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

let findCinderella = cinderellas.find(woman => woman.footSize === prince.findSize);
console.log(findCinderella);
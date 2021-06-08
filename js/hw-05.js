// Прототип объекта и метод Object.create()
// Объекты можно организовать в цепочки так, чтобы свойство
// не найденное в одном объекте, автоматически искалось бы
// в другом.Связующим звеном выступает специальное скрытое
// свойство[[Prototype]], которое в консоли браузера
// отображается как __proto__.

// const animal = {
//   legs: 4
// };
// const dog = Object.create(animal);
// dog.name = 'Манго';

// console.log(dog); // { name: 'Манго', __proto__: animal }
// console.log(animal.isPrototypeOf(dog)); // true
// Метод Object.create(obj) создаёт и возвращает новый объект,
//     связывая его с объектом obj.Объект, на который указывает
// ссылка в __proto__, называется прототипом.В нашем примере
// объект animal это прототип для объекта dog.Метод isPrototypeOf()
// проверяет является ли объект animal прототипом для dog и
// возвращает true или false.

// console.log(dog.hasOwnProperty('name')); // true
// console.log(dog.name); // 'Манго'

// console.log(dog.hasOwnProperty('legs')); // false
// console.log(dog.legs); // 4
// Обращение dog.name работает очевидным образом - возвращает
// собственное свойство name объекта dog.При обращении к dog.legs
// интерпретатор ищет свойство legs в объекте dog, не находит и
// продолжает поиск в объекте по ссылке из dog.__proto__, то есть,
//     в данном случае, в объекте animal - его прототипе.

// То есть прототип - это резервное хранилище свойств и методов
// объекта, автоматически используемое при их поиске.У объекта,
//     который выступает прототипом может также быть свой прототип,
//         у того свой, и так далее.

// Поиск свойства выполняется до первого совпадения.Интерпретатор
// ищет свойство по имени в объекте, если не находит, то обращается
// к свойству __proto__, т.е.переходит по ссылке к объекту -
//     прототипу, а затем и прототипу прототипа.Если интерпретатор
// доберется до конца цепочки и не найдет свойства с таким именем,
//     то вернёт undefined.

// Задание
// Измени код так, чтобы объект parent стал прототипом для объекта
// в переменной сhild.

// const parent = {
//   name: 'Stacey',
//   surname: 'Moore',
//   age: 54,
//   heritage: 'Irish'
// };
// // Пиши код ниже этой строки

// const child =
// Object.create(parent)
// ;
// console.log(parent.hasOwnProperty('name') );
// // Пиши код выше этой строки
// console.log(child.name);// 'Stacey'
// child.name = 'Jason';
// child.age = 27;
// console.log(child.name);//'Jason'

// =========== hw-02 ==========

// Задача. Цепочка прототипов
// Задание
// Измени код, построив цепочку прототипов так, чтобы объект
// ancestor был прототипом для parent, а тот в свою очередь был
// прототипом для child.

// const ancestor = {
//   name: 'Paul',
//   age: 83,
//   surname: 'Dawson',
//   heritage: 'Irish'
// };
// // Пиши код ниже этой строки

// const parent = Object.create(ancestor);
// parent.name = 'Stacey';
// parent.surname = 'Moore';
// parent.age = 54;

// const child = Object.create(parent);
// child.name = 'Jason';
// child.age = 27;

// console.log(parent.isPrototypeOf(child));//true
// console.log(parent.surname);//Moore

// Тесты
// Объявлена переменная ancestor.
// Значение переменной ancestor это объект.
// Объявлена переменная parent.
// Значение переменной parent это объект.
// Объявлена переменная child.
// Значение переменной child это объект.
// Вызов parent.isPrototypeOf(child) возвращает true.
// Обращение к parent.surname возвращает 'Moore'.
// Обращение к parent.heritage возвращает 'Irish'.
// Вызов parent.hasOwnProperty('surname') возвращает true.
// Вызов parent.hasOwnProperty('heritage') возвращает false.
// Вызов ancestor.isPrototypeOf(parent) возвращает true.
// Вызов child.hasOwnProperty('surname') возвращает false.
// Обращение к child.surname возвращает 'Moore'.
// Обращение к child.heritage возвращает 'Irish'.
// Вызов child.hasOwnProperty('heritage') возвращает false.
// Обращение к ancestor.heritage возвращает 'Irish'.
// Вызов ancestor.hasOwnProperty('surname') возвращает true.
// Вызов ancestor.hasOwnProperty('heritage') возвращает true.
// Обращение к ancestor.surname возвращает 'Dawson'.
// Используется метод Object.create().

// =========== hw-03 ==========
// Функция-конструктор
// Синтаксис литерала объекта позволяет создать один объект. Но часто нужно создать много однотипных объектов с одинаковым набором свойств, но разными значениями, и методами для взаимодействия со свойствами. Всё это нужно сделать динамически, во время выполнения программы. Для этого используют функции-конструкторы, вызывая их при помощи специального оператора new.

// function User() {
//   // Тело функции
// }

// const mango = new User();
// console.log(mango); // {}

// const poly = new User();
// console.log(poly); // {}
// Любая функция, кроме стрелочной, может быть использована как
// конструктор.Чтобы отличить конструктор от обычной функции, их
// принято называть с большой буквы, а в самом названии отражать
// тип создаваемого объекта(существительное).

// Вызов функции с оператором new приводит к созданию нового объекта
// и вызову функции в контексте этого объекта.То есть this внутри
// функции будет ссылаться на новосозданный объект.Это позволяет
// добавлять каждому объекту свойства с одинаковыми именами, но
// разными значениями.

// function User(name, email, age) {
//   this.name = name;
//   this.email = email;
// }

// const mango = new User('Манго', 'mango@mail.com');
// console.log(mango); // { name: 'Манго', email: 'mango@mail.com' }

// const poly = new User('Поли', 'poly@mail.com');
// console.log(poly); // { name: 'Поли', email: 'poly@mail.com' }
// Задание
// Объяви функцию-конструктор Car которая принимает три параметра:

// brand - марка автомобиля.
// model - модель автомобиля.
// price - цена автомобиля.
// Функция Car должна создавать объект с одноимёнными свойствами
// brand, model и price, значениями которых должны быть
// переданные аргументы во время её вызова с оператором new.

// function Car(brand, model, price) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// };
// const audi = new Car('Audi', 'Q3', 36000);
// console.log(audi);


// Тесты
// Объявлена функция Car(brand, model, price).
// В результате вызова new Car('Audi', 'Q3', 36000)
// получится объект { brand: 'Audi', model: 'Q3', price: 36000 }.

// В результате вызова new Car('BMW', 'X5', 58900)
// получится объект { brand: 'BMW', model: 'X5', price: 58900 }.

// В результате вызова new Car('Nissan', 'Murano', 31700)
// получится объект { brand: 'Nissan', model: 'Murano', price: 31700 }.

// =========== hw-04 ==========
// Объект настроек
// Функции - конструкторы всегда принимают большое количество входных
// данных для свойств будущего объекта.Поэтому, к ним также можно
// применить паттерн «Объект настроек», передавая один объект с
// логично именованными свойствами, вместо несвязанного набора
// аргументов.

// function User({ name, email }) {
//   this.name = name;
//   this.email = email;
// }

// const mango = new User({ name: 'Манго', email: 'mango@mail.com' });
// const poly = new User({ name: 'Поли', email: 'poly@mail.com' });
// Задание
// Выполни рефакторинг функции - конструктора Car так, чтобы она
// принимала один параметр - объект со свойсвами brand, model
// и price.Деструктуризируй объект в сигнатуре(подписи) функции.

// function Car({brand, model, price}) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// }

// Тесты
// Объявлена функция Car({ brand, model, price }).
// В результате вызова new Car({ brand: 'Audi', model: 'Q3', price: 36000 }) получится объект { brand: 'Audi', model: 'Q3', price: 36000 }.
// В результате вызова new Car({ brand: 'BMW', model: 'X5', price: 58900 }) получится объект { brand: 'BMW', model: 'X5', price: 58900 }.
// В результате вызова new Car({ brand: 'Nissan', model: 'Murano', price: 31700 }) получится объект { brand: 'Nissan', model: 'Murano', price: 31700 }.

// =========== hw-05 ==========
// Свойство prototype
// Мы уже знаем что такое прототип объекта,
//     свойство __proto__ и как происходит поиск отсутствующих
// свойств объекта по цепочке прототипов.Во время вызова
// функции - конструктора через new и создания нового объекта
// со свойствами, ему также устанавливается прототип.

// У каждой функции, кроме стрелочных, есть свойство prototype,
//     значение которого это объект с единственным свойством
// constructor, указывающим на саму функцию - конструктор.

// function User() {}
// console.log(User.prototype); // { constructor: User }
// При вызове функции - конструктора и создании объекта через new,
//     объект в свойстве prototype функции - конструктора будет
// прототипом создаваемого объекта.

// const mango = new User();
// console.log(User.prototype.isPrototypeOf(mango)); // true
// В свойство prototype можно записывать свойства и методы,
//     которые будут доступны всем объектам созданным этой
// функцией - конструктором.Методы в prototype будут
// вызываться объектами созданными функцией - конструктором,
//     поэтому для доступа к свойствам вызываемого объекта
// в методах используется ключевое слово this.

// function User({ name, email }) {
//   this.name = name;
//   this.email = email;
// }

// User.prototype.getEmail = function () {
//   return this.email;
// };

// User.prototype.changeEmail = function (newEmail) {
//   this.email = newEmail;
// };

// const mango = new User({ name: 'Манго', email: 'mango@mail.com' });

// console.log(mango.getEmail()); // mango@mail.com
// mango.changeEmail('mango@supermail.com');
// console.log(mango.getEmail()); // mango@supermail.com
// Задание
// Добавь в свойство prototype функции-конструктора Car два метода:

// getPrice() - возвращает значение свойства price из объекта
// который его будет вызывать.
//     changePrice(newPrice) - обновляет значение свойства price
// у объекта который его будет вызывать на newPrice.

// function Car({ brand, model, price }) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// };

// Car.prototype.getPrice = function () {
//   return this.price;
// };

// Car.prototype.changePrice = function (newPrice) {
//   this.price = newPrice;
// };

// Тесты
// Объявлена функция Car({ brand, model, price }).
// Вызов Car.prototype.hasOwnProperty('getPrice') возвращает true.
// Значение Car.prototype.getPrice это функция.
// Вызов Car.prototype.hasOwnProperty('changePrice') возвращает true.
// Значение Car.prototype.changePrice это функция.
// У объекта, созданного вызовом new Car({ brand: 'Audi', model: 'Q3', price: 36000 }),
//     вызов метода getPrice() вернет число 36000.
// У объекта, созданного вызовом new Car({ brand: 'Audi', model: 'Q3', price: 36000 }),
//     вызов метода changePrice(35000) и последующем вызове getPrice() вернет число 35000.


// =========== hw-06 ==========

// Задача. Хранилище
// Задание
// С помощью Function Declaration напиши функцию - конструктор Storage,
//     которая будет создавать объекты для управления складом товаров.
// Функция ожидает только один аргумент - начальный массив товаров,
//     который записывается на создаваемый объект в свойство items.

// Добавь методы на прототип:

// getItems() - возвращает массив текущих товаров в свойстве items
// объекта, который вызывает этот метод.
//     addItem(newItem) - принимает новый товар newItem и добавляет
// его в массив товаров в свойстве items объекта, который вызывает
// этот метод.
//     removeItem(item) - принимает товар item и удаляет его из массива
// товаров в свойстве items объекта, который вызывает этот метод.
// Под комментарием мы добавили инициализацию экземпляра и
// вызовы методов в той последовательности, в которой твой код
// будут проверять тесты.Пожалуйста ничего там не меняй.

// function Storage(items) {
//                this.items = items;
// }; 
//   Storage.prototype.getItems = function() {
//                return this.items;
// };
// Storage.prototype.addItem = function(newItem) {
//                return this.items.push(newItem);
// };
// Storage.prototype.removeItem = function(item) {
//  return this.items.splice(this.items.indexOf(item),1);
// };
// // Пиши код выше этой строки
// const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Антигравитатор']);
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
// storage.addItem('Дроид');
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
// storage.removeItem('Пролонгер');
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]


// =========== hw-07 ==========

// =========== hw-08 ==========

// =========== hw-09 ==========



// Задание1
// Запиши условие в инструкции if
//  так, чтобы функция работала правильно.

function checkAge(age) {
    if (age>=18) { // Change this line
      return "You are an adult";
    }  
    return "You are a minor";
  }
    
  console.log(checkAge(20));

//   Задание2
// Функция checkPassword получает пароль пользователя в параметр 
// password, проверяет его на совпадение с паролем 
// администратора в переменной ADMIN_PASSWORD и возвращает 
// сообщение о результате сравнения.

// Проведи рефакторинг кода функции checkStorage используя 
// паттерн «ранний возврат»:

// удали переменную message
// удали else
// код должен работать так же, как и до оптимизации

//====ДО
console.log( "Welcome!");

function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
 
  let message;

  if (password === ADMIN_PASSWORD) {
    message = "Welcome!";
  } else {
    message = "Access denied, wrong password!";
  }

  return message;  
}

console.log(checkPassword("mangohackzor"));
//====ПОСЛЕ

function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";   

  if (password === ADMIN_PASSWORD) {
    return "Welcome!";
  }   
  return "Access denied, wrong password!";
 
}

console.log(checkPassword("mangohackzor"));

// Задача: склад товаров 3.0
// Задание3
// Функция checkStorage проверяет возможность оформления заказа и возвращает 
// сообщение о результате. Она принимает два параметра, значения которых
//  будут задаваться во время её вызова.

// available - доступное количество товаров на складе
// ordered - количество единиц товара в заказе
// Проведи рефакторинг кода функции checkStorage используя паттерн 
// «ранний возврат».

function checkStorage(available, ordered) {

  if (ordered === 0) {
    return "Your order is empty!";
  }  
  if (ordered > available) {
    return "Your order is too large, not enough goods in stock!";
  } 
  return  "The order is accepted, our manager will contact you";
  }
console.log(checkStorage(100, 50));
console.log(checkStorage(100, 130));
console.log(checkStorage(70, 0));

// Задание4
// Объяви переменную fruits и присвой ей массив фруктов - строк
//  "apple", "plum", "pear" и "orange".

const fruits = ["apple", "plum", "pear", "orange"];

console.log(fruits);

// Задание5
// Объяви три переменные и присвой каждой из них значение, используя 
// нотацию квадратных скобок.

// Имя переменной	Значение переменной
// firstElement	первый элемент массива
// secondElement	второй элемент массива
// lastElement	последний элемент массива

const fruits = ["apple", "plum", "pear", "orange"];

// Change code below this line
const firstElement = fruits[0];
const secondElement = fruits[1];
const lastElement = fruits[3];

console.log(firstElement, secondElement, lastElement );
console.log(fruits[0], fruits[1], fruits[3] );

// Задание6
// Переопредели значения элементов с индексами 1 и 3. 
// Замени "plum" на "peach", а "orange" на "banana".

const fruits = ["apple", "plum", "pear", "orange"];

// Write your code under this line
fruits[1]='peach';
fruits[3]="banana";
console.log(fruits);

// Задание7
// Объяви переменную fruitsArrayLength и присвой ей длину массива fruits 
// используя свойство length.

const fruits = ["apple", "peach", "pear", "banana"];
const fruitsArrayLength = fruits.length;

// Задание8
// Объяви две перемнные:

// Имя переменной	Ожидаемое значение
// lastElementIndex	Мндекс последнего элемента масcива fruits через
//  длина_массива - 1
// lastElement	Значение последнего элемента массива

const fruits = ["apple", "peach", "pear", "banana"];

// Change code below this line
const lastElementIndex = fruits.length-1;
const lastElement = fruits[lastElementIndex];
console.log(lastElementIndex);
console.log(lastElement);

// Задание9
// Напиши функцию getExtremeElements(array) которая принимает один 
// параметр array - массив элементов произвольной длины. Функция 
// должна возвращать массив из двух элементов - первого и последнего
//  элемента параметра array.

function getExtremeElements(array) {
  // Change code below this line
	const lastElementIndex = array.length-1;
  const lastElement  = array[lastElementIndex];
 	const firstElement = array[0];
  const newArray =[firstElement, lastElement];
return newArray;
  // Change code above this line
}

console.log(getExtremeElements([1, 2, 3, 4, 5]));

// Задание10
// Дополни код функции splitMessage(message, delimeter) так, чтобы она 
// возвращала в переменной words результат разделения строки message по 
// разделителю delimeter - массив строк.

function splitMessage(message, delimeter) {
  let words = message.split(delimeter);
  // Change code below this line

  // Change code above this line
  return words;
}

// Задание11
// Сервису гравировки украшений нужна функция, которая бы 
// автоматически считала цену гравировки, в зависимости от 
// количества слов и цены за слово.

// Объявлена функция calculateEngravingPrice(message, pricePerWord). 
// Эта функция принимает строку, состоящую из слов разделённых 
// только пробелами (параметр message) и цену гравировки одного 
// слова (параметр pricePerWord).

function calculateEngravingPrice(message, pricePerWord) {
  // Change code below this line
const workPrice = message.split(" ").length *  pricePerWord ;

return workPrice;
  // Change code above this line
}

console.log(calculateEngravingPrice("JavaScript is in my blood", 10));


// Задание 12
// Дополни код функции makeStringFromArray(array, delimeter) так, 
// чтобы она возвращала в переменной string результат соединения 
// элементов массива array c разделителем delimeter - строку.

function makeStringFromArray(array, delimeter) {
  let string = array.join(delimeter);
 
  return string;
}

console.log(makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " "));


// 13
// Напиши функцию slugify(title) которая принимает заголовок
 //статьи, параметр title, и возвращает slug, созданный из этой
 // строки.

// Значением параметра title будут строки, слова которых
// разделены только пробелами
// Все символы slug должны быть в нижнем регистре
// Все слова slug должна быть разделены тире

function slugify(title) {  
  title = title.toLowerCase().split(" ").join("-");
return title;
}

console.log(slugify("Arrays for begginers"));//arrays-for-begginers

// Задание14
// Дополни код так, чтобы переменные содержали частичные копии 
// исходного массива fruits.

// firstTwoEls - массив из первых двух элементов
// nonExtremeEls - массив из всех элементов кроме первого и 
// последнего
// lastThreeEls - массив из трёх последних элементов

const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// Change code below this line
const firstTwoEls = fruits.slice(0,2);
const fruitsLength = fruits.length;
const nonExtremeEls = fruits.slice(1,fruitsLength-1);
const lastThreeEls = fruits.slice(-3);

console.log(firstTwoEls);//[ 'apple', 'plum' ]
console.log(nonExtremeEls);//[ 'plum', 'pear', 'orange' ]
console.log(lastThreeEls);//[ 'pear', 'orange', 'banana' ]

// Задание15
// Дополни код так, чтобы в переменной allClients получился 
// массив всех элементов массивов oldClients и newClients.

const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
const newClients = ['Peach', 'Houston'];

const allClients = oldClients.concat(newClients); 
console.log (allClients);// ["Mango", "Ajax", "Poly", "Kiwi", "Peach", "Houston"]

// Задание16
// Напиши функцию makeArray(firstArray, secondArray, maxLength) 
// для создания нового массива со всеми элементами двух исходных
//  firstArray и secondArray. Параметр maxLength содержит 
//  максимально допустимую длину нового массива.

// Если количество элементов нового массива больше maxLength, 
// функция должна вернуть копию массива длиной maxLength 
// элементов. В противном случае функция должна вернуть новый 
// массив целиком.
// Задание 1.
// Объяви две переменные, productName для названия товара и pricePerItem для хранения цены за штуку. При объявлении присвой переменным следующие характеристики товара:

// название - строка "Droid"
// цена за штуку - число 2000

// Change code below this line
const productName = "Droid";
 console.log(productName);
// 'Droid'
const pricePerItem = 2000;
 console.log(pricePerItem);
// 2000



// Задание 2
// Имя товара изменили на "Repair droid" и увеличили его цену на 1500 кредитов. Переопредели значения переменных pricePerItem и productName после их объявления.

// Тесты
// Переменная pricePerItem объявлена с помощью let
// При объявлении переменной pricePerItem присвоено значение - число 2000
// Переменной pricePerItem присвоено новое значение, больше чем предыдущее на 1500
// Переменная productName объявлена с помощью let
// При объявлении переменной productName присвоено значение - строка "Droid"
// Переменной productName присвоено новое значение - строка "Repair droid"

let productName = "Droid";
let pricePerItem = 2000;

// Change code below this line
productName = "Repair droid";
console.log (productName);

pricePerItem = 3500;
console.log (pricePerItem);

// Задание 3
// Объяви следующие переменные используя ключевое слово const или let и присвой им соответствующие значения.

// topSpeed - число 160.
// distance - число 617.54.
// login - строка "mango935".
// isOnline - буль true.
// isAdmin - буль false.

const topSpeed = 160;
let distance = 617.54;

const login = "mango935";

const isOnline = true;
let isAdmin = false;

// Задание 4
// Дополни код, присвоив переменной totalPrice выражение для
//  подсчёта общей суммы заказа. Переменная pricePerItem хранит 
//  цену одной единицы товара, а orderedQuantity - количество единиц
//   товара в заказе.

const pricePerItem = 3500;
const orderedQuantity = 4;

// Change code below this line
const totalPrice = pricePerItem * orderedQuantity;


console.log(totalPrice);

// Задание 5
// Объяви перемнную message и запиши в неё сообщение о покупке, 
// строку в 
// формате: "You picked <имя товара>, price per item is <цена товара> 
// credits". Где <имя товара> и <цена товара> это значения переменных 
// productName и pricePerItem. Используй синтаксис шаблонных строк.

const productName = "Droid";
const pricePerItem = 3500;

// Change code below this line
 const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;

//  Задание 6
// Магазин по продаже ремонтных дроидов готов к открытию, 
// осталось написать скрипт для их заказа.Объяви переменные и присвой им соответствующие значения:
// pricePerDroid - цена одного дроида, значение 800
// orderedQuantity - количество дроидов в заказе, значение 6
// deliveryFee - стоимость доставки, значение 50
// totalPrice - общая сумма заказа к оплате, не забудь о стоимости доставки
// message - сообщение о состоянии заказа в формате 
// "You ordered droids worth <total price> credits. Delivery (<delivery fee> credits) is included in total price."

const pricePerDroid = 800;
const orderedQuantity = 6;
const deliveryFee = 50;
const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
console.log (totalPrice);
const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`


// Задание 7
// Объяви функцию sayHi, внутри которой добавь console.log() со строкой "Hello, this is my first function!".
// После объявления вызови функцию sayHi.

function sayHi() {
  console.log("Hello, this is my first function!")
}
sayHi();

// Задание 8
// Функция add должна уметь складывать три числа и выводить результат в консоль.
// Добавь функции add три параметра a, b и c, которые будут получать значения аргументов при её вызове.

// Дополни console.log() так, чтобы он логировал строку "Addition result equals <result>",
//     где < result > это сумма переданных чисел.

function add(a,b,c) {
  console.log(`Addition result equals ${a+b+c}`);
  // Change code above this line
}

add(15, 27, 10);
add(10, 20, 30);
add(5, 10, 15);

// Задание 9
// Дополни код функции add так, 
// чтобы она возвращала результат сложения значений трёх параметров a, b и c.

function add(a, b, c) {
    
 return a + b + c;
}

add(2, 5, 8); // 15

console.log(add(15, 27, 10));
console.log(add(10, 20, 30));
console.log(add(5, 10, 15));

// Задание 10
// Функция makeMessage(name, price) составляет и возвращает сообщение о покупке.
// Она объявляет два параметра, значения которых будут задаваться во время её вызова.

// name - название товара
// price - цена товара
// Дополни код функции так, чтобы в переменную message записывалась
// строка "You picked <product name>, price per item is <product price> credits",
//   где < product name > и < product price > это значения параметров name и price.
// Используй синтаксис шаблонных строк.


   const message =`You picked ${name}, price per item is ${ price} credits` ;
  // Change code above this line
  return message;
};

name = "product name";
price = "product price";
  
// Задание11
// Функция calculateTotalPrice считает и возвращает общую сумму покупки.
// Она принимает два параметра, значения которых будут задаваться во время
// её вызова.

// orderedQuantity - количество единиц товара в заказе;
// pricePerItem - цена одной единицы товара.
// Дополни код функции так, чтобы в переменную totalPrice
// записывалась общая сумма покупки, результат умножения кол - ва
// оваров на цену одного.


 function calculateTotalPrice (orderedQuantity, pricePerItem) {
  // Change code below this line
  const totalPrice =orderedQuantity*pricePerItem ;

  // Change code above this line
  return totalPrice;
};

calculateTotalPrice (5, 100);
console.log(calculateTotalPrice(5, 100));

/ Задание12
// Функция makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee)
// составляет и возвращает сообщение о покупке ремонтных дроидов.
// Она объявляет три параметра, значения которых будут задаваться во время её вызова.

// orderedQuantity - количество дроидов в заказе
// pricePerDroid - цена одного дроида
// deliveryFee - стоимость доставки
// Дополни код функции так, чтобы она возвращала сообщение о заказе в
// формате "You ordered droids worth <total price> credits. Delivery 
//     (<delivery fee> credits) is included in total price.".
//     Не забудь о цене доставки при вычислениях общей стоимости.

function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
  // Change code below this line

const message = `You ordered droids worth ${orderedQuantity*pricePerDroid+deliveryFee} credits. Delivery (${deliveryFee} credits) is included in total price.`

  // Change code above this line
  return message;
}
makeOrderMessage(2, 100, 50);

// Задание 13
// Функция isAdult объявляет один параметр age(возраст),
//   значение которого будет задаваться во время её вызова.
// Присвой переменной passed выражение проверки возраста пользователя
// на совершеннолетие.Человек считается совершеннолетним в
// возрасте 18 лет и старше.

function isAdult(age) {
  // Change code below this line
  const passed = age >= 18;

  // Change code above this line
  return passed;
}
console.log(isAdult(20));

Задание 14
Функция isValidPassword(password) проверяет равенство сохранённого и
введённого паролей и возвращает результат проверки - буль true или false.
Переменная SAVED_PASSWORD хранит значение ранее сохраненного пароля.
Введённый пароль передаётся в параметр password.

Присвой переменной isMatch выражение проверки равенства введённого и
сохранённого ранее паролей.Результатом выражения проверки должно быть true,
  если значения совпадают, и false, если нет.

  function isValidPassword(password) {
  const SAVED_PASSWORD = 'jqueryismyjam';
  // Change code below this line
  const isMatch = SAVED_PASSWORD === password;

  // Change code above this line
  return isMatch;
}
console.log(isValidPassword('jqueryismyjam'));//true
console.log(isValidPassword("mangodab3st"));//false

// Задание 15
// Добавь выражение проверки совершеннолетия пользователя,
//   значения параметра age, в условие для инструкции if.

// Если пользователь совершеннолетний, должен выполняться блок if и в
// переменную message записывается строка "You are an adult".
// В противном случае должен выполняться блок else и записывается строка
// "You are a minor".

function checkAge(age) {
  let message;

  if (age>=18) { // Change this line
    message = 'You are an adult';
  } else {
    message = 'You are a minor';
  }

  return message;
}

console.log(checkAge(20));

// Задание16
// Функция checkStorage(available, ordered) проверяет возможность оформления
// заказа и возвращает сообщение о результате.Она объявляет два параметра,
//   значения которых будут задаваться во время её вызова:

// available - общее количество товаров на складе
// ordered - единиц товара в заказе
// Используя ветвления дополни код функции так, что:

// Если в заказе указано число, превышающее количество товаров на складе,
//   в переменную message записывается строка "Not enough goods in stock!".
// В противном случае записывается строка "Order is processed, our manager 
// will contact you.".

function checkStorage(available, ordered) {
  let message;
  // Change code below this line
 if (available>=ordered) { // Change this line
    message = 'Order is processed, our manager will contact you.';
  } else {
    message = 'Not enough goods in stock!';
  }
  // Change code above this line
  return message;
}
console.log(checkStorage(100, 50));

// Задание17
// Замени выражения со стандартными математеческими
// операторами на комбинированный оператор присвоения
// с добавлением, вычитанием, умножением и делением.

let a = 5;
let b = 10;
let c = 15;
let d = 20;

// Change code below this line
a = a + 2;
b = b - 4;
c = c * 3;
d = d / 10;

// Change code below this line
a += 2;
b -= 4;
c *= 3;
d /= 10;

// Задание18
// Станция по продаже ремонтных дроидов готова к запуску,
//     осталось написать программное обеспечение для отдела
// продаж.

// Функция makeTransaction(pricePerDroid, orderedQuantity,
//     customerCredits) выполняет транзакцию по продаже дроидов
// и возвращает сообщение о результате операции.Она объявляет
// три параметра, значения которых будут задаваться во время
// её вызова:

// pricePerDroid - цена одного дроида
// orderedQuantity - кол-во заказанных дроидов
// customerCredits - сумма средств на счету клиента
// Дополни её следующим функционалом:

// Объяви переменную totalPrice для хранения общей суммы
// заказа и присвой ей выражение расчёта этой суммы.
// Добавь проверку сможет ли клиент оплатить заказ:
// если сумма к оплате превышает количество кредитов на счету
// клиента, запиши в переменную message строку "Insufficient 
// funds!";
// в противном случае, вычти сумму покупки со счёта клиента
// и запиши в переменную message сообщение: "You ordered 
//     < число > droids, you have < число > credits left".

function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
    let message;
    // Change code below this line
    const totalPrice = pricePerDroid * orderedQuantity;

    if (customerCredits >= totalPrice ) {

        message = `You ordered ${orderedQuantity} droids, you have ${customerCredits - totalPrice} credits left`;
    }
    else {
        message = `Insufficient funds!`;
        // Change code above this line
       
    }
    return message;   
}

console.log(makeTransaction(3000, 5, 23000));
console.log(makeTransaction(3000, 5, 15000));
console.log(makeTransaction(3000, 5, 5000));

// Задание19
// Функция checkPassword(password) получает пароль пользователя в параметр
// password, проверяет его на совпадение с паролем администратора в переменной
// ADMIN_PASSWORD и возвращает сообщение о результате сравнения, хранящееся в
// переменной message.

// Если значение параметра password равно null, значит пользователь отменил
// операцию и в message записывается строка "Canceled by user!".
// Если значение параметра password совпадает со значением ADMIN_PASSWORD,
//   в переменную message присваивается строка "Welcome!".
// Если ни одно из предыдущих условий не выполнилось, в переменную message
// записывается строка "Access denied, wrong password!".

function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  let message;

    if (password === null) { // Change this line
    message =  'Canceled by user!';
  } else if (password === ADMIN_PASSWORD) { // Change this line
    message = 'Welcome!';
  } else {
    message = 'Access denied, wrong password!';
  }

  return message;
}

console.log(checkPassword('password'));
console.log(checkPassword('jqueryismyjam'));
console.log(checkPassword(null));
console.log(checkPassword('mangohackzor'));

// Задание20
// Функция checkStorage(available, ordered) проверяет возможность оформления
// заказа и возвращает сообщение о результате.Она объявляет два параметра,
//   значения которых будут задаваться во время её вызова.

// available - доступное количество товаров на складе
// ordered - единиц товара в заказе
// Используя ветвления дополни код функции так, что:

// Если в заказе еще нет товаров, то есть значение параметра ordered равно 0,
//   в переменную message присваивается строка "There are no products in the order!".
// Eсли товаров в заказе больше чем доступно товаров на складе,
//   то в переменную message присваивается строка "Your order is too large, 
// there are not enough items in stock!".
// В противном случае в переменную message присваевается строка
// "The order is accepted, our manager will contact you".

function checkStorage(available, ordered) {
    let message;

    if (ordered === 0) {
    message = `There are no products in the order!`;
  }          
    
    else if (ordered > available) {
     message = `Your order is too large, there are not enough items in stock!`;
    }
        
    else {
      message = `The order is accepted, our manager will contact you`;
    }
  return message;
}


console.log(checkStorage(70, 0));
console.log(checkStorage(150, 200));
console.log(checkStorage(100, 50));




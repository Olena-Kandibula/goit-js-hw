// Метод includes()
// Метод includes(value) проверяет есть ли в массиве элемент
//  со значением value и возвращает true или false соответственно.
//   Область применения этого метода сводится к ситуациям, когда 
//   необходимо проверить есть ли элемент в массиве и не важна
//    его позиция (индекс).

// const planets = ["Earth", "Mars", "Venus"];

// console.log(planets.includes("Earth")); // true
// console.log(planets.includes("Mars")); // true
// console.log(planets.includes("Venus")); // true
// console.log(planets.includes("Jupiter")); // false


// Задание
// Функция checkFruit(fruit) принимает строку с названием 
// фрукта (параметр fruit), и проверяет есть ли такой фрукт 
// в массиве fruits.

// Дополни код функции так, что если:

// фрукт есть в массиве, то функция возвращает true;
// фрукта нет в массиве, то функция возвращает false.

function checkFruit(fruit) {

    const fruits = ["apple", "plum", "pear", "orange"];  

   return fruits.includes(fruit); 
  }
  console.log(checkFruit("mandarin"));//false
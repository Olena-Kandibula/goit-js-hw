// Задача: функция includes()
// Задание
// Напиши функцию includes(array, value), которая делает 
// тоже самое, что и метод массива массив.includes(значение)
//  - проверяет, есть ли в массиве array значение value,
//   возвращая true если есть и false в противном случае.

// При выполнении этой задачи в теле функции includes() 
// нельзя использовать метод массив.includes(значение).

function includes(array, value) {
    // Change code below this line
  for (const arr of array) {
    if (arr === value) {
    return true;}
  }
    return false;
    // Change code above this line
  }
  console.log (includes([1, 2, 3, 4, 5], 3));  //true
  console.log(includes([1, 2, 3, 4, 5], 17)); //false
// Оператор break vs return в функции
// Если цикл находится в теле функции, то оператор break 
// не прекращает выполнение функции, а только прервёт цикл. 
// Для того чтобы прерывать выполнение сразу цикла и функции 
// есть оператор return.

// В примере ищем число 3. Как только выполнится условие 
// if, делаем возврат, который прервёт выполнение цикла и 
// функции.

// function fn() {
//   for (let i = 0; i <= 5; i += 1) {
//     console.log(i);

//     if (i === 3) {
//       console.log("Нашли число 3, делаем возврат, прерывая цикл и функцию");
//       return i;
//     }
//   }

//   // Этот console.log не выполнится
//   console.log("Лог после цикла в теле функции");
// }

// const result = fn();
// console.log("Лог после выхода из функции");
// console.lof(`Результат выполнения функции ${result}`);


// Задание
// Выполни рефакторинг функции findNumber(start, end, divisor)
//  так, чтобы она:

// возвращала первое число от start до end, которое делится 
// на divisor без остатка
// не использовала оператор break
// не использовала переменную number

function findNumber(start, end, divisor) {
    // Change code below this line
    let number;
  
    for (let i = start; i < end; i += 1) {
      if (i % divisor === 0) {
        number = i;
        break;
      }
    }
  
    return number;
    // Change code above this line
  }

//   ==== without break and number 

function findNumber(start, end, divisor) {
    
    for (let i = start; i < end; i += 1) {
      if (i % divisor === 0) {      
        return i;
      }
    } 
    
  }

  console.log(findNumber(8, 17, 3));
// Зачада: фильтрация массива чисел 2.0
// Задание
// Выполни рефакторинг функции filterArray(numbers, value) 
// заменив цикл for на for...of

// ======FOR  
// function filterArray(numbers, value) {
//     // Change code below this line
//     const filteredNumbers = [];
  
//     for (let i = 0; i < numbers.length; i += 1) {
//       const number = numbers[i];
  
//       if (number > value) {
//         filteredNumbers.push(number);
//       }
//     }
  
//     return filteredNumbers;
// }
//   console.log(filterArray([1, 2, 3, 4, 5], 3));// возвращает [4, 5]
    // Change code above this line
  

//   ======FOR OF  
function filterArray(numbers, value) {
        const filteredNumbers = [];
  
    for (let number of numbers) {
      const numberNew = number;
  
      if (numberNew > value) {
        filteredNumbers.push(numberNew);
      }
    }
  
    return filteredNumbers;
}
  console.log(filterArray([1, 2, 3, 4, 5], 3));//(2) [4, 5]
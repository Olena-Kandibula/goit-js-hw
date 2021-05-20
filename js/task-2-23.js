// Задача: фильтрация массива чисел
// Задание
// Напиши функцию filterArray(numbers, value), 
// которая принимает массив чисел (параметр numbers)
//  и возвращает новый массив, в котором будут 
//  только те элементы массива numbers, которые 
//  больше чем значение параметра value (число).

function filterArray(numbers, value) {
    // Change code below this line
 const numberNew = [];  
   for (let i = 0; i < numbers.length; i += 1) {   

     if (numbers[i] > value) { 
       
       numberNew.push(numbers[i]);
     }
   }
   return numberNew;
   // Change code above this line
 }
 console.log(filterArray([1, 2, 3, 4, 5], 3));//[4,5]
 console.log(filterArray([1, 2, 3, 4, 5], 4));//[5]
 console.log(filterArray([1, 2, 3, 4, 5], 5));//[ ]
 console.log(filterArray([12, 24, 8, 41, 76], 20));//[24,41,76]
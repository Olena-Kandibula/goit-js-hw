// Задание16
// Напиши функцию makeArray(firstArray, secondArray, maxLength) 
// для создания нового массива со всеми элементами двух исходных
//  firstArray и secondArray. Параметр maxLength содержит 
//  максимально допустимую длину нового массива.

// Если количество элементов нового массива больше maxLength, 
// функция должна вернуть копию массива длиной maxLength 
// элементов. В противном случае функция должна вернуть новый 
// массив целиком.

function makeArray(firstArray, secondArray, maxLength) {
    // Change code below this line
    let newArray = firstArray.concat(secondArray);  
    const newArrayLength = newArray.length;
   
     (newArrayLength > maxLength) ?
       newArray = newArray.slice(0, maxLength) :
     newArray = newArray.slice(0,maxLength);   
    
   
     return newArray;
}

console.log( makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4));//["Mango", "Poly", "Houston", "Ajax"]
console.log( makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3));//["Mango", "Ajax", "Chelsea"]
console.log( makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2));//["Earth", "Jupiter"]
 
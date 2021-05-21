// Метод push()

// Метод push() позволяет добавить один или несколько элементов 
// в конец массива, без необходимости указывать индексы 
// добавляемых элементов.

// const planets = ["Earth", "Mars", "Venus"];
// planets.push("Jupiter");
// planets.push("Saturn", "Uranus", "Neptune");

// console.log(planets); // ['Earth', 'Mars', 'Venus', 
// 'Jupiter', 'Saturn', 'Uranus', 'Neptune']


// Задание
// Дополни код функции createArrayOfNumbers(min, max) так, 
// чтобы она возвращала массив всех целых чисел от значения 
// min до max.

console.log('nambers111');

function createArrayOfNumbers(min, max) {
   const numbers = [];

      for(let i = 0; i < max-min+1; i+= 1) {     
 
          numbers[i] = min + i;
      }
   return numbers;
 
}
  console.log(createArrayOfNumbers(1, 3));//[1,2,3]
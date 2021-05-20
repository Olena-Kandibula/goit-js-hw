// Задача: чётные числа
// Задание
// Напиши функцию getEvenNumbers(start, end) которая возвращает 
// массив всех чётных чисел от start до end. Чётным считается
//  число которое делится 
// на 2 без остатка (10 % 2 === 0).

function getEvenNumbers(start, end) {
 
const evenNumber = [ ];
const evenNumberLength  = end - start; 

let number = start;

for (let i = 0; i <= evenNumberLength; i+=1 ) {   

if (number % 2 === 0) {
    evenNumber.push(number);   
}
number= number+1;

}
return evenNumber;

   }

   console.log(getEvenNumbers(2, 5));//[2,4]
// Задача: поиск самого длинного слова
// Задание
// Напиши функцию findLongestWord(string) которая принимает 
// произвольную строку состоящую только из слов разделённых 
// пробелом (параметр string) и возвращает самое длинное 
// слово в этой строке.

function findLongestWord(string) {
    // Change code below this line
  const arraySrting = string.split(' ');
  let longestWord = arraySrting[0];

  for (let i=0; i < arraySrting.length; i+=1 )  {
    if (longestWord.length < arraySrting[i].length) {
        longestWord = arraySrting[i];
    }
  }
  //console.log(mass);
  return longestWord;
    // Change code above this line
  }
  console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));//jumped
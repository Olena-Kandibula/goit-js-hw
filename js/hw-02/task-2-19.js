// Итерация по массиву
// Цикл for можно использовать для итерации по массиву, 
// то есть «перебрать» его поэлементно.

// const planets = ["Earth", "Mars", "Venus"];

// for (let i = 0; i < planets.length; i += 1) {
//   console.log(planets[i]);
// }
// Для доступа к элементам используется синтаксис
//  квадратных скобок массив[индекс], где индекс - это 
//  значение счётчика цикла от 0 и до последнего индекса 
//  массива, который на единицу меньше длины массива.

// Задание
// Дополни код цикла for так, чтобы он последовательно 
// логировал все элементы массива fruits.

const fruits = ['apple', 'plum', 'pear', 'orange'];

for (let i = 0; i < fruits.length; i += 1) {
  // Change this line
  const fruit = fruits[i]; // Change this line
  console.log(fruit);//apple
                    // plum
                    // pear
                    // orange
}

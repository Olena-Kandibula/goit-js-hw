
// Создание объекта
// Объекты позволяют описать и сгруппировать характеристики объектов реального 
// мира - пользователя, книги, продукта магазина, чего угодно. Объекты ещё
//  называют словарями, то есть они содержат термины (свойства) и их определения 
//  (значения).

// const book = {
//   title: "Последнее королевство",
//   author: "Бернард Корнуэлл",
//   genres: ["историческая проза", "приключения"],
//   public: true,
//   rating: 8.38,
// };
// Для объявления используются фигурные скобки {} - литерал объекта. При создании
//  объекту можно добавить свойства, каждое из которых описывается парами 
//  ключ:значение. Ключ ещё называют именем свойства и это всегда строка. 
//  Значением свойства могут быть любые типы: примитивы, массивы, объекты, були, 
//  функции и т. п. Свойства разделяются запятой.

// Задание  ==========   1   =====
// Присвой переменной apartment объект описывающий квартиру со следующими 
// характеристиками:

// imgUrl - фотография, значение "https://via.placeholder.com/640x480";
// descr - описание, значение "Spacious apartment in the city center";
// rating - рейтинг, значение 4;
// price - цена, значение 2153;
// tags - метаинформация, массив ["premium", "promoted", "top"].

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"], 
   
//    }
//    ;
//    console.log(apartment);//{imgUrl: "https://via.placeholder.com/640x480", descr: "Spacious apartment in the city center", rating: 4, price: 2153, tags: Array(3)}
//    //descr: "Spacious apartment in the city center"
//    //imgUrl: "https://via.placeholder.com/640x480"
//    //price: 2153
//   // rating: 4
//   // tags: (3) ["premium", "promoted", "top"]
//    console.log(apartment.price);//2153

// =====================   2  ===========================
// Вложенные свойства
// Значением свойства может быть другой объект. Это используется для хранения
//  вложенных и группированных данных.

// Например, статистика пользователя социальной сети состоит из количества 
// последователей, просмотров и лайков, и хранить эти данные удобнее всего 
// в виде объекта. Тоже самое с местоположением, отдельно страна и город.

// В будущем это можно будет использовать для поиска пользователей по 
// стране, городу, минимальному или максимальному количеству последователей 
// и т. д.

// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   location: {
//     country: "Jamaica",
//     city: "Ocho Rios",
//   },
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };


// Задание     ============  2  =========
// Дополни объект квартиры свойством owner, значением которого будет
//  объект с информацией о владельце. Добавь ему следующие свойства:

// name - имя владельца, значение "Henry";
// phone - телефон, значение "982-126-1588";
// email - почта, значение "henry.carter@aptmail.com".

// const apartment = {
//     imgUrl: 'https://via.placeholder.com/640x480',
//     descr: 'Spacious apartment in the city center',
//     rating: 4,
//     price: 2153,
//     tags: ['premium', 'promoted', 'top'],
//   	owner: {
//       name: "Henry",
//       phone: "982-126-1588",
//       email: "henry.carter@aptmail.com",
//     }
//   };

// =====================   3  ===========================

// Доступ к свойствам через точку
// Первый способ получить доступ к свойству объекта это синтаксис
//  обьект.ключ_свойства. Синтаксис «через точку» используется в большинстве
//   случаев и подходит тогда, когда мы заранее знаем имя (ключ) свойства к 
//   которому хотим получить доступ.

// На место обращения будет возвращено значение свойства с таким именем.
// Если в объекте нет свойства с таким именем, на место обращения вернётся 
// undefined.
// const book = {
//   title: "Последнее королевство",
//   author: "Бернард Корнуэлл",
//   genres: ["историческая проза", "приключения"],
//   public: true,
//   rating: 8.38,
// };

// const bookTitle = book.title;
// console.log(bookTitle); // "Последнее королевство"

// const bookGenres = book.genres;
// console.log(bookGenres); // ["историческая проза", "приключения"]

// const bookPrice = book.price;
// console.log(bookPrice); // undefined

// Задание =============
// Дополни код присвоив объявленным переменным выражения обращения к 
// соответствующим свойствам обьекта apartment.

// aptRating - рейтинг;
// aptDescr - описание;
// aptPrice - цена;
// aptTags - теги.

// const apartment = {
//     imgUrl: 'https://via.placeholder.com/640x480',
//     descr: 'Spacious apartment in the city centre',
//     rating: 4,
//     price: 2153,
//     tags: ['premium', 'promoted', 'top'],
//   };
  

//   const aptRating = apartment.rating;
//   const aptDescr = apartment.descr;
//   const aptPrice = apartment.price;
//   const aptTags = apartment.tags;
 
// 	console.log(aptRating)//4


// =====================   4  ===========================

// Доступ к вложенным свойствам
// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   location: {
//     country: "Jamaica",
//     city: "Ocho Rios",
//   },
//   hobbies: ["swiming", "music", "sci-fi"],
// };
// Для доступа к вложенным свойствам используется цепочка обращений «через 
// точку». Например, если необходимо получить значение страны пользователя, 
// записываем user.location.country, где user.location это обращение (путь) 
// к объекту в свойстве location, а user.locaton.country обращение к свойству 
// country в этом объекте. То есть, «точка» указывает следующую вложенность.

// const location = user.location;
// console.log(location); // Объект location

// const country = user.location.country;
// console.log(country); // "Jamaica"
// Если значение свойства это массив, то в нашем примере user.hobbies - 
// обращение к этому массиву. Далее, можно получить доступ к его элементам 
// через квадратные скобки и индекс или использовать свойства и методы.

// const hobbies = user.hobbies;
// console.log(hobbies); // ["swiming", "music", "sci-fi"]

// const firstHobby = user.hobbies[0];
// console.log(firstHobby); // "swiming"

// const numberOfHobbies = user.hobbies.length;
// console.log(numberOfHobbies); // 3


// Задание
// Дополни код присвоив объявленным переменным выражения обращения к 
// соответствующим свойствам обьекта apartment.

// ownerName - имя владельца;
// ownerPhone - телефон владельца;
// ownerEmail - почта владельца;
// numberOfTags - количество элементов массива в свойстве tags;
// firstTag - первый элемент массива в свойстве tags;
// lastTag - последний элемент массива в свойстве tags.

// const apartment = {
//     imgUrl: 'https://via.placeholder.com/640x480',
//     descr: 'Spacious apartment in the city centre',
//     rating: 4,
//     price: 2153,
//     tags: ['premium', 'promoted', 'top'],
//     owner: {
//       name: 'Henry',
//       phone: '982-126-1588',
//       email: 'henry.carter@aptmail.com',
//     },
//   };
  
//   // Change code below this line
//   const ownerName = apartment.owner.name;
//   const ownerPhone = apartment.owner.phone;
//   const ownerEmail = apartment.owner.email;
//   const numberOfTags = apartment.tags.length;
//   const firstTag = apartment.tags[0];
//   const lastTag = apartment.tags[numberOfTags-1];

//   console.log( ownerName);  
//   console.log( ownerPhone);
//   console.log( ownerEmail);
//   console.log( numberOfTags);
//   console.log( firstTag);
//   console.log( lastTag);

// =====================   5  ===========================
// Доступ к свойствам через квадратные скобки
// Второй способ получить доступ к свойству объекта это синтаксис 
// обьект["ключ_свойства"]. Похоже на обращение к элементу массива с
//  отличием в том, что в скобках указывается не индекс элемента, а
//   имя свойства как строка.

// Синтаксис «квадратных скобок» используется значительно реже. Как
//  правило в случаях когда имя свойства заранее неизвестно или оно 
//  хранится в переменной (как значение параметра функции, например).

// На место обращения будет возвращено значение свойства с таким именем.
// Если в объекте нет свойства с таким именем, на место обращения вернётся 
// undefined.

// const book = {
//   title: "Последнее королевство",
//   author: "Бернард Корнуэлл",
//   genres: ["историческая проза", "приключения"],
//   public: true,
//   rating: 8.38,
// };

// const bookTitle = book["title"];
// console.log(bookTitle); 
// // "Последнее королевство"

// const bookGenres = book["genres"];
// console.log(bookGenres); 
// // ["историческая проза", "приключения"]

// const propKey = "author";
// const bookAuthor = book[propKey];
// console.log(bookAuthor); 
// // "Бернард Корнуэлл"


// Задание
// Дополни код присвоив объявленным переменным выражения обращения к 
// соответствующим свойствам обьекта apartment используя синтаксис 
// «квадратных скобок».

// aptRating - рейтинг;
// aptDescr - описание;
// aptPrice - цена;
// aptTags - теги.

// const apartment = {
//     imgUrl: 'https://via.placeholder.com/640x480',
//     descr: 'Spacious apartment in the city centre',
//     rating: 4,
//     price: 2153,
//     tags: ['premium', 'promoted', 'top'],
//   };
  
//   // Change code below this line
//   const aptRating = apartment['rating'];
//   const aptDescr = apartment['descr'];
//   const aptPrice = apartment['price'];
//   const aptTags = apartment['tags'];

//   console.log(aptRating);//4
//   console.log(aptDescr);//Spacious apartment in the city centre
//  console.log( aptPrice);//2153
//   console.log(aptTags);//(3) ["premium", "promoted", "top"]


// =====================   6  ===========================
// Изменение значения свойства
// После того, как объект создан, значение его свойств можно изменить. 
// Для этого необходимо обратиться к ним по имени, например, «через точку», 
// и присвоить новое значение.

// const book = {
//   title: "Последнее королевство",
//   author: "Бернард Корнуэлл",
//   genres: ["историческая проза", "приключения"],
//   public: true,
//   rating: 8.38,
// };

// book.rating = 9;
// book.public = false;
// book.genres.push("драма");

// console.log(book.rating); // 9
// console.log(book.public); // false
// console.log(book.genres); // ["историческая проза", "приключения",
// "драма"]


// Задание
// Дополни код обновив значения свойств объекта apartment:

// цену в свойстве price на 5000;
// рейтинг квартиры в свойстве rating на 4.7;
// имя владельца во вложенном свойстве name на "Henry Sibola";
// массив тегов в свойстве tags добавив в конец строку "trusted".

// const apartment = {
//     imgUrl: 'https://via.placeholder.com/640x480',
//     descr: 'Spacious apartment in the city centre',
//     rating: 4,
//     price: 2153,
//     tags: ['premium', 'promoted', 'top'],
//     owner: {
//       name: 'Henry',
//       phone: '982-126-1588',
//       email: 'henry.carter@aptmail.com'
//     }
//   };
//   apartment.price = 5000;
//   apartment.rating = 4.7;
//   apartment.owner.name = "Henry Sibola";
//   apartment.tags.push("trusted");
//   console.log(apartment.tags)//(4) ["premium", "promoted", "top", "trusted"]

// =====================   7  ===========================
// Добавление свойств
// Операция добавления нового свойства после создания объекта ничем не 
// отличается от изменения значения уже существующего свойства. Если
//  при записи значения по имени, такого свойства в объекте нет, оно 
//  будет создано.

// const book = {
//   title: "Последнее королевство",
//   author: "Бернард Корнуэлл",
//   genres: ["историческая проза", "приключения"],
//   public: true,
//   rating: 8.38
// };

// book.pageCount = 836;
// book.originalLanguage = "en";
// book.translations = ["ua", "ru"];

// console.log(book.pageCount); // 836
// console.log(book.originalLanguage); // "en"
// console.log(book.translations); // ["ua", "ru"]
// Задание
// Добавь объекту apartment несколько новых свойств:

// area - площадь в квадратных метрах, число 60;
// rooms - количество комнат, число 3;
// location - местоположение квартиры, обьект со следующими 
// вложенными свойствами;
// country - страна, строка "Jamaica";
// city - город, строка "Kingston".

// const apartment = {
//     imgUrl: 'https://via.placeholder.com/640x480',
//     descr: 'Spacious apartment in the city centre',
//     rating: 4.7,
//     price: 5000,
//     tags: ['premium', 'promoted', 'top', 'trusted'],
//     owner: {
//       name: 'Henry Sibola',
//       phone: '982-126-1588',
//       email: 'henry.carter@aptmail.com'
//     }
//   };
  
//   apartment.area = 60;
//   apartment.rooms = 3;
//   apartment.location = {
//     country:"Jamaica",
//     city: "Kingston",
//   };
//   console.log(apartment);

// =====================   8  ===========================

// Короткие свойства
// Иногда, при создании объекта, значение свойства необходимо 
// взять из переменной или параметра функции с таким же именем, 
// как и само свойство.

// Синтксис в следующем примере слишком громоздкий, потому что
//  приходится дублировать имя свойства и имя переменной, в
//   которой хранится необходимое значение.

// const name = "Генри Сибола";
// const age = 25;

// const user = {
//   name: name,
//   age: age
// };

// console.log(user.name); // "Генри Сибола"
// console.log(user.age); // 25
// Синтаксис коротких свойств (shorthand properties) решает эту 
// проблему, позволяя использовать имя переменной как имя 
// свойства, а её значение как значение свойства.

// const name = "Генри Сибола";
// const age = 25;

// const user = {
//   name,
//   age
// };

// console.log(user.name); // "Генри Сибола"
// console.log(user.age); // 25
// То есть, при объявлении объекта достаточно указать только
//  имя свойства, а значение будет взято из переменной с аналогичным именем.

// Задание
// Дополни код объявления объекта так, чтобы у него были свойства name, 
// price, image и tags со значениями из переменных с аналогичными именами.
//  Обязательно используй синтаксис коротких свойств.

// const name = 'Repair Droid';
// const price = 2500;
// const image = 'https://via.placeholder.com/640x480';
// const tags = ['on sale', 'trending', 'best buy'];

// const product = {
   
//   price,
//   image, 
//   tags,
//   name

//   };

// console.log(product.price);//Repair Droid

// =====================   9  ===========================
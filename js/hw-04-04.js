
// ============  hw-04 ===========

// const pizzaPalace = {
//   pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
//   order(pizzaName, makePizza, onOrderError) {
//     for (const pizza of this.pizzas)
//       if (pizza === pizzaName) {
//         return makePizza(pizzaName);
//       };
      
//       return onOrderError(`В ассортименте нет пиццы с названием ${pizzaName}.`);
//   },
// };

// // Колбэк для onSuccess
// function makePizza(pizzaName) {
//   return `Ваш заказ принят. Готовим пиццу ${pizzaName}.`;
// }

// // Колбэк для onError
// function onOrderError(error) {
//   return `Ошибка! ${error}`;
// }

// // // Вызовы метода с колбэками
// console.log(pizzaPalace.order('Аль Копчино', makePizza, onOrderError));
// console.log(pizzaPalace.order('Четыре нарезона', makePizza, onOrderError));
// console.log(pizzaPalace.order('Биг майк', makePizza, onOrderError));
// console.log(pizzaPalace.order('Венская', makePizza, onOrderError));


// ============  hw-05 ===========

// Контекст вызова функции
// Внутри функций есть зарезервированное ключевое слово this.
// Во время исполнения функции, в this записывается ссылка на
// объект, в контексте которого она была вызвана.Таким
// образом, в теле функции мы можем получить доступ к
// свойствам и методам этого объекта.

// const bookShelf = {
//   authors: ['Бернард Корнуэлл', 'Роберт Шекли'],
//   getAuthors() {
//     return this.authors;
//   },
//   addAuthor(authorName) {
//     this.authors.push(authorName);
//   },
// };

// console.log(bookShelf.getAuthors()); // ['Бернард Корнуэлл', 'Роберт Шекли']
// bookShelf.addAuthor('Ли Танит');
// console.log(bookShelf.getAuthors()); // ['Бернард Корнуэлл', 'Роберт Шекли', 'Ли Танит']
// Методы getAuthors и addAuthor это функции,
//     которые вызываются в контексте объекта
// bookShelf.Во время их выполнения в this
// записывается ссылка на объект bookShelf и мы
// можем обратиться к его свойствам и методам.

// Задание
// Выполни рефакторинг методов объекта pizzaPalace,
//     расставив отсутствующие this в местах обращения
// к свойствам и методам объекта.

// const pizzaPalace = {
//   pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
//   // Пиши код ниже этой строки
//   checkPizza(pizzaName) {
//     return this.pizzas.includes(pizzaName);
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//       return `В ассортименте нет пиццы с названием «${pizzaName}».`;
//     }

//     return `Заказ принят, готовим пиццу «${pizzaName}».`;
//   },
//   // Пиши код выше этой строки
// };

// ============  hw-06 ===========

// Задача. Аккаунт пользователя
// Задание
// Перед увольнением разработчик сломал исходный код управления
// аккаунтами пользователей нашего сервиса доставки еды.Выполни рефакторинг
// методов объекта customer, расставив отсутствующие this при обращении к
// свойствам объекта.

// После объявления объекта мы добавили вызовы методов в той последовательности,
//     в которой твой код будут проверять тесты.Пожалуйста ничего там не меняй.

// const customer = {
//   username: 'Mango',
//   balance: 24000,
//   discount: 0.1,
//   orders: ['Burger', 'Pizza', 'Salad'],
//   // Пиши код ниже этой строки
//   getBalance() {
//     return this.balance;
//   },
//   getDiscount() {
//     return this.discount;
//   },
//   setDiscount(value) {
//     this.discount = value;
//   },
//   getOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost - cost * this.discount;
//     this.orders.push(order);
//   },
//   // Пиши код выше этой строки
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, 'Steak');
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ['Burger', 'Pizza', 'Salad', 'Steak']

// ============  hw-07 ===========

// Метод call
// Бывают ситуации когда функцию нужно вызвать в контексте какого-то объекта, при этом функция не является его методом. Для этого у функций есть методы call и apply.

// foo.call(obj, arg1, arg2, ...)
// Метод call вызовет функцию foo так, что в this будет ссылка на объект obj,
//     а также передаст аргументы arg1, arg2 и т.д.

// function greetGuest(greeting) {
//   console.log(`${greeting}, ${this.username}.`);
// }

// const mango = { username: "Манго" };
// const poly = { username: "Поли" };

// greetGuest.call(mango, "Добро пожаловать");
// // Добро пожаловать, Манго.

// greetGuest.call(poly, "С приездом");
// // С приездом, Поли.
// Задание
// Сервису приготовления и доставки еды требуется функция генерации сообщений о
// статусе заказа.

// Дополни функцию composeMessage(position) так, чтобы она возвращала строку в
// формате 'Готовим <блюдо> для <почта>. Ваш заказ <позиция>-й в очереди.'
// Позиция это значение параметра position - позиция элемента в массиве(на
//      единицу больше чем индекс).

// Не объявляй дополнительные параметры функции composeMessage(position).
// Используй call для вызова функции в контексте одного объекта-заказа.
// Используй this в теле функции для доступа к свойствам объекта - заказа в
// контексте которого она была вызывана.
// Дополни код так, чтобы в переменной messages получился массив сообщений
// о статусе заказов из массива orders с помощью цикла for.


// const orders = [
//   { email: 'solomon@topmail.ua', dish: 'Burger' },
//   { email: 'artemis@coldmail.net', dish: 'Pizza' },
//   { email: 'jacob@mail.com', dish: 'Taco' },
// ];

// // Пиши код ниже этой строки
// function composeMessage(position) {
//  return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position+1}-й в очереди.`;
// };

// const messages = [];
// for (let i = 0; i < orders.length; i += 1) {
//   messages.push(composeMessage.call(orders[i], i));
// };

// ============== hw- 04- 08 =====
// Метод apply
// Метод apply это аналог метода call за исключением того, что синтаксис
// передачи аргументов требует не перечисление, а массив, даже
// если аргумент всего один.

// foo.call(obj, arg1, arg2, ...)

// foo.apply(obj, [arg1, arg2, ...])
// Метод apply вызовет функцию foo так, что в this будет ссылка на объект obj,
//     а также передаст элементы массива как отдельные аргументы arg1,
//         arg2 и т.д.На практике, в основном используется метод call.

// function greetGuest(greeting) {
//   console.log(`${greeting}, ${this.username}.`);
// }

// const mango = { username: "Манго" };
// const poly = { username: "Поли" };

// greetGuest.apply(mango, ["Добро пожаловать"]); // Добро пожаловать, Манго.
// greetGuest.apply(poly, ["С приездом"]); // С приездом, Поли.
// Задание
// Выполни рефакторинг кода так, чтобы функция composeMessage(position)
// вызывалась методом apply.

// const orders = [
//   { email: "solomon@topmail.ua", dish: "Burger" },
//   { email: "artemis@coldmail.net", dish: "Pizza" },
//   { email: "jacob@mail.com", dish: "Taco" },
// ];

// // Пиши код ниже этой строки
// function composeMessage(position) {
//   return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`;
// }

// const messages = [];
// for (let i = 0; i < orders.length; i++) {
//   const msg = composeMessage.apply(orders[i], [i + 1]);
//   messages.push(msg);
// }

// ============== hw- 04- 09 =====

// Метод bind
// Методы call и apply вызывают функцию «на месте», то есть сразу.
// Но в случае колбэк - функций, когда необходимо не сразу вызвать функцию,
//     а передать ссылку на неё, причём с привязанным контекстом, используется метод bind.

// foo.bind(obj, arg1, arg2, ...)
// Метод bind создаёт и возвращает копию функции foo с привязанным
// контекстом obj и аргументами arg1, arg2 и т.д.Получается копия функции
// которую можно передать куда угодно и вызвать когда угодно.

// function greet(clientName) {
//   return `${clientName}, добро пожаловать в «${this.service}».`;
// }

// const steam = { service: 'Steam' };
// const steamGreeter = greet.bind(steam);
// steamGreeter('Манго'); // "Манго, добро пожаловать в «Steam»."

// const gmail = { service: 'Gmail' };
// const gmailGreeter = greet.bind(gmail);
// gmailGreeter('Поли'); // "Поли, добро пожаловать в «Gmail»."
// Задание
// Функция composeMessage(customerName) создаёт приветственные сообщения
// для ресторанов.Дополни код так, чтобы в переменных pizzaPalaceComposer
// и burgerShackComposer были её копии с привязанным контекстом к
// соответствующим объектам.

// const pizzaPalace = {
//   company: 'Pizza Palace',
// };

// const burgerShack = {
//   company: 'Burger Shack',
// };

// function composeMessage(customerName) {
//   return `${customerName}, всегда рады вас видеть в «${this.company}».`;
// }
// // Пиши код ниже этой строки

// const pizzaPalaceComposer = composeMessage.bind(pizzaPalace);
// const pizzaPalaceMessage = pizzaPalaceComposer('Манго');

// const burgerShackComposer = composeMessage.bind(burgerShack);
// const burgerShackMessage = burgerShackComposer('Поли');
// Тесты
// Объявлена переменная pizzaPalace.

// Значение переменной pizzaPalace это исходный объект.

// Объявлена переменная burgerShack.

// Значение переменной burgerShack это исходный объект.

// Объявлена функция composeMessage(customerName).

// Объявлена переменная pizzaPalaceComposer.

// Значение переменной pizzaPalaceComposer это копия функции composeMessage с контекстом привязанным к объекту pizzaPalace.

// Объявлена переменная pizzaPalaceMessage.

// Значение переменной pizzaPalaceMessage это строка 'Манго, всегда рады вас видеть в «Pizza Palace».'.

// Объявлена переменная burgerShackComposer.

// Значение переменной burgerShackComposer это копия функции composeMessage с контекстом привязанным к объекту burgerShack.

// Объявлена переменная burgerShackMessage.

// Значение переменной burgerShackMessage это строка 'Поли, всегда рады вас видеть в «Burger Shack».'.

// ============ hw - 04 - 10 =======
// Метод bind и методы объекта
// При передаче методов объекта как колбэк-функций, контекст не сохраняется. Колбэк это ссылка на метод, которая присваивается как значение параметра, вызываемого без объекта.

// const customer = {
//   firstName: 'Jacob',
//   lastName: 'Mercer',
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// function makeMessage(callback) {
//   // callback() это вызов метода getFullName без объекта
//   console.log(`Обрабатываем заявку от ${callback()}.`);
// }

// makeMessage(customer.getFullName); // Будет ошибка при вызове функции
// В строгом режиме, значение this в методе getFullName, при вызове
// как колбэк - функции callback(), будет undefined.При обращении к
// свойствам firstName и lastName будет ошибка, так как undefined это не объект.

// Метод bind используется для привязки контекста при передаче методов
// объекта как колбэк - функций.Передадим колбэком не оригинальный
// метод getFullName, а его копию с привязанным контекстом к объекту customer.

// // ❌ Было
// makeMessage(customer.getFullName); // Будет ошибка при вызове функции

// // ✅ Стало
// makeMessage(customer.getFullName.bind(customer)); // Обрабатываем заявку от Jacob Mercer.
// Задание
// Сервису рассылки электронной почты необходимо добавить
// логирование действий для сбора статистики.Функция
// logAndInvokeAction(email, action) ожидает почту и
// действие которое нужно выполнить - ссылку на метод
// объекта service.Сбор статистики симулируется логированием
// строки.Разберись и дополни код так, чтобы он работал верно.

// ============== было ==========
// const service = {
//   mailingList: ['mango@mail.com', 'poly@hotmail.de', 'ajax@jmail.net'],
//   subscribe(email) {
//     this.mailingList.push(email);
//     return `Почта ${email} добавлена в рассылку.`;
//   },
//   unsubscribe(email) {
//     this.mailingList = this.mailingList.filter((e) => e !== email);
//     return `Почта ${email} удалена из рассылки.`;
//   },
// };

// function logAndInvokeAction(email, action) {
//   console.log(`Выполняем действие с ${email}.`);
//   return action(email);
// }

// const firstInvoke = logAndInvokeAction('kiwi@mail.uk', service.subscribe);
// console.log(firstInvoke);
// // Почта kiwi@mail.uk добавлена в рассылку.

// console.log(service.mailingList);
// /* ['mango@mail.com', 
//     'poly@hotmail.de', 
//     'ajax@jmail.net', 
//     'kiwi@mail.uk']*/
// const secondInvoke = logAndInvokeAction('poly@hotmail.de', service.unsubscribe);
// console.log(secondInvoke);
// // Почта poly@hotmail.de удалена из рассылки.

// console.log(service.mailingList); // ['mango@mail.com', 'ajax@jmail.net', 'kiwi@mail.uk']
// // === стало -===============
// const service = {
//   mailingList: ['mango@mail.com', 'poly@hotmail.de', 'ajax@jmail.net'],
//   subscribe(email) {
//     this.mailingList.push(email);
//     return `Почта ${email} добавлена в рассылку.`;
//   },
//   unsubscribe(email) {
//     this.mailingList = this.mailingList.filter((e) => e !== email);
//     return `Почта ${email} удалена из рассылки.`;
//   },
// };

// function logAndInvokeAction(email, action) {
//   console.log(`Выполняем действие с ${email}.`);
//   return action(email);
// }

// const firstInvoke = logAndInvokeAction('kiwi@mail.uk', service.subscribe.bind(service));
// console.log(firstInvoke);
// // Почта kiwi@mail.uk добавлена в рассылку.

// console.log(service.mailingList);
// /* ['mango@mail.com', 
//     'poly@hotmail.de', 
//     'ajax@jmail.net', 
//     'kiwi@mail.uk']*/
// const secondInvoke = logAndInvokeAction('poly@hotmail.de', service.unsubscribe.bind(service));
// console.log(secondInvoke);
// // Почта poly@hotmail.de удалена из рассылки.

// console.log(service.mailingList); // ['mango@mail.com', 'ajax@jmail.net', 'kiwi@mail.uk']

// Выполняем действие с kiwi@mail.uk.
// Почта kiwi@mail.uk добавлена в рассылку.
// [
//   'mango@mail.com',
//   'poly@hotmail.de',
//   'ajax@jmail.net',
//   'kiwi@mail.uk'
// ]
// Выполняем действие с poly@hotmail.de.
// Почта poly@hotmail.de удалена из рассылки.
// [ 'mango@mail.com', 'ajax@jmail.net', 'kiwi@mail.uk' ]
// ©
// // ==

// Тесты
// Объявлена переменная service.
// Значение переменной service это оригинальный объект.
// Объявлена функция logAndInvokeAction(email, action).
// Переменной firstInvoke присвоена строка 'Почта kiwi@mail.uk добавлена в рассылку.'.
// Первый вызов logAndInvokeAction с почтой kiwi@mail.uk и методом service.subscribe привязан к объекту service.
// Переменной secondInvoke присвоена строка 'Почта poly@hotmail.de удалена из рассылки.'.
// Второй вызов logAndInvokeAction с почтой poly@hotmail.de и методом service.unsubscribe привязан к объекту service.


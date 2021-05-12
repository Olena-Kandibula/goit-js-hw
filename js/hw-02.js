// Задание1
// Запиши условие в инструкции if
//  так, чтобы функция работала правильно.

function checkAge(age) {
    if (age>=18) { // Change this line
      return "You are an adult";
    }  
    return "You are a minor";
  }
    
  console.log(checkAge(20));

//   Задание2
// Функция checkPassword получает пароль пользователя в параметр 
// password, проверяет его на совпадение с паролем 
// администратора в переменной ADMIN_PASSWORD и возвращает 
// сообщение о результате сравнения.

// Проведи рефакторинг кода функции checkStorage используя 
// паттерн «ранний возврат»:

// удали переменную message
// удали else
// код должен работать так же, как и до оптимизации

//====ДО
console.log( "Welcome!");

function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
 
  let message;

  if (password === ADMIN_PASSWORD) {
    message = "Welcome!";
  } else {
    message = "Access denied, wrong password!";
  }

  return message;  
}

console.log(checkPassword("mangohackzor"));
//====ПОСЛЕ

function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";   

  if (password === ADMIN_PASSWORD) {
    return "Welcome!";
  }   
  return "Access denied, wrong password!";
 
}

console.log(checkPassword("mangohackzor"));
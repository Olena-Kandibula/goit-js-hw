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
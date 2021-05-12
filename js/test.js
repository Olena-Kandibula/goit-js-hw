function checkForSpam(message) {
  let result;
  // Change code below this line
  result = message.toLowerCase().includes("sale".toLowerCase()) || message.toLowerCase().includes("spam".toLowerCase());;

   	 
  
  // Change code above this line
  return result;
}

console.log(checkForSpam("Amazing SalE, only tonight!"));
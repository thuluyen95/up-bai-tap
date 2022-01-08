

const operator = prompt('Enter operator ( either +, -, * or / ): ');
 let number1 = prompt('Enter number 1: ');
 let number2 = prompt('Enter number 2: ');
 number1 = parseInt(number1);
 number2 = parseInt(number2);

 let result;

 if (operator == "+") {
   result = number1 + number2;
 }
 else if (operator == "-") {
   result = number1 - number2;
 }
 else if (operator == "*") {
   result = number1 * number2;
 }
 else if (operator == "/") {
  result = number1 / number2;
 }

console.log(`${number1} ${operator} ${number2} = ${result}`);






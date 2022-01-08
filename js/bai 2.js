let number = prompt('Enter number: ');
number = parseInt(number);
let isPrime;

if (number < 2) isPrime = false;
let divisor = 2;
while (divisor < number) {
  isPrime = number % divisor != 0;
  if (!isPrime) break;
  divisor++;
}

if (isPrime) console.log("la so nguyen to");
else console.log("Khong la so nguyen to");

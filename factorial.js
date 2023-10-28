function calculateFactorial(n) {
    if (n < 0) {
      return "Invalid input. Factorial is not defined for negative numbers.";
    }
  
    if (n === 0 || n === 1) {
      return 1;
    }
  
    let factorialResult = 1;
    for (let i = 2; i <= n; i++) {
      factorialResult *= i;
    }
  
    return factorialResult;
  }
  
  const numberToCalculate = 5;
  const result = calculateFactorial(numberToCalculate);
  
  console.log(`The factorial of ${numberToCalculate} is: ${result}`);
  
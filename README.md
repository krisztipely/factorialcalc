# factorialcalc
This project provides a simple JavaScript function to calculate the factorial of a given non-negative integer. The calculateFactorial function takes an input n and returns the factorial, ensuring that the input is valid and handling edge cases.

## Features

**Input Validation:**

The function checks if the input is a non-negative integer. If the input is negative, an error message is returned, stating that the factorial is not defined for negative numbers.

**Factorial Calculation:**

For valid inputs (0 or positive integers), the function uses a loop to calculate the factorial iteratively.

## Usage Example:

The project includes an example that calculates the factorial of the number 5 and prints the result.
**Usage**
```
const numberToCalculate = 5;
const result = calculateFactorial(numberToCalculate);
console.log(`The factorial of ${numberToCalculate} is: ${result}`);
```
Simply replace numberToCalculate with your desired integer to calculate the factorial.

## Installation

Clone the repository to your local machine:
```
git clone https://github.com/krisztipely/factorialcalc.git
```
Navigate to the project directory:
```
cd factorialcalc
```
Open the factorial.js file in your preferred JavaScript environment and run the script.

## Customization

Feel free to modify the calculateFactorial function to suit your needs or integrate it into your existing projects.

## Future Enhancements

**Handling Larger Numbers:**
Extend the project to handle larger numbers more efficiently using techniques like memoization or BigInt for increased precision.

**Interactive Input:**
Incorporate user input to make the factorial calculator more interactive and versatile.

This "Factorial Calculator" is a handy tool for computing factorials in a straightforward manner. Use it as is or tailor it to meet your specific requirements.

## License
MIT 2023, Krisztina-Ronkainen Lakner

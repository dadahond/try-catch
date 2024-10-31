// Assignment-1: Write a program that prompts the user to enter a number and then divides that number by 10. If the user enters a non-numeric value or an invalid input, catch the error in the catch block and log "Invalid input" to the console. Regardless of the outcome, use the finally block to log "Program completed."

// Solution for Assignment 1

// try {
//     let num = prompt("Please, enter a number");
//     let result = Number(num) / 10;
//     if (isNaN(result)) {
//         throw new Error("You entered not a number");
//     }
//     console.log("Result:", result);
// } catch (error) {
//     console.log(error.message);
// } finally {
//     console.log("Program is completed.");
// }

// Assignment-2: Write a program that prompts the user to enter two numbers and then calculates and displays their sum. If the user enters anything other than numbers, handle the error in the catch block, and log "Both inputs must be numbers" to the console. Regardless of the result, log "Execution finished" in the finally block.

// Solution for Assignment 2

// try {
//     let numA = prompt("Please, enter number A");
//     let numB = prompt("Please, enter number B");
//     let result = Number(numA) + Number(numB);
//     if (isNaN(result)) {
//         throw new Error("Either input is invalid");
//     }
//     console.log("Result:", result);
// } catch (error) {
//     console.log(error.message);
// } finally {
//     console.log("Program completed");
// }

// Assignment-3: Write a program that prompts the user to enter two numbers and an arithmetic operation (+, -, *, or /). Perform the requested operation on the two numbers and display the result. If the user enters invalid numbers or an unsupported operation, catch the error and display a specific error message: "Invalid input: both values must be numbers" or "Unsupported operation" as appropriate. In the finally block, display "Calculation complete."

// Solution for Assignment 3

// try {
//     let numA = prompt("Please, enter number A");
//     let numB = prompt("Please, enter number B");
//     let oper = prompt("Please, enter +, -, *, or /");
//     let result;

//     switch (oper) {
//         case "+":
//             result = Number(numA) + Number(numB);
//             break;
//         case "-":
//             result = Number(numA) - Number(numB);
//             break;
//         case "*":
//             result = Number(numA) * Number(numB);
//             break;
//         case "/":
//             if (Number(numB) === 0) {
//                 throw new Error("Division by zero is not allowed.");
//             }
//             result = Number(numA) / Number(numB);
//             break;
//     }
//     if (isNaN(result)) {
//         throw new Error("Invalid input: both values must be numbers");
//     }

//     console.log("Result:", result);
// } catch (error) {
//     console.log(error.message);
// } finally {
//     console.log("Calculation complete");
// }
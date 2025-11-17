// function dateAndTime(params) {
//     var currentDate = new Date();
//     document.write("Current date and time: " + currentDate);
//     return currentDate;
// }
// dateAndTime();


// function greet() {
//     var firstname = prompt("Enter your firstname: ");
//     var lastname = prompt("Enter your lastname: ");
//     var fullname = firstname + " " + lastname;
//     document.write("Hello, " + fullname + "!");
// }
// greet();


// function addNumber() {
//     var num1 = parseInt(prompt("Enter first number: "));
//     var num2 = parseInt(prompt("Enter Second number: "));
//     var sum = num1 + num2;
//     document.write("The sum of " + num1 + " and " + num2 + " is: " + sum);
//     return sum;
// }
// addNumber();



// function calCulate() {
//     var num1 = parseInt(prompt("Enter First number: "));
//     var num2 = parseInt(prompt("Enter Second number: "));
//     var oprator = prompt("Enter oprator like + - / * : ");
//     switch (oprator) {
//         case "+":
//             console.log(num1 + num2);
//             break;
//         case "-":
//             console.log(num1 - num2);
//             break;
//         case "*":
//             console.log(num1 * num2);
//             break;
//         case "/":
//             console.log(num1 / num2);
//             break;
//     }
// }
// calCulate();


// function sqaure() {
//     var num = parseInt(prompt("Enter a number to find its square: "));
//     var square = num * num;
//     document.write("The square of " + num + " is: " + square);
//     return square;
// }
// sqaure();



function showNumber() {
    for (var i = 1; i <= 10; i++) {
        document.write(i + "<br>");
    }return;
}
showNumber();
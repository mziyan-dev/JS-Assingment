// ----------------------------------------20 to 25 chapter assignment----------------------------------------





//  var firstChar = firstName.charAt(0);

// //  Last character nikalna


// var lastChar = firstName.charAt(firstName.length - 1);

// //  Agar "!" character ho toh alert dikhana
// for (var i = 0; i < firstName.length; i++) {
//     if (firstName.charAt(i) === "!") {
//         alert("Exclamation point found in your name!");
//         break; // loop yahan stop ho jayega
//     }
// }

// // Result console me show karna
// console.log("First character: " + firstChar);
// console.log("Last character: " + lastChar);


// var firstName = prompt("Enter your first name:");
// var lastName = prompt("Enter your last name:");
// var fullName = firstName.concat(" ", lastName);

// alert("Hello, " + fullName + "!");


// var userFvrtPhone = prompt("Enter your favorite phone model:");
// var phoneLength = userFvrtPhone.length;

// alert("Your favorite phone model is: " + userFvrtPhone + "\nLength of the string: " + phoneLength);


// var str = "Pakistani";
// var indexOfn = str.indexOf("n");
// document.write("Index of 'n' in '" + str + "<br>' is: " + indexOfn);


// var str = "Hello world";
// var indexOfn = str.lastIndexOf("l");
// document.write("Index of l in " + str + "<br>' is: " + indexOfn);



// var str = "pakistani";
// var indexOfn = str.indexOf("i");
// document.write("Index of l in " + str + "<br>' is: " + indexOfn);



// var city = "Hyderabad";
// var replaceCity = city.replace("Hyder", "Islam");
// document.write("City Name : " + city + "<br>");
// document.write("After replacement: " + replaceCity);


// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var newmessage =message.replace(/and/g, "&");
// document.write(newmessage);

// var str = "472";
// var num = Number(str);

// document.write("value :"+ str+ "<br>");
// document.write("Type :"+ typeof str + "<br>");
// document.write("value :"+ num+ "<br>");
// document.write("Type :"+ typeof num + "<br>");


// var userInput = prompt("Enter any string:"); 
// var upperCaseInput = userInput.toUpperCase();
// document.write("User Input: " + userInput + "<br>");
// document.write("Uppercase: " + upperCaseInput);



// var userInput = prompt("Enter any string:"); 
// caseInput = userInput.charAt(0).toUpperCase() + userInput.slice(1).toLowerCase();
// document.write("User Input: " + userInput + "<br>");
// document.write("firstCaseInput: " + caseInput);


// var num = 35.36;

// var str = num.toString().replace(".", "");

// document.write("Number: " + num + "<br>");
// document.write("String: " + str);


// userNameInput = prompt("Enter your username:");

// for (var i = 0; i < userNameInput.length; i++) {
//     var charCode = userNameInput.charCodeAt(i);
//     if (charCode === 33 || charCode === 44 || charCode === 46 || charCode === 64) {
//         alert("Please enter a valid username without special characters (! , . @).");
//         break;
//     }
// }



// var item = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userSearch = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?").toLowerCase();
// var found = false;

// for (var i = 0; i < item.length; i++) {
//     if (item[i].toLowerCase() === userSearch) {
//         alert(userSearch + " is available at index " + i + " in our bakery.");
//         found = true;
//         break;
//     }
// }

// if (!found) {
//     alert("We are sorry. " + userSearch + " is not available in our bakery.");
// }


// var password = prompt("Enter your password:");
// var isValid = true;

// if (password.length < 6) {
//     isValid = false;
//     alert("Password must be at least 6 characters long.");
// }
// if (!isNaN(password.charAt(0))) {
//     isValid = false;
//     alert("Password should not start with a number.");
// }
// if (isValid) {
//     alert("Password is valid.");
// }

// var university = "University of Karachi";

// var chars = university.split('');

// for (var i = 0; i < chars.length; i++) {
//     document.write(chars[i] + "<br>");
// }   


// var str = "The quick brown fox jumps over the lazy dog";

// var count = (str.toLocaleLowerCase().match(/the/g) || []).length;

// document.write("Text: " + str + "<br>");
// document.write("There are " + count + " occurrence(s) of the word 'the'.");

// ----------------------------------------20 to 25 chapter assignment----------------------------------------
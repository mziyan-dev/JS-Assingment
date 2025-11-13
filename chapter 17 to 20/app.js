
// --------------------------------------------chapter 17 to 20 ----------------------------------------------------

// var arr = ["apple", "banana", "cherry"];

// for (let i = 0; i < 3; i++) {
//   if (arr === "banana") {
//     console.log("banana is fvrt");

//   }else{
//     console.log("this not ");

//   }


// }


// Check if a user's city is one of the cleanest cities
//  var cleanestCities = ["Cheyenne", "Santa Fe", "Tucson", "Great Falls", "Honolulu"];

//     // Ask user for their city
//     var cityToCheck = prompt("Enter your city:");

//     // Flag to check if match is found
//     var matchFound = false;

//     // Get the length of the array
//     var numElements = cleanestCities.length;

//     // Loop through the array
//     for (var i = 0; i < numElements; i++) {
//         if (cityToCheck === cleanestCities[i]) {
//             matchFound = true;
//             alert("It's one of the cleanest cities!");
//             break;  // Stop the loop after finding a match
//         }
//     }

//     // If no match was found
//     if (matchFound === false) {
//         alert("Sorry, your city is not on the list.");
//     }








// 1. Declare and initialize an empty multidimensional array. (Array of arrays)
// 2. Declare and initialize a multidimensional array representing the following matrix:

// var multiArr = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// document.write(multiArr[0][0]+ " " + multiArr[0][1]+ " " + multiArr[0][2], "<br>" )  ;
// document.write(multiArr[1][0]+ " " + multiArr[1][1]+ " " + multiArr[1][2], "<br>" )  ;
// document.write(multiArr[2][0]+ " " + multiArr[2][1]+ " " + multiArr[2][2], "<br>" )  ;




// 3. Write a program to print numeric counting from 1 to 10.

// for (let i = 1; i < 11; i++) {
//     console.log(i);


// }




// Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user.

// var table = +prompt("Enter a number to show its multiplication table");
// var length = +prompt( "Enter length of multiplication table");

// for (let i = 1; i <= length; i++) {
//     console.log(table + " x " + i + " = " + table * i);

// }



// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

// for (let i = 0;  i < fruits.length; i++) {
//     console.log(fruits[i]);




// }



// Generate the following series in your browser. See example output. a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19 e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

// var counting = "Counting: ";
// for (let i = 1; i <= 15; i++) {
//     document.write("  " + i + "<br>");

// }
// var reverseCounting = "Reverse Counting: ";
// for (let i = 10; i >= 1; i--) {
//     document.write("Reverse Counting: " + i + "<br>");
// }


// var even = "Even: ";
// for (let i = 0; i < 22; i += 2) {

//     document.write("  " + i + "<br>")
// }

// var odd = "Odd: ";
// for (let i = 1; i < 20; i += 2) {
//     document.write("  " + i + "<br>")
// }

// var series = "Series: ";
// for (let i = 2; i < 22; i += 2) {
//     document.write("  " + i + "k" + "<br>")
// }


// var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
// var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];
// var fullNames = [];
// var j = 0;


// for (let i = 0; i < firstNames.length; i++) {
//     for (j; j  < lastNames.length; j++) {
//         fullNames.push(firstNames[i] + lastNames[j]);
//         j++;
//         console.log(fullNames);
//         break;

//     }

// }


// var itemInput = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
// var items = ["cake", "apple pie", "cookie", "chips", "patties"]
// var itemFound = false;
// for (let i = 0; i < items.length; i++) {
//     if (itemInput == items[i]) {
//         itemFound = true;
//         alert(itemInput + " is available of index " + i + " in our bakery");
//         break
//     }
// }

// if (itemFound == false) {
//     alert("We are sorry. " + itemInput + " is not available in our bakery");
// }



// var largestNum = [24, 53, 78, 91, 12];
// var largest = largestNum[0];
// for (let i = 0; i < largestNum.length; i++) {
//     if (largestNum[i] > largest) {
//         largest = largestNum[i];
    
        
//     }
    
// }
// console.log("Largest number is: " + largest);



// var largestNum = [24, 53, 78, 91, 12];
// var largest = largestNum[0];
// for (let i = 0; i < largestNum.length; i++) {
//     if (largestNum[i] < largest) {
//         largest = largestNum[i];
    
        
//     }
    
// }
// console.log("The smallest number is: " + largest);


// var even = "Even: ";
// for (let i = 5; i < 101; i += 5) {

//     document.write("  " + i + "<br>")
// }
// ---------------------------Chaptyer 38 to 42 ----------------------- ///



//   var i = 0;

//   do {
//     console.log("The value of i is: " + i);
//     i++;
//   } while (i < 3);



//   var i = 0; // counter

//   while (i < 3) { // condition check
//    console.log("The value of i is: " + i);
//    // code block
//     i++; // counter increment
//   }



// function Calc(a , b) {
//     let power = a ** b;
//     console.log(power);
// }
// Calc(2,5);\\\


// function leapYear(year) {
//   if (year % 4 == 0) {
//     if (year % 100 == 0) {
//        if (year % 400 == 0) {
//         console.log("leap year");
        
//        } else{
//         console.log("not leap year");
        
//   }
//   }else{
//         console.log("not leap year");
//     }
   
// }else{
//         console.log("not leap year");
//     }
// }
// leapYear(2000);


// function calculateAverage(mark1, mark2, mark3) {
//     let average = (mark1 + mark2 + mark3) / 3;
//     return average;
// }

// function calculatePercentage(mark1, mark2, mark3) {
//     let percentage = ((mark1 + mark2 + mark3) / 300) * 100;
//     return percentage;
// }

// function mainFunction(mark1, mark2, mark3) {
//     let avg = calculateAverage(mark1, mark2, mark3);
//     let per = calculatePercentage(mark1, mark2, mark3);

//     console.log("Average: " + avg);
//     console.log("Percentage: " + per + "%");
// }

// mainFunction(55, 64,77);


// function custom(str,char) {
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] == char) {
//             return i;
//         }
//     }
//     return -1;  
// }
// console.log(custom("hello","o"));



// function removeVowel(Sentence) {
//     let newSentence = "";
//     for (let i = 0; i < Sentence.length; i++) {
//         if (Sentence[i] != "a" && Sentence[i] != "e" && Sentence[i] != "i" && Sentence[i] != "o" && Sentence[i] != "u") {
//             newSentence += Sentence[i];
//         }
//     }
//     return newSentence;
// }

// console.log(removeVowel("hello  world"));


// function doubleVowel(str) {
//     let count = 0
//     function isVowel(ch) {
//         switch (ch.toLowerCase()) {
//             case "a":
//             case "e":
//             case "i":
//             case "o":
//             case "u":
//             return true;
//             default:
//             return false;
             
//         }
     
//     }
//    for (let i = 0; i < str.length; i++) {
//             if (isVowel(str[i])) {
//                 count++;
//             }
//         }
//         return count;


// }
// console.log(doubleVowel("please read the book"));




// function tometer(km) {
//     return km * 1000
// }
// function tofeet(km) {
//     return km * 3280.84
// }
// function toinch(km) {
//     return km * 39370.1
// }
// function tocm(km) {
//     return km * 100000
// }

// function mainFunc() {
//     let km = 5
//     console.log("meter is " + tometer(km));
//     console.log("feet " + tofeet(km));
//     console.log("inch " + toinch(km));
//     console.log("cm " + tocm(km));
// }
// mainFunc();



// let hourWork = 60;
// function overTime() {
//     if (hourWork > 40) {
//         let extraHour = hourWork - 40;
//         let overTimePay = extraHour * 12;
//         console.log("over time pay is: "+overTimePay );
        
//     }else{
//         console.log("not Over time");
        
//     }
// }

// overTime();


// function notes() {
//     let amount = parseInt(prompt("enter amount"));
//     let hundreds = amount / 100;       
//     let remaining = amount % 100;      

//     let fifties = remaining / 50;
//     remaining = remaining % 50;

//     let tens = remaining / 10;


//     console.log("100 notes: " + hundreds.toFixed(0));
//     console.log("50 notes: " + fifties.toFixed(0));
//     console.log("10 notes: " + tens.toFixed(0));
// }
// notes()
// ---------------------------Chaptyer 38 to 42 ----------------------- ///

// -------------------------------------chapter 31 to 34-------------------------------------
// Task 1


// var currentDate = new Date();
// var currentTime = currentDate.getTime();
// var dateString = currentDate.toString();
// document.write("Current Date: " + dateString + "<br><br>");
// document.write ("The currnet time is: " + currentTime + "<br><br>");


// Task 2



// var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var currentDate = new Date();
// var currentMonthIndex = currentDate.getMonth();
// var currentMonthName = monthNames[currentMonthIndex];
// document.write("Current Month: " + currentMonthName + "<br><br>");


// var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
// var currentDate = new Date();
// var currentDayIndex = currentDate.getDay();
// var currentDayName = days[currentDayIndex];
// document.write("Today is: " + currentDayName + "<br><br>");




// var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
// var currentDate = new Date();
// var currentDayIndex = currentDate.getDay();
// var currentDayName = days[currentDayIndex];
// if (currentDayName === 'Sat' || currentDayName === 'Sun') {
//     document.write("It's Fun day<br><br>");
// }else{
//     alert("It's working day");
// }

// var currentDate = new Date();
// var currentDay = currentDate.getDate();

// if (currentDay <= 15){
//     document.write("First fifteen days of the month<br><br>");
// }else{
//     document.write("Last days of the month<br><br>");
// }


// var date = new Date();
// var millisecondsSinceEpoch = date.getTime();
// var minutesSinceEpoch = Math.floor(millisecondsSinceEpoch / (1000 * 60));
// document.write("Current Date: " + date + "<br><br>");
// document.write("Elapsed milliseconds since January 1, 1970: " + millisecondsSinceEpoch + "<br><br>");
// document.write("Elapsed minutes since January 1, 1970: " + minutesSinceEpoch + "<br><br>");


// var time = new Date();
// var currentHour = time.getHours();
// if (currentHour <= 12){
//     alert("It's AM");
// }else{
//     alert("It's PM");
// }

// var laterDate = new Date();
// var setDate = laterDate.setFullYear(2020, 11, 31);
// document.write("Later Date: " + laterDate + "<br><br>");



// var currentDate = new Date();
// var referenceDate = new Date (2015, 5, 18);
// var timeDifference = currentDate - referenceDate;
// var daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
// document.write(daysDifference + " days have passed since 1st Ramadan, 2015<br><br>");


//    assignmnet 6  ---------------------------------------

// var yearCalc = prompt("Enter your Birth Year:");
// var currentyear = new Date().getFullYear();
// var age = currentyear - yearCalc;
// document.write("Your age is: "  + age + "<br><br>");




// var monthCalc = prompt("Enter Your birth month :");
// var cuurrentdate = new Date();
// var currentmonth = cuurrentdate .getMonth() + 1;
// var age = currentmonth - monthCalc;
// document.write("your birthday month is: "  + age + "<br><br>");



// var dateCalc = prompt("Enter your birth Date :");
// var currentDate = new Date().getDate();
// var age = currentDate - dateCalc;
// document.write("Your Birthday is: "  + age + "<br><br>");




// var currentDate = new Date();
// var year = currentDate.getFullYear();
// currentDate.setFullYear(year - 100);
// document.write("Current Date: " + new Date() + "<br><br>");
// document.write("100 years back, it was: " + currentDate + "<br><br>");




// var ageCalc = prompt("Enter Your age:");
// var currentyear = new Date().getFullYear();
// var birthYear = currentyear - ageCalc;
// document.write("Your birth year is: "  + birthYear + "<br><br>");


// var userName = prompt("Enter your name:");
// var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var currentDate = new Date();
// var currentMonthIndex = currentDate.getMonth();
// var currentMonthName = monthNames[currentMonthIndex];


// var unitsConsumed = parseFloat(prompt("Enter number of units consumed:"));

// var unitPrice = parseFloat(prompt("Enter charge per unit:"));
// var chargePerUnit = unitPrice;
// var netAmountPayable = unitsConsumed * chargePerUnit;
// var latePayment = parseFloat(prompt("Enter late payment surcharge:"));
// var latePaymentSurcharge = latePayment;
// var grossAmountPayable = netAmountPayable + latePaymentSurcharge;



// document.write("<h2>K-Electric Bill</h2><br>");
// document.write("Customer Name: <strong>" + userName + "</strong><br>");
// document.write("Month: <strong>" + currentMonthName + "</strong><br>");
// document.write("Number of units: <strong>" + unitsConsumed.toFixed(1) + "</strong><br>");
// document.write("Charge per unit: <strong>" + chargePerUnit.toFixed(1) + "</strong><br><br>");
// document.write("Net Amount Payable (within Due Date): <strong>" + netAmountPayable.toFixed(2) + "</strong><br>");
// document.write("Late Payment Surcharge: <strong>" + latePaymentSurcharge.toFixed(2) + "</strong><br>");
// document.write("Gross Amount Payable (after Due Date): <strong>" + grossAmountPayable.toFixed(2) + "</strong><br>");




// -------------------------------------chapter 31 to 34  end  -------------------------------------
// ------------------------------------------------------Objects Started----------------------------------------------------------   /////









// var itemArr  = [
//     {name: "apple", price: 50, quentity: 3 },
//     {name: "cookie", price: 20, quentity:9 },
//     {name: "shirt”", price: 40, quentity:1 },
//     {name: "pen”", price: 70, quentity: 2},
    
// ]

// let result =document.getElementById("results");

// var grandTotal = itemArr.reduce(function(accumulator, item){
//     var total = item.price * item.quentity;
//     result.innerHTML += `<p>${item.name}: ${item.price} x ${item.quentity} = ${total}</p>`;
//     return accumulator + total;
// },0)
//  result.innerHTML += `<h2>Grand Total: ${grandTotal}</h2>`;





// var obj = { 
//     firstName : "John",
//     lastName  : "Doe",
//     age  : 25,
//     gender : "male",
//     city: "New York"
// };

// for (var key in obj) {
//     console.log(key + ": " + obj[key]);
// }

// for (var key in obj) {
//     if (key === "firstName") {
//         console.log("First Name mil gaya:", obj[key]);
//     }
// }
// for (var key in obj) {
//     if (key === "age") {
//         console.log("age mil gai: ", obj[key]);
//     }
// }
// for (var key in obj) {
//     if (key === "gender") {
//         console.log("gender mil gaya:", obj[key]);
//     }
// }

// if ("age" in obj) {
//     console.log("age property exist karti hai");
// }

// if (!("area" in obj)) {
//     console.log("area property exist nahi karti");
// }



// function Items(itemName, itemPrice, itemQuantity) {
//     this.name = itemName;
//     this.price = itemPrice;
//     this.quantity = itemQuantity;
// }

// var item1 = new Items("apple", 50, 3);
// var item2 = new Items("cookie", 20, 9);
// var item3 = new Items("shirt", 40, 1);
// var item4 = new Items("pen", 70, 2);




// function Person(name, gender, address, education, profession) {
// //   this.id = Date.now().toString(36) + Math.floor(Math.random()*1000); // simple unique id
//   this.name = name;
//   this.gender = gender;
//   this.address = address;
//   this.education = education;
//   this.profession = profession;
//   this.createdAt = new Date().toISOString();
// }
// let btn = document.getElementById("saveBtn");
// btn.addEventListener("click", SaveData);



// function SaveData() {
// let name = document.getElementById("name").value;
// let gender = document.querySelector('input[name="gender"]:checked').value;
// let education = document.getElementById("education").value;
// let profession = document.getElementById("profession").value;
// let address = document.getElementById("address").value;




// var person = new Person(name, gender, address, education, profession);
// let records = JSON.parse(localStorage.getItem("records")) || [];


// records.push(person);

// localStorage.setItem("records", JSON.stringify(records));

// console.log("Saved:", person);

// alert("Record Saved Successfully!");
// }

// localStorage.clear();   





// ------------------------------------------------------Objects Completed----------------------------------------------------------   /////
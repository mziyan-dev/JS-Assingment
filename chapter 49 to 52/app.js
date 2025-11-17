
// ----------CHAPTER 48 TO 52 -------------------------------------------------------       




// function submitForm(event) {
//     event.preventDefault();

//     // Read form values
//     let name = document.getElementById("name").value;
//     let email = document.getElementById("email").value;
//     let phone = document.getElementById("phone").value;

//     // Display on webpage
//     document.getElementById("display").innerHTML =
//         "Name: " + name + "<br>Email: " + email + "<br>Phone: " + phone;
// }





// let longText = "Slow lorises are a group of several species of strepsirrhine primates which make up the genus Nycticebus. They have a round head, narrow snout, large eyes, and a variety of distinctive coloration patterns that are species-dependent. The hands and feet of slow lorises have several adaptations that give them a pincer-like grip and enable them to grasp branches for long periods of time. Slow lorises have a toxic bite, a rare trait among mammals.";
// let shortText = "Slow lorises are a group of several species of strepsirrhine primates which make up the genus Nycticebus.";
// function expandText() {
//     document.getElementById("text").innerHTML = longText;

//     document.getElementById("readMoreBtn").style.display = "none";
//     document.getElementById("readLessBtn").style.display = "inline-block";
// }

// function collapseText() {
//     document.getElementById("text").innerHTML = shortText;

//     document.getElementById("readLessBtn").style.display = "none";
//     document.getElementById("readMoreBtn").style.display = "inline-block";
// }
























let editIndex = null;
document.getElementById("studentForm").addEventListener("submit", function(e) {
    e.preventDefault();
  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;
  let cls = document.getElementById("cls").value;
  let table = document.getElementById("tableBody");
  table.innerHTML += ` <tr>
    <td>${name}</td>
    <td>${age}</td>
    <td>${cls}</td>
    <td>
        <button onclick="editRow(this)">Edit</button>
        <button onclick="deleteRow(this)">Delete</button>
    </td>
</tr>`;
  document.getElementById("studentForm").reset();



})


function deleteRow(btn){
    let row =  btn.parentElement.parentElement
    row.remove();
}

function editRow(btn){
    let row = btn.parentElement.parentElement;
    editIndex = row;

    document.getElementById("editName").value = row.children[0].innerText;
    document.getElementById("editAge").value = row.children[1].innerText;
    document.getElementById("editCls").value = row.children[2].innerText;
    document.getElementById("editBox").style.display = "block";
}

function saveEdit(){
    editIndex.children[0].innerText = document.getElementById("editName").value;
    editIndex.children[1].innerText = document.getElementById("editAge").value;
    editIndex.children[2].innerText = document.getElementById("editCls").value;
    document.getElementById("editBox").style.display = "none";
}













// ----------CHAPTER 48 TO 52 ------------------------------------------------------- ///

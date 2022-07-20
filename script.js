var row = 1;
var chec = document.getElementById("entry");
var entry = document.getElementById("entry");
var gender1 = "";
entry.addEventListener("click", check);
function check() {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var email = document.getElementById("email").value;
    var city = document.getElementById("city").value;
    var phone = document.getElementById("phone").value;
    if(name.length==0 || age.length==0 || email.length==0 || city.length==0 || phone.length==0) {
        alert("all fields must be filled");
    } else {
        entry.addEventListener("click", displayDetails());
    }
}
function reset() {
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("email").value = "";
    document.getElementById("city").value = "";
    document.getElementById("phone").value = "";
}
function insertData() {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var email = document.getElementById("email").value;
    var city = document.getElementById("city").value;
    var phone = document.getElementById("phone").value;
    var display = document.getElementById("display");
    var newrow = display.insertRow(row);
    var cell1 = newrow.insertCell(0);
    var cell2 = newrow.insertCell(1);
    var cell3 = newrow.insertCell(2);
    var cell4 = newrow.insertCell(3);
    var cell5 = newrow.insertCell(4);
    var cell6 = newrow.insertCell(5);

    cell1.innerHTML = name;
    cell2.innerHTML = gender1;
    cell3.innerHTML = age;
    cell4.innerHTML = email;
    cell5.innerHTML = city;
    cell6.innerHTML = phone;
    row++;
    reset();
}
function displayDetails() {
    if (document.getElementById("M").checked == true) {
        gender1 = "M";
        insertData();
    } else if (document.getElementById("F").checked == true) {
        gender1 = "F";
        insertData();
    } else if (document.getElementById("O").checked == true) {
        gender1 = "O";
        insertData();
    } else {
        alert("Choose Gender");
    }  
}
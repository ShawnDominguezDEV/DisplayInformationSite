
var fn = document.getElementById("firstName");
var ln = document.getElementById("lastName");
var dob = document.getElementById("dateOfBirth");
var email = document.getElementById("email");
var password = document.getElementById("password");
var confPassword = document.getElementById("confPassword");


//document.getElementById("btnDisplay").addEventListener("click", displayResult());
//document.getElementById("btnClear").addEventListener("click", clearText());
document.getElementById("btnDisplay").onclick = function() {displayResult()};
document.getElementById("btnClear").onclick = function() {clearText();}


//Clear method is fully functional
function clearText(){
    document.getElementById("firstName").value = "";
    document.getElementById('lastName').value = "";
    document.getElementById('dateOfBirth').value = "";
    document.getElementById('email').value = "";
    document.getElementById('password').value = "";
    document.getElementById('confPassword').value = "";
    document.getElementById('result').textContent = "";
}

function displayResult() {
    if (password.value == confPassword.value) {
        var today = new Date();
        var todayYear = today.getFullYear();
        var birthDate = new Date(dob.value);
        var birthYear = birthDate.getFullYear();

        var age = todayYear - birthYear;
        document.getElementById("result").innerHTML = fn.value + " " + ln.value + ", your age is " + age + " and your email address is " + email.value + ".";
}
    else {
        document.getElementById('password').value = "";
        document.getElementById('confPassword').value = "";
        document.getElementById('password').focus();
        alert("The passwords do not match, please retry.");
    }
}

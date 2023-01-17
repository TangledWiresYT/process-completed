function checkAccessCode() {
    var accessCode = document.getElementById("codeInput").value;
    if (accessCode == "accesscode123") {
        window.location.href = "/part2.html";
    } else {
        document.getElementById("incorrectText").innerHTML = "Incorrect Access Code!";
    }
}
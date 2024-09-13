// Vooraf ingestelde gebruikersnaam en wachtwoord
const correctUser = "LucasA";
const correctPassword = "123";

function validateForm(event) {
    event.preventDefault();

    const user = document.forms["form1"]["user"].value;
    const password = document.forms["form1"]["password"].value;

    if (user === correctUser && password === correctPassword) {
        window.location.href = "../admin/admin.html";
    } else {
        document.getElementById("msg").textContent = "Incorrect username or password!";
        document.getElementById("msg").style.display = "block";
    }
}
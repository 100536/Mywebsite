// Vooraf ingestelde gebruikersnaam en wachtwoord
const correctUser = "LucasA";
const correctPassword = "Welkom123";

function validateForm(event) {
    event.preventDefault(); // Voorkom standaard formulierverzending

    // Haal de waarden van de invoervelden op
    const user = document.forms["form1"]["user"].value;
    const password = document.forms["form1"]["password"].value;

    // Controleer of de gebruikersnaam en wachtwoord correct zijn
    if (user === correctUser && password === correctPassword) {
        window.location.href = "../admin/admin.html";
    } else {
        document.getElementById("msg").textContent = "Incorrect username or password!";
        document.getElementById("msg").style.display = "block";
    }
}
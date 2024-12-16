// Vooraf ingestelde gebruikers (voorbeeld)
const user = [
    { username: "Test19", password: "Test123" },
];

// Functie die wordt aangeroepen bij het inloggen
function login() {
    const username = document.getElementById("Test19").value.trim();
    const password = document.getElementById("Test123").value.trim();
    const errorMessage = document.getElementById("error-message");


    // Als de gebruiker bestaat, stuur door naar dashboard.html, anders toon een foutmelding
    if (user) {
        // Verberg foutmelding
        errorMessage.style.display = "none";

        // Stuur door naar dashboard.html
        window.location.href = "dasboard.html";
    } else {
        // Toon foutmelding
        errorMessage.style.display = "block";
    }
}



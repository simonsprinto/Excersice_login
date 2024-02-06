function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("errorMessage");

    // Återställ felmeddelandet
    errorMessage.innerHTML = "";

    // Kontrollera om användarnamn och lösenord är korrekta
    if (username === "user" && password === "password") {
        // Vidarebefordra till inloggad-sida
        window.location.href = "loggedin.html";
    } else {
        // Visa felmeddelande om användarnamn eller lösenord är fel
        errorMessage.innerHTML = "Fel användarnamn eller lösenord. Försök igen.";
    }
}

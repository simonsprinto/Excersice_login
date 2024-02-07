function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("errorMessage");

    // Återställ felmeddelandet
    errorMessage.innerHTML = "";

    // Definiera användare med deras användarnamn och lösenord
    var users = [
        { username: "user1", password: "password1" },
        { username: "user2", password: "password2" },
        { username: "user3", password: "password3" }
    ];

    // Kontrollera om användarnamn och lösenord är korrekta för någon av användarna
    var validUser = users.find(function (user) {
        return user.username === username && user.password === password;
    });

    if (validUser) {
        // Vidarebefordra till inloggad-sida
        window.location.href = "loggedin.html";
    } else {
        // Visa felmeddelande om användarnamn eller lösenord är fel
        errorMessage.innerHTML = "Fel användarnamn eller lösenord. Försök igen.";
    }
}

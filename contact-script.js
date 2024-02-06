function submitForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;

    var successMessage = document.getElementById("successMessage");
    var errorMessage = document.getElementById("errorMessage");

    // Återställ meddelandena
    successMessage.innerHTML = "";
    errorMessage.innerHTML = "";

    // Kontrollera om alla fält är ifyllda
    if (name && email && message) {
        // Återställ formuläret
        document.getElementById("contactForm").reset();
        
        // Visa framgångsmeddelande
        successMessage.innerHTML = "Tack för ditt meddelande!";
    } else {
        // Visa felmeddelande om något fält inte är ifyllt
        errorMessage.innerHTML = "Vänligen fyll i alla obligatoriska fält (namn, e-post, meddelande).";
    }
}

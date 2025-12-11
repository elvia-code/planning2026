function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    // Identifiants factices
    if ((username === "elvia" && password === "1234") || (username === "second" && password === "1234")) {
        window.location.href = "acceuil.html";
    } else {
        message.textContent = "Pseudo ou mot de passe incorrect.";
    }
}

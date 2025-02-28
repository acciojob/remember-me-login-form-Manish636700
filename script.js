document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("#login-form");
    const submitButton = document.querySelector("#submit");
    const checkbox = document.querySelector("#checkbox");
    const usernameInput = document.querySelector("#username");
    const passwordInput = document.querySelector("#password");
    const existingUserButton = document.querySelector("#existing");

    // Check if credentials exist in localStorage
    const savedUsername = localStorage.getItem("username");
    const savedPassword = localStorage.getItem("password");
    const rememberMe = localStorage.getItem("rememberMe") === "true";

    if (rememberMe && savedUsername && savedPassword) {
        existingUserButton.style.display = "block"; // Show the button
    } else {
        existingUserButton.style.display = "none"; // Hide the button
    }

    // Load saved credentials if available
    if (rememberMe) {
        usernameInput.value = savedUsername;
        passwordInput.value = savedPassword;
        checkbox.checked = true;
    }

    submitButton.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent actual form submission

        const username = usernameInput.value;
        const password = passwordInput.value;

        if (username) {
            alert(`Logged in as ${username}`);
        }

        if (checkbox.checked) {
            localStorage.setItem("username", username);
            localStorage.setItem("password", password);
            localStorage.setItem("rememberMe", "true");
            existingUserButton.style.display = "block"; // Show the button
        } else {
            localStorage.removeItem("username");
            localStorage.removeItem("password");
            localStorage.removeItem("rememberMe");
            existingUserButton.style.display = "none"; // Hide the button
        }
    });

    // Existing user button functionality
    existingUserButton.addEventListener("click", function () {
        if (savedUsername) {
            alert(`Logged in as ${savedUsername}`);
        }
    });
});

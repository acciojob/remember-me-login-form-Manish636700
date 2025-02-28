document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("#login-form");
    const usernameInput = document.querySelector("#username");
    const passwordInput = document.querySelector("#password");
    const rememberMeCheckbox = document.querySelector("#checkbox");
    const existingUserButton = document.querySelector("#existing");

    // Check if credentials are stored in localStorage
    const savedUsername = localStorage.getItem("savedUsername");
    if (savedUsername) {
        existingUserButton.style.display = "block";
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const username = usernameInput.value;
        const password = passwordInput.value;
        const rememberMe = rememberMeCheckbox.checked;

        if (rememberMe) {
            localStorage.setItem("savedUsername", username);
        } else {
            localStorage.removeItem("savedUsername");
        }

        alert(`Logged in as ${username}`);
    });

    existingUserButton.addEventListener("click", function () {
        const savedUsername = localStorage.getItem("savedUsername");
        if (savedUsername) {
            alert(`Logged in as ${savedUsername}`);
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const username = document.getElementById("username");
    const password = document.getElementById("password");
    const submit = document.getElementById("submit");
    const exist = document.getElementById("existing");
    const rem = document.getElementById("checkbox");
    const login = document.getElementById("login-form");

    // Retrieve saved credentials
    const saveuser = localStorage.getItem("saveuser");
    const savepass = localStorage.getItem("savepass");

    // Show "Login as existing user" button if credentials exist
    if (saveuser && savepass) {
        exist.style.display = "block"; 
    }

    // Handle form submission
    login.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent form refresh

        const user = username.value.trim();
        const pass = password.value.trim();
        const rememberMe = rem.checked;

        if (user && pass) {
            alert(`Logged in as ${user}`);

            if (rememberMe) {
                localStorage.setItem("saveuser", user);
                localStorage.setItem("savepass", pass);
                alert("Credentials are stored in localStorage");
                exist.style.display = "block"; // Show button immediately
            } else {
                localStorage.removeItem("saveuser");
                localStorage.removeItem("savepass");
                alert("Credentials are not stored");
                exist.style.display = "none"; // Hide button if "Remember Me" not checked
            }
        }
    });

    // Handle "Login as existing user" button click
    exist.addEventListener("click", () => {
        alert(`Logged in as ${saveuser}`);
    });
});

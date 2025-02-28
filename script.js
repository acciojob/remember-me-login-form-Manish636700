document.addEventListener("DOMContentLoaded", () => {
    const username = document.getElementById("username");
    const password = document.getElementById("password");
    const submit = document.getElementById("submit");
    const exist = document.getElementById("existing");
    const rem = document.getElementById("checkbox");
    const login = document.getElementById("login-form");

    login.addEventListener("submit", (event) => {
        event.preventDefault(); 

        const user = username.value.trim();
        const pass = password.value.trim();
        const rememberMe = rem.checked;

        if (user && pass) {
            alert(`Logged in as ${user}`);

            if (rememberMe) {
                localStorage.setItem("saveuser", user);
                localStorage.setItem("savepass", pass);
                alert("Credentials are stored in localStorage");
                exist.style.display = "block"; 
            } else {
                localStorage.removeItem("saveuser");
                localStorage.removeItem("savepass");
                alert("Credentials are not stored");
                exist.style.display = "none"; 
            }
        }
    });


    exist.addEventListener("click", () => {
        alert(`Logged in as ${saveuser}`);
    });
});

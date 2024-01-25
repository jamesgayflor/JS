const username = document.getElementById("username");
const password = document.getElementById("password");
const login = document.getElementById("login");
// -----------------------------------------------
// -----------------------------------------------

login.addEventListener('click', () => {
    const username_value = username.value;
    const password_value = password.value;
    // ----------------------------
    if (username_value.trim() !== '' && password_value.trim() !== '') {
        alert("Done");
    }
    else {
        alert("Please enter Username or Password.");
    }
    // ----------------------------
});
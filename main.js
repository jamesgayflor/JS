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
        alert(`Username: ${username_value} \nPassword: ${password_value}`);
    }
    else {
        alert("Please enter Username or Password.");
    }
    // ----------------------------
});
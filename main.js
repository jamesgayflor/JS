const username = document.getElementById("username");
const password = document.getElementById("password");
const login = document.getElementById("login");

login.addEventListener('click', () => {
    const username_value = username.value;
    const password_value = password.value;
    // ----------------------------
    if (username_value.trim() !== '' && password_value.trim() !== '') {
        alert(`Username: ${username_value} \nPassword: ${password_value}`);
        window.location.href = 'https://www.facebook.com';
    }
    else {
        alert("Please enter Username or Password.");
    }
    // ----------------------------
});

// const fileM = require("node:fs");
// let file_location = "Information.txt";
// let file_content = "Username \nPassword";
// fileM.writeFile(file_location, file_content, "utf-8", (err) => {
//     if (err) {
//         return err;
//     }
//     console.log("Information Saved");
// });
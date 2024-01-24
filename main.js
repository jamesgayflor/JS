const fileM = require("node:fs");
let file_location = "Information.txt";
let file_content = "Username \nPassword";
fileM.writeFile(file_location, file_content, "utf-8", (err) => {
    if (err) {
        return err;
    }
    console.log("Information Saved");
});
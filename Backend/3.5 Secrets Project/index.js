//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from 'express';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
let isAuthorized = false;

app.use(bodyParser.urlencoded({ extended: true}));
function checkAuthorization(req, res, next) {
    isAuthorized = false;
    if (req.body?.password && req.body.password === 'ILoveProgramming') {
        isAuthorized = true;
    }
    next()
}

app.use(checkAuthorization)

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/public/index.html`);
});

app.post('/check', (req, res) => {
    if (isAuthorized) res.sendFile(`${__dirname}/public/secret.html`);
    // else res.sendFile(`${__dirname}/public/index.html`);
    else res.redirect('/')
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

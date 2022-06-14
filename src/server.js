'use strict';
require('dotenv').config();
let PORT = process.env.PORT || 3000;


const express = require('express');


const signUpRouter = require('./routes/signup');
const signInRouter = require('./routes/signin');
const notFoundHandler = require('./errorhandlers/404');
const errorHandler = require('./errorhandlers/500');


const app = express();
app.use(express.json());


app.use(signUpRouter);
app.use(signInRouter);

app.use('*', notFoundHandler);
app.use(errorHandler);


function start(PORT) {
    app.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`);
    });
}


module.exports = {
    app: app,
    start: start
};
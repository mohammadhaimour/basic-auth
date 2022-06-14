"use strict";
require('dotenv').config();
const server = require('./src/server');

let PORT = process.env.PORT || 3000;

const { db } = require('./src/models/index.model');


db.sync()
    .then(() => {
        server.start(PORT);
    }).catch(err => {
        console.log(err);
    }
    );
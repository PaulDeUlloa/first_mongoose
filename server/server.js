const express = require('express')
const app = express();


//! Must have this at the top to access the .env file.
require('dotenv').config();

//Imports the mongoose library 
const mongoose = require('mongoose');

// //extract variables from the .env
const dbName = process.env.DB;
const username = process.env.ATLAS_USERNAME;
const pw = process.env.ATLAS_PASSWORD;
const port = process.env.PORT


console.log (dbName,username,pw)




app.listen(port, () => console.log(`Server is up on port ${port}`))

// In any file that will use the Mongoose library, you will need to be sure to require it at the top of the file similar to this:

// const mongoose = require('mongoose');
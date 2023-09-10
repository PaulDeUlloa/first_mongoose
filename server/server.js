const express = require('express')
const app = express();


//! Must have this at the top to access the .env file.
require('dotenv').config();

const port = process.env.PORT;

require("./config/mongoose.config");

// app.use(express.json(), express.urlencoded({ extended: true }));
    
// const AllMyUserRoutes = require("./routes/user.routes");
// AllMyUserRoutes(app);


app.listen(port, () => console.log(`Server is up on port ${port}`))

// In any file that will use the Mongoose library, you will need to be sure to require it at the top of the file similar to this:

// const mongoose = require('mongoose');
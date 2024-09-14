const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");

const logger = require("./middleware/logger"); 

const app = express();

// env config
dotenv.config({path: "../.env"});

// Middleware
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 
app.use(logger); 

app.use(cors());


const todo = require("./routes/todo");

app.use("/api/v1/todo", todo);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

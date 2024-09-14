const path = require("path");
const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");

const logger = require("./middleware/logger");

const app = express();

// env config
dotenv.config({ path: "../.env" });

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger);

app.use(cors());

const todo = require("./routes/todo");

app.use("/api/v1/todo", todo);

const dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
  // set static  folder
  app.use(express.static(path.join(dirname, "/frontend/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(dirname, "frontend", "build", "index.html"));
  });
} else {
  app.get("/", function (req, res) {
    res.send("Server Started");
  });
}
console.log(`Starting server in ${process.env.NODE_ENV} mode`)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

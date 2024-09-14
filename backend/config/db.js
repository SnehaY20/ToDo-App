const { Sequelize } = require("sequelize");
require("dotenv").config();



const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: "postgres",
});

if (sequelize !== null || sequelize !== undefined) {
  console.log("Connected to DB Successfully");
} else {
  console.log("There was some problem connecting to DB ");
}
module.exports = sequelize;

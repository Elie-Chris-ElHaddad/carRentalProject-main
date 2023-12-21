require('dotenv').config()

const{Sequelize}=require("sequelize");

const sequelize = new Sequelize({
    dialect: "mysql",
    host: "localhost",
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  });
  
  sequelize
    .sync()
    .then(() => {
      console.log("Tables created.");
    })
    .catch((err) => {
      console.error("Error creating tables:", err);
    });
module.exports=sequelize;

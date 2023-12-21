const userRoute = require("./routes/user.route");
const RentalAgreementRoute = require("./routes/Rental_Agreement.route");
const carRoute = require("./routes/car.route");
const homeRoute = require("./routes/index.js");
const loginRoute = require('./routes/login.js');
const signupRoute = require('./routes/signup.js');
const exp = require("constants");
const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const bodyParser = require("body-parser");
const path = require("path");
const { config } = require("process");
const sequelize = require("sequelize");
const User  = require('./models/user');
const app = express();
require("dotenv").config();
app.use(express.json());
app.use(expressLayouts)
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views')
app.set('layout', 'layout/layout')
app.use("/api/user", userRoute);
app.use("/api/rentalAgreement", RentalAgreementRoute);
app.use("/api/car", carRoute);
app.use("/", homeRoute);
app.use('/login', loginRoute);
app.use('/signup', signupRoute);
// app.get("/", async (req, res) => {
// try {
// const data = {
// user: "Elio",
// title: "Manager",
// content: "Elio is your booking helper", 
// notification: 2555,
//  users:[],
// }
// Fetch users using the User model
// const users = await User.findAll();
// console.log(users);
// // Assign the fetched users to the data object
// data.users = users;
// // Render the 'index' view and pass the 'data' object to it
// res. render ("index", data);
// }catch (error) {
// console.log(error);
//   console.error("Error:", error);
// res. status (500). send ("An error occurred");
// }
// });


const PORT = process.env.PORT;
app.listen(PORT);
console.log(`Server started on ${PORT}`);


require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const flash = require("express-flash");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);

//DB CONNECTION

const url = "mongodb://localhost/pizza";
mongoose.connect(url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection
  .once("open", () => {
    console.log("Database Connected...");
  })
  .catch((err) => console.log("connection failed"));

const PORT = process.env.PORT || 5000;

//middlewares
app.use(
  session({
    secret: "sajjad haider",
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
  })
);

//body parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//routes

require("./routes/api")(app);

app.listen(PORT, () => console.log(`Listening on ${PORT}`));

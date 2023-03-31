if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3005;
const CLIENT_PORT = process.env.CLIENT_PORT;

app.use(express.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", 
    "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var whitelist = [CLIENT_PORT];
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not Allowed by CORS"));
    }
  },
};

app.use(
  cors({
    origin: corsOptions,
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
  })
);

app.use(bodyParser.urlencoded({ extended: true }));

const PackagesRoute = require("./routes/Package");
app.use("/package", PackagesRoute);
const AuthRoute = require("./routes/auth");
app.use("/auth", AuthRoute);

const UsersRoute = require("./routes/Users");
app.use("/users", UsersRoute);

app.listen(PORT, (req, res) => {
  console.log(`Server running on ${PORT}..`);
});

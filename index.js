const express = require('express');
const app = express();
const cors = require('cors')
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
//const session = require("express-session")
const PORT = process.env.PORT || 3005;

// const CLIENT_PORT = process.env.CLIENT_PORT
// const SECRET = process.env.SECRET

app.use((req, res, next) => {
   res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
    res.setHeader('Access-Control-Allow-Credentials', true); // If needed
   next();
 });

app.use(express.json())
app.use(cors({
 origin: '*',
   methods: ["GET", "POST","UPDATE", "DELETE", "PUT"],
   credentials: true,

}));
app.use(cookieParser())


app.use(bodyParser.urlencoded({ extended: true}))

const PackagesRoute = require('./routes/Package');
app.use('/package', PackagesRoute);
const imagesRoute = require('./routes/Package');
app.use('/images', imagesRoute);

const UsersRoute = require('./routes/Users');
app.use('/users', UsersRoute);

app.listen(PORT, (req, res) => {
   console.log(`Server running on ${PORT}..`)
});
const express = require('express');
const app = express();
const cors = require('cors')
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
//const session = require("express-session")
const PORT = process.env.PORT || 3005;

// const CLIENT_PORT = process.env.CLIENT_PORT
// const SECRET = process.env.SECRET
const server = require('http').createServer(app);
const io = require('socket.io')(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.use(express.json())
app.use(cors({
   'allowedHeaders': ['sessionId', 'Content-Type'],
   'exposedHeaders': ['sessionId'],
   'origin': 'https://shopping-react-firebase-app-front.vercel.app',
   'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
   'preflightContinue': false
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
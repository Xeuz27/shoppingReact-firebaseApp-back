const express = require("express");
const router = express.Router();

const db = require("../config/db");

router.get("/", (req, res) => {
  db.query("SELECT * FROM users;", (err, results) => {
    if (err) {
      console.log(err);
    }
    res.send({ results });
  });
});


router.post("/register", (req, res) => {
  const email = req.body.email;
  const id = req.body.id;
  const displayName = req.body.displayName;
  const signUpDate = req.body.signUpDate;
  const accountBalance = 0;
  db.query(
    "INSERT INTO users (email, userId, displayName, accountBalance, signUpDate) VALUES (?,?,?,?,?);",
    [email, id, displayName, accountBalance, signUpDate],
    (err, results) => {
      if (err) {
        console.log(err);
      }
      res.send({ results });
    }
  );
});

module.exports = router;

const express = require("express");
const router = express.Router();

const db = require("../config/db");

router.get("/", (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
    res.setHeader('Access-Control-Allow-Credentials', true); // If needed
  db.query("SELECT * FROM users;", (err, results) => {
    if (err) {
      console.log(err);
    }
    res.send({ results });
  });
});

router.post("/add", (req, res) => {
  const id = req.body.id;
  const displayName = req.body.displayName;

  db.query("SELECT * FROM users WHERE userId=?;", [id], (err, results) => {
    if (results.length < 1) {
      db.query(
        "INSERT INTO users (userId, displayName) VALUES (?,?);",
        [id, displayName],
        (error, resultados) => {
          if (error) {
            console.log(error);
            return res.status(500).send({ error });
          }
          res.status(200).send({ results: 200 });
          return;
        }
      );
    }
    if (results.length === 1) {
      return res.send({ results: 500 });
    }
  });
});

router.post("/register", (req, res) => {
  const email = req.body.email;
  const id = req.body.id;
  const displayName = req.body.displayName;
  db.query("SELECT * FROM users WHERE userId=?;", [id], (err, results) => {
    if (results.length < 1){
      db.query(
        "INSERT INTO users (email, userId, displayName) VALUE (?,?,?);",
        [email, id, displayName],
        (err, results) => {
          if (err) {
            console.log(err);
          }
          console.log('hizo el primer query')
          res.send({ results });
        }
      );
    }
    if (results.length === 1) {
      db.query("UPDATE users SET displayName = ?, email = ? WHERE userId=?;",[displayName, email, id], (err, results) =>{
        if(err){
          console.log(err)
        }
        res.send({results})
      })
    }
  }
  )






  
});

module.exports = router;

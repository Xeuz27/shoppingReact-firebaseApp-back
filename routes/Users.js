const express = require("express")
const router = express.Router()

const db = require('../config/db')

router.post("/", (req, res) => {
  const id = '789456123'
  const firstName = 'pepito '
  const lastName = 'perez'
  const email = 'pepitoperez@gmai9l.com'
  db.query(
  "INSERT INTO users (id,firstName,lastName,email) VALUES (?,?,?,?);",[id, firstName, lastName,email], (err, results) => {
    if (err) {
      console.log(err);
    }
    res.send({results})
  })
})

module.exports = router;
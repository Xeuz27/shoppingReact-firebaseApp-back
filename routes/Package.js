const express = require("express")
const router = express.Router()

const db = require('../config/db')

router.post("/", (req, res) => {
  const idOrder = req.body.idOrder
  const idUser = req.body.id;
  db.query(
  "SELECT * FROM packages WHERE idPackage=? AND idUser=?;",[idOrder, idUser], (err, results) => {
    if (err) {
      console.log(err);
    }
    res.send({results})
  })
})

module.exports = router;
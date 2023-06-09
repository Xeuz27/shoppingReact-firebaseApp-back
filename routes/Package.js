const express = require("express")
const router = express.Router()

const db = require('../config/db')

router.post("/", (req, res) => {
  const idOrder = req.body.idOrder
  const idUser = req.body.id;

  db.query(
  "SELECT `products`, `status` FROM packages WHERE idPackage=? AND idUser=?;",[idOrder, idUser], (err, results) => {
    if (err) {
      console.log(err);
    }
    res.send(results)
  })
})


router.post('/add', (req, res) => {
  const idOrder = req.body.orderId;
  const idUser =  req.body.id;
  const products = req.body.products;
  const status = req.body.status;
  productsstring = JSON.stringify(products)

    db.query(
      'INSERT INTO packages (idPackage, idUser, products, status) VALUES (?,?,?,?);',[idOrder, idUser, productsstring, status], (err, results) => {
        if (err) {
          console.log(err)
        }
        res.send({results})
      }
    )
})

module.exports = router;
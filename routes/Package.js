const express = require("express")
const router = express.Router()

const db = require('../config/db')

router.post("/", (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
    res.setHeader('Access-Control-Allow-Credentials', true); // If needed
  const idOrder = req.body.idOrder
  const idUser = req.body.id;

  db.query(
  "SELECT `products` FROM packages WHERE idPackage=? AND idUser=?;",[idOrder, idUser], (err, results) => {
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
  productsstring = JSON.stringify(products)

    db.query(
      'INSERT INTO packages (idPackage, idUser, products) VALUES (?,?,?);',[idOrder, idUser, productsstring], (err, results) => {
        if (err) {
          console.log(err)
        }
        res.send({results})
      }
    )
})

module.exports = router;
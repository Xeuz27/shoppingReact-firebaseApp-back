const express = require("express")
const router = express.Router()

const db = require('../config/db')

router.get("/users", (req, res) => {
db.query(
"SELECT * FROM users;", (err, results) => {
  if (err) {
    console.log(err);
  }
  res.send({results})
  })
})

router.post('/Client', (req, res)=> {
  const nombre = req.body.nombre;
  const cedula = req.body.cedula;
  const email = req.body.email;
  const telefono = req.body.telefono;
  db.query("INSERT INTO clientes (nombreCliente,cedulaCliente,emailCliente,telefonoCliente) VALUES (?,?,?,?);", [nombre,cedula,email,telefono],(err, results) =>{
    if (err){
      console.log(err)
    }
    res.send(results)
  })
})


router.post('/factura', (req, res)=> {
  const fecha = req.body.fecha
  const cart = req.body.cart
  const idFact = req.body.idFact
  cart.map(
    (producto) => db.query("INSERT INTO facturas (idFactura, idCliente, fecha, idProd, cantidadProd)VALUES (?,?,?,?,?);",[idFact, 1 ,fecha,producto.id, producto.quantity], (err,results) =>{
      if(err){
        console.log(err)
      }
    })
    )  
    res.send('compra realizada')
  })

router.get("/factura/:idFact", (req, res) => {
  const idFact = req.params.idFact
  let productos = [];
  
  db.query("SELECT facturas.idCLiente, facturas.fecha, facturas.idProd, facturas.cantidadProd, productos.nombreProducto, productos.precioProducto, clientes.nombreCliente, clientes.cedulaCliente FROM facturas INNER JOIN productos ON facturas.idProd = productos.idProducto INNER JOIN clientes ON facturas.idCLiente = clientes.idCliente WHERE idfactura=?;",[idFact], (err, results) => {
    if (err) {
      console.log('err',err);
    }
    console.log('results', results)

    res.send(results)
  });
})


 module.exports = router;
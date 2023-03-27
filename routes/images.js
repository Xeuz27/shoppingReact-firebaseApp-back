const express = require("express")
const router = express.Router()
const ImageKit = require("imagekit");
const multer = require("multer")
const upload = multer({ dest: "uploads/" })

var imagekit = new ImageKit({
    publicKey : 'public_rw5MD5lD1Lg+0TkL0gHzyJLMDbI=',
    privateKey : "private_Gc7eGWkVWLb2iaBqHw6gumtqK70=",
    urlEndpoint : "https://ik.imagekit.io/0oguwfou0i/"
});

router.post('/', (req, res) => {
    console.log(req.body)
    imagekit.upload({
        file : req.body.file, 
        fileName : "mytest1.jpg", 
        folder: 'product_images'  
    }).then(response => {
        console.log(response);
    }).catch(error => {
        console.log(error);
    });

}
)

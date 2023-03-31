const express = require("express")
const router = express.Router()

const ImageKit = require('imagekit');

const imagekit = new ImageKit({
  urlEndpoint: 'https://ik.imagekit.io/0oguwfou0i',
  publicKey: 'public_rw5MD5lD1Lg+0TkL0gHzyJLMDbI=',
  privateKey: 'private_Gc7eGWkVWLb2iaBqHw6gumtqK70='
});

router.get('/', function (req, res) {
    var result = imagekit.getAuthenticationParameters();
    res.send(result);
  });
 module.exports = router;
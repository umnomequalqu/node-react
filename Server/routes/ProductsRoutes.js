const router = require('express').Router()
const ProductController = require('../controllers/ProductController')

router.get('/',ProductController.getAll)

module.exports = router
const router = require('express').Router()

const {
  getSales,
  getSale,
  createSale
  } = require('./../controllers/controll-sales')

router.get('/sales', getSales)

router.get('/sales/:userId', getSale)

router.post('/sales', createSale)



module.exports = router
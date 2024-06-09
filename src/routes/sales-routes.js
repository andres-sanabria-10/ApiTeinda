const router = require('express').Router()

const {
  getSales,
  getSale,
  createSale,
  updateSale,
  deleteSale
  } = require('./../controllers/controll-sales')

router.get('/sales', getSales)

router.get('/sales/:id', getSale)

router.post('/sales', createSale)

router.put('/sales/:id', updateSale)

router.delete('/sales/:id', deleteSale)




module.exports = router
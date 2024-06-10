const router = require('express').Router()

const {
  getShoes,
  getShoeBrand,
  getShoeId,
  createShoe,
  updateShoe,
  deleteShoe
  } = require('./../controllers/controll-shoes')

router.get('/shoes', getShoes)

router.get('/shoesBrand/:brand', getShoeBrand)

router.get('/shoes/:id', getShoeId)

router.post('/shoes', createShoe)

router.put('/shoes/:id', updateShoe)

router.delete('/shoes/:id', deleteShoe)




module.exports = router
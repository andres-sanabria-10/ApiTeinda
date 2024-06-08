const router = require('express').Router()

const {
  getShoes,
  getShoe,
  createShoe,
  updateShoe,
  deleteShoe
  } = require('./../controllers/controll-shoes')

router.get('/shoes', getShoes)

router.get('/shoes/:id', getShoe)

router.post('/shoes', createShoe)

router.put('/shoes/:id', updateShoe)

router.delete('/shoes/:id', deleteShoe)




module.exports = router
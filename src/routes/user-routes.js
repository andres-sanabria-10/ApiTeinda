const router = require('express').Router()

const {
  getUsers,
  getUser,
  createUser,
  updateUser
  } = require('./../controllers/controll-user')

router.get('/users', getUsers)

router.get('/users/:id', getUser)

router.post('/users', createUser)

router.put('/users/:id', updateUser)


module.exports = router
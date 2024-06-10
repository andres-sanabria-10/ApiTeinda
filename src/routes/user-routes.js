const router = require('express').Router()

const {
  getUsers,
  createUser
  } = require('./../controllers/controll-user')

router.get('/users', getUsers)

router.post('/users', createUser)


module.exports = router
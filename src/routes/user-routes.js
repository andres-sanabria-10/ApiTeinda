const router = require('express').Router()

const {
  getUsers,
  createUser,
  deleteUser
  } = require('./../controllers/controll-user')

router.get('/users', getUsers)

router.post('/users', createUser)

router.delete('/users/:id', deleteUser)




module.exports = router
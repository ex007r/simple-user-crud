const { Router } = require('express')
const UserController = require('../controllers/UserController')

const router = Router()

router.get('/user', UserController.getAllUsers)
router.get('/user/:id', UserController.getUser)
router.post('/user/:firstName/:lastName/:age/:country/:city/:instagram/:facebook/:twitter/:linkedin/:active', UserController.createUser)
router.post('/user', UserController.createUserBody)
router.put('/user/:id', UserController.updateUser)
router.delete('/user/:id', UserController.deleteUser)

module.exports = router
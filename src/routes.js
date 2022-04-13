const express = require('express')
const router = express.Router()

const Auth = require('./middlewares/Auth')

const AuthController = require('./controllers/AuthController')
const UserController = require('./controllers/UserController')
const AdsController = require('./controllers/AdsController')

router.get('/api', (req, res) => {
  res.json({ Started: true })
})

router.get('/states', UserController.getStates)

router.post('/user/signin', Auth.private, AuthController.signin)
router.post('/user/signup', Auth.private, AuthController.signup)

router.get('/user/me', UserController.info)
router.put('/user/me', UserController.editAction)

router.get('/categories', AdsController.getCategories)

router.post('/ad/add', Auth.private, AdsController.addAction)
router.get('/ad/list', AdsController.getList)
router.get('/ad/item', AdsController.getItem)
router.post('/ad/:id', Auth.private, AdsController.editAction)

module.exports = router
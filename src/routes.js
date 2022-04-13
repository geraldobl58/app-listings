const express = require('express')
const router = express.Router()

const AuthController = require('./controllers/AuthController')
const UserController = require('./controllers/UserController')
const AdsController = require('./controllers/AdsController')

router.get('/api', (req, res) => {
  res.json({ Started: true })
})

router.get('/states', UserController.getState)

router.post('/user/signin', UserController.signin)
router.post('/user/signup', UserController.signup)

router.get('/user/me', UserController.info)
router.put('/user/me', UserController.editAction)

router.get('/categories', AdsController.getCategories)

router.post('/ad/add', AdsController.addAction)
router.get('/ad/list', AdsController.getList)
router.get('/ad/item', AdsController.getItem)
router.post('/ad/:id', AdsController.editAction)

module.exports = router
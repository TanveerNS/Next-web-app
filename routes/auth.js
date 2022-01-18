const express = require('express')
const router = express.Router()
//controllers
const { register, login, react } = require('../controllers/auth')

router.post('/register', register)

router.post('/react', react)

router.get('/reacts', (req, res)=>{
    res.json({ user: 'geek' })
})

router.post('/login', login)

module.exports = router;
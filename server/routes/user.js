const express = require('express')
const router = express.Router()


router.get('/users')
router.post('/change-status')
router.post('/change-role')


//สำหรับ cart
router.post('/user/cart')
router.get('/user/cart')
router.delete('/user/cart')


router.post('/user/address')

router.post('/user/order')
router.get('/user/order')



module.exports = router
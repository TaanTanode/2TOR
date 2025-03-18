const express = require('express')
const router  = express.Router()


//@ENDPOINT http://localhost:5000/api/product

router.post('/product')//เพิ่มสินค้า
router.get('/product/:id')//เวลากดแยกเข้าไปดูสินค้า แบบจากหน้ารวมสินค้าทั้งหมด
router.delete('/product/:id')//สินค้า
//sort สินค้า
router.post('/productby')
router.post('/search/filters')



module.exports = router
// exchange 积分兑换
const router = require('express').Router()

// 导入路由处理函数
const { exchange_core } = require('../controllers/exchange/exchange_handle')

router
  .get('/exchange_core', exchange_core)

module.exports = router

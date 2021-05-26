const router = require('express').Router()
// 导入路由处理函数
const {
  login
} = require('../controllers/login/index_handle')

router
  .post('/index', login)

module.exports = router


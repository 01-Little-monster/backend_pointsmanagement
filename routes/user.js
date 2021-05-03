const router = require('express').Router()

// 路由处理函数
const {
  user_register_handle
} = require('../controllers/user/user_register_handle')

// 注册用户
router
  .post('/register', user_register_handle)

module.exports = router

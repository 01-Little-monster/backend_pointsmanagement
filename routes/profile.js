const router = require('express').Router()
// 导入路由处理函数
const {
  index,
  admin,
  info,
  declare,
  login
} = require('../controllers/profile/profile_handle')

router
  .get('/index', index)
  .get('/admin', admin)
  .get('/info', info)
  .get('/declare', declare)
  .post('/login', login)

module.exports = router


const router = require('express').Router()
// 导入路由处理函数
const {
  index,
  admin,
  info,
  declare
} = require('../controllers/profile/profile_handle')

router
  .get('/index', index)
  .get('/admin', admin)
  .get('/info', info)
  .get('/declare', declare)

module.exports = router


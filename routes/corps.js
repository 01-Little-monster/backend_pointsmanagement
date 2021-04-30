const router = require('express').Router()
// 导入路由处理函数
const {
  users_operation,
  batch,
  integral_admin
} = require('../controllers/corps/corps_handle')

router
  .get('/users_operation', users_operation)
  .get('/batch', batch)
  .get('/integral_admin', integral_admin)

module.exports = router

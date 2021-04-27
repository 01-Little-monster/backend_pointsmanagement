const router = require('express').Router()

// 导入路由处理函数
const { index, activity, mission, prize } = require('../controllers/home/home')

router
  .get('/index', index)
  .get('/activity', activity)  // 活动
  .get('/mission', mission)    // 积分任务
  .get('/prize', prize)        // 奖品预告
module.exports = router

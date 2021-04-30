// 排行榜 ranking
const router = require('express').Router()

// 导入路由处理函数
const {
  ranking_day,
  ranking_week,
  ranking_month,
  ranking_year
} = require('../controllers/ranking/ranking_handle')

router
  .get('/ranking_day', ranking_day)
  .get('/ranking_week', ranking_week)
  .get('/ranking_month', ranking_month)
  .get('/ranking_year', ranking_year)

module.exports = router

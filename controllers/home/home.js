// home 的路由处理函数
const index = (req, res) => {
  res.send({
    message: '首页'
  })
}
const activity = (req, res) => {
  res.send({
    message: '活动展示'
  })
}
const mission = (req, res) => {
  res.send({
    message: '积分任务'
  })
}
const prize = (req, res) => {
  res.send({
    message: '奖品预告'
  })
}
module.exports = { index, activity, mission, prize }

const index = (req, res) => {
  res.send({
    message: [ '积分管理', '个人信息', '申报中心' ]
  })
}
const admin = (req, res) => {
  res.send({
    message: '积分管理'
  })
}
const info = (req, res) => {
  res.send({
    message: '个人信息'
  })
}
const declare = (req, res) => {
  res.send({
    message: '申报中心'
  })
}

module.exports = {
  index,
  admin,
  info,
  declare
}

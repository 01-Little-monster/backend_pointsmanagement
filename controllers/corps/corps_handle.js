const users_operation = (req, res) => {
  res.send({
    message: '注册？注销'
  })
}
const batch = (req, res) => {
  res.send({
    message: '审批'
  })
}
const integral_admin = (req, res) => {
  res.send({
    message: '积分管理'
  })
}

module.exports = {
  users_operation,
  batch,
  integral_admin
}

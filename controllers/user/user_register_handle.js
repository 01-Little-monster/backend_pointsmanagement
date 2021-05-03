const user_register_handle = (req, res) => {
  console.log(req.body)
  const data = req.body
  res.send({
    message: '注册用户',
    data
  })
}

module.exports = {
  user_register_handle
}

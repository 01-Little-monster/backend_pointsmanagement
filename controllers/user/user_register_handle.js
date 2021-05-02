const user_register_handle = (req, res) => {
  console.log(req.body)
  res.send({
    message: '注册用户'
  })
}

module.exports = {
  user_register_handle
}

// 导入用户集合 User
const User = require('../../model/user/user')
// 注册用户
const user_register_handle = async (req, res) => {
  console.log(req.body)
  const {
    user_id,
    user_name,
    user_email,
  } = req.body
  if(user_id && user_name && user_email) {
    const userId = await User.findOne({ user_id: user_id})
    const userName = await User.findOne({ user_name: user_name})
    const userEmail = await User.findOne({ user_email: user_email})
    if(userId) return res.status(409).send('该工号已存在')
    if(userName) return res.status(409).send('该用户名已存在')
    if(userEmail) return res.status(409).send('该邮箱已存在')
      const newUser = await new User(req.body).save()
      res.send({
        message: '注册用户成功',
        newUser
      })
  } else {
    res.send({
      message: '数据异常'
    })
  }
}

module.exports = {
  user_register_handle
}

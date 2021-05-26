const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../../model/user/user')

const login = async(req, res, next) => {
  const {
    user_id,
    user_password
  } = req.body
  try {
    if(!user_id) return res.status(422).send('登录失败，请输入工号！')

    const user = await User.findOne({ user_id: user_id})
    if(!user) {
      return res.status(422).send('该用户不存在')
    }
    // 解密
    if(!user_password) {
      return res.status(422).send('登录失败，请输入密码！')
    } else {
      let isPassword = await bcrypt.compareSync(user_password, user.user_password)
      if(!isPassword) {
        return res.status(422).send('密码错误！')
      } else {
        // 返回token 使用jwt标准
        const {
          _id, user_id, user_name, user_role } = user
          // secret 加密规则 'xiaoxiaoguai'
        const token = 'Bearer ' + jwt.sign({_id, user_id, user_name, user_role }, 'xiaoxiaoguai', {expiresIn:'24h'})
        res.send({
          message: '登录成功',
          token
        })
      }
    }
  } catch(error) {
    // 两种方式 抛出错误
    return res.status(500).send('登录失败，服务器发生错误！')
    // 第二种 将错误提交给错误处理中间件
    // const err = new Error(error)
    // next(err)
  }
}

module.exports = { login }

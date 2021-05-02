const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const { Schema, model } = mongoose
// const Schema = mongoose.Schema
// const model = mongoose.model
mongoose.set('useCreateIndex', true)
const UserSchema = new Schema({
  user_id: { type: String },
  user_name: { type: String },
  user_email: { type: String },
  user_password: { 
    type: String,
    // 加密
    set(val) {
      return bcrypt.hashSync(val, 10)
    }
  },
  user_role: { type: String, default: '0' }, // 身份：admin管理员， 1 -> 管理者，0 -> 普通用户
  user_department: { type: String }, // 部门
  user_state: { type: String, default: '0' }, // 当前用户状态 0 -> 在职，1 -> 离职
  user_integrals: { type: Number }, // 积分数量
  user_info: { type: String}, // 用户信息

})
const User = model('User', UserSchema, 'user')

module.exports = User

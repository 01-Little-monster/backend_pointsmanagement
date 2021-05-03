// 在需要接收文件上传的路由中引入 fileUpload
const multer = require('multer')
const storage = multer.diskStorage({
	destination: (req, file, cb) => {	
		cb(null, '../../public/uploads/')
	},
	filename: (req, file, cb) => {
		const tmp = path.extname(file.originalname)
		// 拼接上时间戳和随机数，再加上后缀名
		cb(null, `avatar_${ new Date().getTime() }-${ Math.random().toString().slice(2) }${ tmp }`)
	}
})
const fileUpload = multer({ storage })
module.exports = fileUpload

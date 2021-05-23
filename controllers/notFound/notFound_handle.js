module.exports = (req, res, next) => {
  // NotFound
  res.status(404).send("抛出错误：" + "NotFound")
}
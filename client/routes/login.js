const connection = require("../models/index.js");

module.exports = {
  async login(ctx, next) {
    let query = () => {
      return new Promise((resolve, reject) => {
        const sql = `SELECT * FROM user`;
        connection.query(sql, (err, result) => {
          const { username, password } = ctx.request.body;
          const res = result.find(item => item.username === username);
          if (res) {
            if (res.password === password) {
              resolve({ success: true, msg: "登录成功", data: res });
            } else {
              resolve({ success: false, msg: "密码错误" });
            }
          } else {
            resolve({ success: false, msg: "用户不存在" });
          }
        });
      });
    };
    let result = await query();
    ctx.body = result;
  }
};

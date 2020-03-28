const connection = require("../../models/index");

module.exports = {
  async getBossReleaseNews(ctx, next) {
    let query = () => {
      return new Promise((resolve, reject) => {
        const sql = `SELECT * FROM user_release_news`;
        connection.query(sql, (err, result) => {
          if (result) {
            resolve({ success: true, msg: "查询成功", data: result });
          } else {
            resolve({ success: false, msg: "查询失败" });
          }
        });
      });
    };
    let result = await query();
    ctx.body = result;
  }
};

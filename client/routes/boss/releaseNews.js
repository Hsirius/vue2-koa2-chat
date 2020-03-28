const connection = require("../../models/index");

module.exports = {
  async bossReleaseNews(ctx, next) {
    let query = () => {
      return new Promise((resolve, reject) => {
        const { user_id, title, content } = ctx.request.body;
        const sql = `INSERT INTO user_release_news (user_id, title, content) VALUES (${user_id},${title},${content})`;
        connection.query(sql, (err, result) => {
          if (result.affectedRows > 0) {
            resolve({ success: true, msg: "添加成功" });
          } else {
            resolve({ success: false, msg: "添加失败" });
          }
        });
      });
    };
    let result = await query();
    ctx.body = result;
  }
};

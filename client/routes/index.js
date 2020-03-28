const router = require('koa-router')()

module.exports = (app) => {
  router.post('/getUser', require('./login').login)
  //-------------------boss------------------
  router.post('/bossReleaseNews', require('./boss/releaseNews').bossReleaseNews)
  //-------------------niup------------------
  router.get('/getBossReleaseNews', require('./niup/getBossReleaseNews').getBossReleaseNews)

  app
    .use(router.routes())
    .use(router.allowedMethods())
}
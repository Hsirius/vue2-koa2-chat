const Koa = require("koa"),
  cors = require("koa2-cors");
bodyParser = require("koa-bodyparser");
const IO = require("koa-socket");

const router = require("./routes/index.js");

var app = new Koa();
const io = new IO();
io.attach(app);
app.use(bodyParser());

app.use(
  cors({
    origin: function(ctx) {
      ctx.set("Access-Control-Allow-Origin", "*");
    },
    exposeHeaders: ["WWW-Authenticate", "Server-Authorization"],
    maxAge: 5,
    credentials: true,
    allowMethods: ["GET", "POST", "PUT", "DELETE"],
    allowHeaders: ["Content-Type", "Authorization", "Accept"]
  })
);
router(app);
// connection.connect();

app._io.on("connection", socket => {
  console.log("建立连接了");
});

app.listen(3000, () => console.log("Koa start at 3000..."));

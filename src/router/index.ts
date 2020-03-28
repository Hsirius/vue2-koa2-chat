import Vue from "vue";
import VueRouter from "vue-router";

const Home = () => import("../views/Home.vue");
//-----------牛人----------
const Niup = () => import("../views/Niup.vue");
const Keyboard = () => import("../components/niup/Keyboard.vue");
const News = () => import("../components/niup/News.vue");
const Chat = () => import("../components/niup/Chat.vue");

//-----------boss----------
const Boss = () => import("../views/Boss.vue");
const ReleaseNews = () => import("../components/boss/ReleaseNews.vue");

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  //-----------牛人----------
  {
    path: "/niup",
    name: "niup",
    component: Niup,
    redirect: "/niup/keyboard",
    children: [
      {
        path: "keyboard",
        name: "keyboard",
        component: Keyboard,
        meta: {
          keepAlive: true
        }
      },
      {
        path: "news",
        name: "news",
        component: News
      }
    ]
  },
  {
    path: "/niup/chat/:id",
    name: "chat",
    component: Chat
  },
  //-----------boss----------
  {
    path: "/boss",
    name: "boss",
    component: Boss
  },
  {
    path: "/boss/releaseNews",
    name: "releaseNews",
    component: ReleaseNews
  }
];

//@ts-ignore
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

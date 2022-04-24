const Vue = require("vue"),
      VueResource = require("vue-resource"),
      VueJwtMongo = require("vue-jwt-mongo"),
      VueRouter = require("vue-router");

let App = require("../components/app.vue"),
    Login = require("../components/signin.vue"),
    Register = require("../components/reg.vue"),
    Index = require("../components/index.vue"),
    Feed = require("../components/feed.vue"),
    Upload = require("../components/upload.vue"),
    Profile = require("../components/profile.vue");
    //UserPost = require("../components/post.vue")


Vue.use(VueResource);
Vue.use(VueJwtMongo.Client);
Vue.use(VueRouter);

let router = new VueRouter({
  routes: [
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/', component: Index },
    { path: '/feed', component: Feed },
    { path: '/upload', component: Upload },
    { path: '/profile/:index', component: Profile },
    //{ path: '/feed/post/:index', component: UserPost}
  ]
})

let vm = new Vue({
  el: "#app",
  router: router,
  render: function(createElement) {
    return createElement(App)
  }
})

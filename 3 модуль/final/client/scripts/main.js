const Vue = require("vue"),
      VueResource = require("vue-resource"),
      VueJwtMongo = require("vue-jwt-mongo"),
      VueRouter = require("vue-router");

let App = require("../components/app.vue"),
    Login = require("../components/signin.vue"),
    Register = require("../components/reg.vue"),
    Index = require("../components/index.vue");


Vue.use(VueResource);
Vue.use(VueJwtMongo.Client);
Vue.use(VueRouter);

let router = new VueRouter({
  routes: [
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/', component: Index },
  ]
})

let vm = new Vue({
  el: "#app",
  router: router,
  render: function(createElement) {
    return createElement(App)
  }
})

const VueResource = require("vue-resource"),
    VueJwtMongo = require("vue-jwt-mongo"),
    Vue = require("vue"),
    App = require("../components/app.vue"),
    Login = require("../components/signin.vue"),
    Register = require("../components/reg.vue"),
    VueRouter = require("vue-router");


Vue.use(VueResource);
Vue.use(VueJwtMongo.Client);
Vue.use(VueRouter);

let router = new VueRouter({
    routes: [
        { path: '/login', component: Login },
        { path: '/register', component: Register },
    ]
})

let vm = new Vue({
    el: "#app",
    router: router,
    render: function(createElement) {
        return createElement(App)
    }
})
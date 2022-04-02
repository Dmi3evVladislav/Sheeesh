let Vue = require("vue"),
    VueRouter = require("vue-router"),
    App = require("../vue/app-task.vue");

Vue.use(VueRouter);

let vm = new Vue({
    el: "#root",
    render: function(createElement) {
        return createElement(App)
    }
});
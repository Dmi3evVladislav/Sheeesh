let $ = require("jquery"),
    App = require("../vue/app.vue"),
    Vue = require("vue"),
    VueRouter = require("vue-router"),
    Enlarger = require("../vue/enlarger.vue"),
    Reducer = require("../vue/reducer.vue");

Vue.use(VueRouter);

let router1 = new VueRouter({
    routes: [
        { path: "/add", component: Enlarger },
        { path: "/deduct", component: Reducer }
    ]
})

$("button").on("click", function(){
    $("body").css({"background-color": "rgb(48, 46, 46)"})
})

let vm = new Vue( {
    el: "#root",
    router: router1,
    render: function(createElement) {
        return createElement(App)
    }
});
let $ = require("jquery"),
    App = require("../vue/app.vue"),
    Vue = require("vue");

$("button").on("click", function(){
    $("body").css({"background-color": "rgb(48, 46, 46)"})
})

let vm = new Vue( {
    el: "#root",
    render: function(createElement) {
        return createElement(App)
    }
});
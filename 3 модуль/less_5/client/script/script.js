let vm = new Vue({
    el: "#app",
    data: {
        message: "instagram"
    }
});
let vmInput = new Vue({
    el: "#appinput",
    data: {
        message: "text"
    }
});
let vmCheck = new Vue({
    el: "#appcheck",
    data: {
        checked: true
    }
});
let vmRadio = new Vue({
    el: "#appradio",
    data: {
        picked: "Second"
    }
});
let vmSelect = new Vue({
    el: "#appselect",
    data: {
        language: "PHP"
    }
});
let vmExpression = new Vue({
    el: "#appexpression",
    data: {
        n: 1,
        checked: true,
        message: "sheesh"
    }
});
let vmGoogle = new Vue({
    el: "#appgoogle",
    data: {
        query: "Голый землекоп"
    }
});
let vmClass = new Vue({
    el: "#appclass", 
    data: {
        headerStyle: {
            purple: false,
            underline: false
        }
    }
});
let vmStyle = new Vue({
    el: "#apprange",
    data: {
        sizeFactor: "1"
    }
});
let sample = [
    { text: 'Foo'},
    { text: 'Bar'}
];
let vmArray = new Vue({
    el: "#apparray",
    data: {
        items: sample
    }
})
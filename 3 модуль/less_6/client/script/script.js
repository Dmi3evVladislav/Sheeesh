let vm = new Vue({
    el: "#app",
    data: {
        number: 1
    },
    methods: {
        double: function(event){
            console.log(event);
            this.number *= 2
        }
    },
});

let vmList = new Vue({
    el: "#app-list",
    data: {
        list: ["Сделать ДЗ"],
        thing: ""
    },
    methods: {
        addItem: function() {
            if(this.thing!=""){
                this.list.push(this.thing);
                this.thing = ""
            }
        },
        removeItem: function(index) {
            this.list.splice(index, 1)
        }
    },
})

let vmComputed = new Vue({
    el: "#app-computed",
    data: {
        selected: ["1","4"]
    },
    computed: {
        avarage: function() {
            let sum = 0
            for (let i = 0; i < this.selected.length; i++) {
                sum += Number(this.selected[i])
            }
            return sum / this.selected.length
        }
    },
});

let vmWatch = new Vue({
    el: "#app-watch",
    data: {
        number: 0,
        changeCount: 0,
    },
    methods: {
        decrease: function(){
            this.number -= 1
        },
        increase: function(){
            this.number += 1
        }
    }
})

vmWatch.$watch("number", function (newValue, oldValue) {
    console.log(newValue + " " + oldValue);
    this.changeCount +=1
})

vmIf = new Vue({
    el: "#app-if",
    data: {
        visible: true
    }
})
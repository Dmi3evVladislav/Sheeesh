<template>
        <div>
            <div>Alpha</div>
            <div>Beta</div>
            <c-tag></c-tag>
            <p><input type="text" v-model="msg"></p>
            <par-cap v-bind:p-text="msg" v-on:update="receive"></par-cap>

            <router-link to="/add">Увеличить</router-link>
            <router-link to="/deduct">Уменьшить</router-link>
            <div><router-view></router-view></div>
        </div>
</template>

<script>
    let Header = require("./header.vue");
    let ParCap = require("./par-cap.vue")
    module.exports = {
        data: function(){
            return {
                msg: "Laluga TOP"
            }
        },
        methods: {
            receive: function(value){
                this.msg = value;
            }
        },
        components: {
            cTag: Header,
            parCap: ParCap
        }
    }
</script>
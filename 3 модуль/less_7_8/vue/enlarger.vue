<template>
    <h1 v-on:mousemove="enlarge">
        {{ reference.value }}
    </h1>
</template>

<script>
let global = require("../script/global.js")
module.exports = {
    data: function(){
        return {
            reference: global
        }
    },
    methods: {
        enlarge: function(){
            this.reference.value +=1;
        }
    },
}

</script>
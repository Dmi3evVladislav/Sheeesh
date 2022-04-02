<template>
    <button v-on:click="reduce">{{ reference.value }}</button>
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
        reduce: function(){
            this.reference.value -=1;
        }
    },
}

</script>
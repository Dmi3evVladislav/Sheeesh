<template>
    <div>
        <div class="bguserpost">
            <a class="exitpostbutt" v-on:click="closepost()"><img src="./images/exitpostbutt.png" alt=""></a>
            <div class="userpost">
            </div>
        </div>
    </div>
</template>

<script>
let isopenpostglob = require("../scripts/global.js")
    module.exports = {
        data: function(){
            return {
                isopenpost: isopenpostglob.isopenpost
            }
        },
        methods: {
            closepost: function() {
            isopenpost = false
        }
        }
    }
</script>

<style scoped>
    .bguserpost {
        background-color: rgba(0, 0, 0, 0.445);
        z-index: 8000;
        position: fixed;
        width: 100%;
        height: 100%;
    }
     .exitpostbutt {
        margin-top: 20%;
        margin-left: 10%;
        position: fixed;
        z-index: 8500;
    }
</style>

<template>
    <div>
        <movie v-for="(item, $index) in movies" v-bind:name="item.name" v-bind:year="item.year" v-bind:poster-url="item.posterUrl"></movie>
    </div>
</template>

<script>
let Movie = require("./movie.vue");
let database = require("../script/database.js");

    module.exports = {
        data: function(){
            return {
                movies: database
            }
        },
        components: {
            movie: Movie
        }
    }
</script>

<style scoped>
    div {
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>

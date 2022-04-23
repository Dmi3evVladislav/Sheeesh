<template>
    <div>
        <navigator>

        </navigator>
        <button v-on:click="logout">Выйти</button>
        <navigator2>

        </navigator2>
    </div>
</template>

<script>
    module.exports = {
        methods: {
            logout: function(){
                this.$auth.logOut();
                this.$router.push('/')
            }
        },
        components: {
            navigator: require("./navigator.vue"),
            navigator2: require("./navigator2.vue")
        }
    }
</script>

<style scoped>
    
</style>
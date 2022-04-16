<template>
    <div>
        <button v-on:click="logout">Выйти</button>
    </div>
</template>

<script>
    module.exports = {
        methods: {
            logout: function(){
                this.$auth.logOut();
                this.$router.push('/')
            }
        }
    }
</script>
<template>
    <div>
        <form v-on:keydown.enter="signin">
            <input type="text" placeholder="Логин" v-model="login">
            <input type="password" placeholder="Пароль" v-model="password">
            <button v-on:click="signin">Войти</button>
            <router-link to="/register">Регистрация</router-link>
        </form>
    </div>
</template>

<script>
    module.exports = {
        data: function() {
            return {
                login: "",
                password: ""
            }
        },
        methods: {
            signin: function() {
                this.$auth.logIn(this.login, this.password)
                .then(function(){
                    console.log("Вошли!");
                })
            }
        },
    }
</script>
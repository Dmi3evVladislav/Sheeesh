<template>
    <div>
        <form v-on:keydown.enter="signin">
            <input type="text" v-model="login" placeholder="Логин">
            <input type="password" v-model="password"  placeholder="Пароль">
            <button v-on:click="signin">Войти!</button>
            <router-link to="/register">Регистрация</router-link>
            {{this.$auth.isLoggedIn()}}
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
                .then(function() {
                    console.log("Вошли!");
                }).catch(function(response) {
                    console.log("Ошибка "+ response);
                })
            }
        }
    }
</script>

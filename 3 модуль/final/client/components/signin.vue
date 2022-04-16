<template>
    <div>
        <form v-on:keydown.enter="signin">
            <input type="text" v-model="login" placeholder="Логин">
            <input type="password" v-model="password"  placeholder="Пароль">
            <button v-on:click="signin">Войти!</button>
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
                .then(function() {
                    this.$router.push("/");
                }).catch(function(response) {
                    console.log("Ошибка "+ response);
                })
            }
        }
    }
</script>

<style scoped>
form {
    margin-top: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
input {
    margin-top: 5px;
    margin-bottom: 5px;
    width: 200px;
    border-radius: 5px; 
    border: 0;
    outline: none !important;
    height: 30px;
    padding-left: 10px;
}
button {
    margin-top: 5px;
    background-color:blueviolet;
    border: 0;
    outline: none !important;
    border-radius: 3px;
    height: 30px;
    width: 200px;
}
</style>
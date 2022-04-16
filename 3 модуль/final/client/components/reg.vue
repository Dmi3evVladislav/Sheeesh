<template>
    <div id="regr">
        <form v-on:keydown.enter="registration">
            <input type="text" v-model="login" placeholder="Логин">
            <input type="password" v-model="password" placeholder="Пароль">
            <input type="password" v-model="passwordRepeat" placeholder="Повторите пароль">
            <button v-on:click="registration">Зарегистрироваться</button>
            <router-link to="/login">Войти</router-link>
        </form>
    </div>
</template>

<script>
    module.exports = {
        data: function() {
            return {
                login: "",
                password: "",
                passwordRepeat: ""
            }
        },
        methods: {
            registration: function() {
                if (this.password === this.passwordRepeat) {
                    let promise = this.$auth.register(this.login, this.password);
                    promise.then(function() {
                        this.$router.push("/login");
                    })
                }
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

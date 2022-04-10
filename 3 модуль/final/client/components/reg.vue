<template>
    <div>
        <form v-on:keydown.enter="registration">
            <input type="text" v-model="login" placeholder="Логин">
            <input type="password" v-model="password" placeholder="Пароль">
            <input type="password" v-model="passwordRepeat" placeholder="Повторите пароль">
            <button v-on:click="registration">Зарегистрироваться</button>
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

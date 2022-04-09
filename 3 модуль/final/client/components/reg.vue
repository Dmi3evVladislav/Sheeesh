<template>
    <div>
        <form v-on:keydown.enter="registration">
            <input type="text" placeholder="Логин" v-model="login">
            <input type="password" placeholder="Пароль" v-model="password">
            <input type="password" placeholder="Повторите Пароль" v-model="passwordRepear">
            <button v-on:click="registration">Зарегестрироваться</button>
        </form>
    </div>
</template>

<script>
    module.exports = {
        data: function () {
            return {
                login: "",
                password: "",
                passwordRepeat: ""
            }
        },
        methods: {
                registration: function () {
                    if (this.password === this.passwordRepeat){
                        let promice = this.$auth.register(this.login, this.password);
                        promice.then(function(){
                            this.$router.push("/login");
                        }).catch(function(response){
                    console.log("Ошибка "+ response);
                })
                    }
                }
            }
    }
</script>
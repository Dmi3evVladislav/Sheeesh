<template>
    <div id="regpage">
        <form v-on:keydown.enter="registration">
            <img src=".\images\sungram1.png" alt="logo">
            <p>Зарегистририруйтесь, чтобы смотреть и выкладывать фото ваших друзей и не только</p>
            <button class="logwithSP">Войти через SunProject</button>
            <div class="orline"><hr><p>ИЛИ</p><hr></div>
            <input type="text" v-model="login" placeholder="Логин">
            <input type="tel" v-model="mobilenumber" placeholder="Номер телефона">
            <input type="password" v-model="password" placeholder="Придумайте пароль">
            <input type="password" v-model="passwordRepeat" placeholder="Повторите пароль">
            <button v-on:click="registration">Зарегистрироваться</button>
            <div class="noreg"><p>У вас уже есть аккаунт? </p><router-link class="logbut" to="/login">Войти</router-link></div>
        </form>
    </div>
</template>

<script>
    module.exports = {
        data: function() {
            return {
                login: "",
                password: "",
                passwordRepeat: "",
                mobilenumber: ""
            }
        },
        methods: {
            registration: function() {
                if (this.password === this.passwordRepeat) {
                    let promise = this.$auth.register(this.login, this.password, this.mobilenumber);
                    promise.then(function() {
                        this.$router.push("/login");
                    })
                }
            }
        }
    }
</script>

<style scoped>
.regpage{
    width: 100%;
}
img {
    width: 175px;
}
form {
    font-weight: bold;
    color: rgb(163, 163, 163);
    border: 1px solid rgb(223, 222, 222);
    position: absolute;
    height: 592px;
    right: 0;
    top: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    z-index: 1;
    width: 340px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
    background: white;
    text-align: center;
}
input {
    margin-bottom: 10px;
    width: 100%;
    border: none;
    background-color: whitesmoke;
    outline: none !important;
    height: 35px;
    padding-left: 10px;
}
.logwithSP {
    background: linear-gradient(31deg, rgba(56,89,250,1) 0%, rgba(125,44,249,1) 24%, rgba(205,45,249,1) 52%, rgba(255,166,5,1) 91%);
    border: 0;
    outline: none !important;
    border-radius: 3px;
    height: 35px;
    width: 100%;
    color: white;
    font-weight: bold;
}
button {
    background: linear-gradient(31deg, rgba(56,89,250,1) 35%, rgba(84,5,255,1) 80%);
    border: 0;
    outline: none !important;
    border-radius: 3px;
    height: 35px;
    width: 100%;
    color: white;
    font-weight: bold;
    margin-top: 5px;
}
.orline {
    padding-top: 10px;
    display: flex;
}
.orline p {
    margin-left: 5px;
    margin-right: 5px;
}
hr {
    border: none;
    background-color: rgb(172 172 172);
    color: rgb(163, 163, 163);
    height: 3px;
    width: 116px;
    position: relative;
    top: -5px;
}
.noreg {
    display: flex;
    flex-direction: column;
}
.noreg p {
    margin-top: 15px;
    margin-bottom: 0;
}
a {
    text-decoration: none;
    color: rgb(83, 82, 82);
}
</style>

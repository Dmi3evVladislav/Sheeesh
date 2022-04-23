<template>
    <div class="header">
        <div class="container">
            <div class="row">
                <div class="col-md-12 col-lg-12 col-xl-12 col-12">
                    <router-link to="/feed" class="navbar-brand"><img src=".\images\sungram3.png" alt="logo"></router-link>
                    <a href="#" v-on:click="logout">Выйти</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    module.exports = {
        mounted: function() {
            if (!this.$auth.isLoggedIn()) {
                this.$router.push("/login")
            }
        },
        methods: {
            logout: function(){
                this.$auth.logOut();
                this.$router.push('/')
            }
        },
    }
</script>

<style scoped>
    .header {
        padding-bottom: 0px;
        padding-top: 10px;
        
        position: fixed;
        width: 100%;
        background-color: white;
        box-shadow: 2px black;
    }
    img {
        width: 150px;
    }
</style>
<template>
    <div>
        <div class="navbar navbar-default navbar-fixed-top">
            <div class="container-fluid">
                <div class="navbar-header">
                    <router-link to="/feed" class="navbar-brand">Фотолента</router-link>
                    <ul class="nav navbar-nav navbar-left">
                        <li><a href="#" v-on:click="logout">Выйти</a></li>
                    </ul>
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
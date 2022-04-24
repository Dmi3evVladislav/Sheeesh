<template>
    <div class="header">
        <div class="container">
            <div class="row">
                <div class="col-md-12 col-lg-12 col-xl-12 col-12">
                    <router-link to="/feed" class="navbar-brand"><img src=".\images\sungram3.png" alt="logo"></router-link>
                    <div class="flright">
                        <router-link to="/upload"><img class="upload" src=".\images\newupload.png" alt="upload"></router-link>
                        <router-link v-bind:to="'/profile/'+ id"><img class="profile" src=".\images\profilebutton.png" alt="profile"></router-link>
                        <a href="#" v-on:click="logout"><img class="exit" src=".\images\exitbutt.png" alt="logout"></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    module.exports = {
        data: function() {
        return {
            id: []
        }
    },
        mounted: function() {
        this.$http.get("/profile", {bearer: true}).then(function(response) {
            this.id = response.body
        })
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
        z-index: 9999;
    }
    img {
        width: 150px;
    }
    .flright{
        margin-top: 10px;
        float: right;
    }
    .upload {
        width: 40px;
    }
    .profile {
        width: 40px;
    }
    .exit{
        width: 40px;
    }
</style>
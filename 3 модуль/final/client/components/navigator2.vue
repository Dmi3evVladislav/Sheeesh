<template>
    <div class="boter">
        <div class="container">
            <div class="row">
                <div class="col-md-12 col-lg-12 col-xl-12 col-12">
                    <router-link to="/upload" class="navbar-brand"><img src=".\images\newupload.png" alt="upload"></router-link>
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
    .boter {
        padding-bottom: 0px;
        padding-top: 1px;
        position: fixed;
        width: 100%;
        bottom: 0;
        background-color: white;
        box-shadow: 2px black;
    }
    .navbar-brand{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    img {
        width: 50px;
    }
</style>
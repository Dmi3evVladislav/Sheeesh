<template>
    <div>
        Перенаправление...
    </div>
</template>

<script>
    module.exports = {
        mounted: function() {
            console.log(this.$auth);
            if (this.$auth.isLoggedIn()) {
                console.log("Авторизован");
            } else {
                this.$router.push("/login");
            }
        }
    }
</script>

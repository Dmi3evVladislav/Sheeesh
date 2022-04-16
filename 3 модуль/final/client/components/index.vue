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
                this.$router.push("/feed");
            } else {
                this.$router.push("/login");
            }
        }
    }
</script>

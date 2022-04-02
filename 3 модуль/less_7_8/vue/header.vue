<style scoped>
    h1 {
        color: purple
    }
</style>

<template>
    <h1>{{ msg }}</h1>    
</template>

<script>
    module.exports = {
        data: function() {
            return {
                msg: "Я люблю рисковать"
            }
        }
    }
</script>
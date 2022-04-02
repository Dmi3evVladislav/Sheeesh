<style scoped>
    div{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        width: 200px;
        flex-direction: column
    }
    p {
        margin: 0 0 20px 0;
    }
</style>

<template>
    <div>
        <img v-bind:src="posterUrl">
        <h1>{{ name }}</h1>
        <p>{{ year }}</p>
    </div>
</template>

<script>
    module.exports = {
        props: ["posterUrl", "name", "year"]
    }
</script>
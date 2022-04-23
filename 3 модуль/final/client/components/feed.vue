<template>
<div>
    <navigator>

    </navigator>
    <div class="feed">
        <div class="container">
            <div class="row">
                <div class="col-md-12 col-xl-12 col-lg-12 col-12 center">
                <div v-for="(photo, $index) in photos" class="panelfeed">
                <div class="panel-heading">
                    <div class="headerpost">
                        <span class="panel-title">{{photo.user}}</span>
                        <span class="gliphicon glificon-user"></span>
                    </div>
                </div>
                <div class="panel-body">
                    <img v-bind:src="getPic($index)">
                </div>
                </div>
                </div>
            </div>
        </div>
    </div>
    <navigator2>

    </navigator2>
</div>
</template>

<script>
module.exports = {
    data: function() {
        return {
            photos: []
        }
    },
    mounted: function() {
        this.$http.get("/feed", {bearer: true}).then(function(response) {
            this.photos = response.body
        })
    },
    methods: {
        getPic: function(index) {
            return this.photos[index].image;
        }
    },
    components: {
        navigator: require("./navigator.vue"),
        navigator2: require("./navigator2.vue")
    }
}
</script>

<style scoped>
    .feed {
        padding-top: 78px;
    }
    .center {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    img {
        width: 350px;
    }
</style>

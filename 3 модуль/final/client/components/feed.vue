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
                <div class="panel-foter">
                    <span class="panel-date">{{photo.date.substr(0, 10)}}</span>
                    <span class="panel-date">{{photo.descr}}</span>
                </div>
                </div>
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
        },
        getDate: function(index) {
            return this.photos[index].date;
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
        padding-top: 100px;
    }
    .center {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    img {
        width: 350px;
    }
    .panelfeed {
        max-height: 600px;
        height: 50%;
        background-color: white;
        padding-bottom: 20px;
        margin-bottom: 10px;
        box-shadow: 0px 0px 29px 1px rgba(34, 60, 80, 0.2);
    }
    .panel-heading {
        box-shadow: 0px 0px 9px 1px rgba(34, 60, 80, 0.11) inset;
        height: 50px;
        display: flex;
        align-items: center;
        font-weight: bold;
    }
    .panel-title {
        padding-left: 10px;
    }
    .panel-date {
        padding-left: 10px;
        font-weight: bold;
        color: rgb(153, 153, 153);
    }
    .panel-foter {
        padding-top: 5px;
        font-size: 13px;
    }
</style>

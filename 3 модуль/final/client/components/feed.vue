<template>
<div>
    <navigator>

    </navigator>
    <div class="bguserpost" v-if="isopenpost">
        <div class="panelfeed1">
            <div class="panel-heading">
                <div class="headerpost">
                    <router-link class="useridgo" v-bind:to="'/profile/'+ postpack.user"><span class="panel-title"><img class="feedavatars" src=".\images\noavauser.png" alt="ava">{{postpack.user}}</span></router-link>
                    <a class="exitpostbutt" v-on:click="closepost()"><img src="./images/exitpostbutt2.png" alt=""></a>
                </div>
            </div>
            <div class="panel-body">
                <img v-bind:src="postpack.image">
            </div>
            <div class="panel-foter">
                    <span class="panel-date">{{postpack.date.substr(0, 10)}}</span>
                    <span class="panel-date">{{postpack.descript}}</span>
                </div>
        </div>
    </div>
    <div class="feed">
        <div class="container">
            <div class="row">
                <div class="col-md-12 col-xl-12 col-lg-12 col-12 center">
                <div v-for="(photo, $index) in photos" class="panelfeed">
                <div class="panel-heading">
                    <div class="headerpost">
                        <router-link class="useridgo" v-bind:to="'/profile/'+ photo.user"><span class="panel-title"><img class="feedavatars" src=".\images\noavauser.png" alt="ava">{{photo.user}}</span></router-link>
                    </div>
                </div>
                <div class="panel-body">
                    <a class="picturedoropen" v-on:click="openpost($index)"><img v-bind:src="getPic($index)"></a>
                </div>
                <div class="panel-foter">
                    <span class="panel-date">{{photo.date.substr(0, 10)}}</span>
                    <span class="panel-date">{{photo.descript}}</span>
                </div>
                </div>
                <button class="loadmorebutt" v-on:click="loadmorepict(posts)">Загрузить еще</button>
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
            photos: [],
            posts: 0,
            isopenpost: false,
            postpack: []
        }
    },
    methods: {
        getPic: function(index) {
            return this.photos[index].image;
        },
        loadmorepict: function(postsnum){
            this.posts = postsnum + 10
            this.$http.get("/feed"+"/"+this.posts, {bearer: true}).then(function(response) {
            this.photos = response.body
            console.log(this.photos);
        })
        },
        openpost: function(index){
            console.log(this.photos[index].postid);
            this.isopenpost = true;
            this.$http.get("/feed/post/"+this.photos[index].postid, {bearer: true}).then(function(response) {
            this.postpack = response.body[0]
            console.log(this.postpack);
        })
        },
        closepost: function() {
            this.isopenpost = false
        }
    },
    mounted: function() {
        let self = this;
        $(window).scroll(function(){ if($(window).scrollTop()+$(window).height()>=$(document).height()){ self.loadmorepict(self.posts) } })
        this.$http.get("/feed"+"/"+this.posts, {bearer: true}).then(function(response) {
            this.photos = response.body
        })
        console.log(this.isopenpost);
    },
    components: {
        navigator: require("./navigator.vue"),
    }
}
</script>

<style scoped>
    .panelfeed1 {
        max-height: 1000px;
        background-color: white;
        padding-bottom: 20px;
        margin-bottom: 10px;
        box-shadow: 0px 0px 29px 1px rgba(34, 60, 80, 0.2);
        width: fit-content;
        height: fit-content;
        position: fixed;
        right: 0;
        top: 0;
        bottom: 0;
        left: 0;
        margin: auto;
        
    }
    .center2 {
        position: fixed;
        right: 0;
        top: 0;
        bottom: 0;
        left: 0;
        margin: auto;
    }
    .photoplace{
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: whitesmoke;
        box-shadow: 0px 0px 9px 1px rgba(34, 60, 80, 0.21) inset;
        position: relative;
        overflow:hidden;
        min-width: 280px;
        width:50%;
        height:100%;
    }
    .photoplace img{
        position: absolute;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%);
        width:100%;
        max-height:100%;
        object-fit:cover;
    }
    .descrplace {
        background-color: white;
    }
    .bguserpost {
        background-color: rgba(0, 0, 0, 0.445);
        z-index: 8000;
        position: fixed;
        width: 100%;
        height: 100%;
    }
     .exitpostbutt {
        position: absolute;
        top: 10px;
        right: 10px;
        opacity: 0.5;
    }
    .exitpostbutt img {
        width: 50px;
    }
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
        max-height: 1000px;
        background-color: white;
        padding-bottom: 20px;
        margin-bottom: 10px;
        box-shadow: 0px 0px 29px 1px rgba(34, 60, 80, 0.2);
    }
    .panel-heading {
        box-shadow: 0px 0px 9px 1px rgba(34, 60, 80, 0.11) inset;
        height: 70px;
        display: flex;
        align-items: center;
        font-weight: bold;
        font-size: 20px;
        padding: 10px;
    }
    .panel-title {
        padding-left: 10px;
        display: flex;
        align-items: center;
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
    .useridgo {
        text-decoration: none;
        color: black;
    }
    .feedavatars {
        width: 50px;
        margin-right: 10px;
    }
    .loadmorebutt {
        background: linear-gradient(31deg, rgba(56,89,250,1) 0%, rgba(125,44,249,1) 24%, rgba(205,45,249,1) 52%, rgba(255,166,5,1) 91%);
        border: 0;
        outline: none !important;
        border-radius: 3px;
        height: 45px;
        width: 350px;
        color: white;
        font-weight: bold;
        margin-bottom: 20px;
        margin-top: 20px;
    }
    .userpost {
        margin-top: 30px;
        flex-direction: column;
        width: 60%;
        min-height: 550px;
        height: 60%;
        position: fixed;
        right: 0;
        top: 0;
        bottom: 0;
        left: 0;
        margin: auto;
        display: flex;
    }
</style>

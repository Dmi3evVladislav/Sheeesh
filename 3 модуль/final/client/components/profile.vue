<template>
    <div>
        <navigator></navigator>
        <div class="profile">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 col-xl-12 col-lg-12 col-12">
                        <div class="profileheader">
                            <img class='avatar' src=".\images\addava.png">
                            <span>{{ info }}</span>
                        </div>
                        <div class="profilecenter">
                        <div v-for="(photo, $index) in profphotos[1]" class="panelfeed">
                            <div class="box"><img v-bind:src="photo.image"></div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
let isopenpost = require("../scripts/global.js")
module.exports = {
    data: function() {
        return {
            info: this.$route.params.index,
            profphotos: []
        }
    },
    components: {
        navigator: require("./navigator.vue"),
        UserPost: require("./post.vue")
    },
    mounted: function() {
        let nowUserId = this.$route.params.index
        this.$http.get("/proffeed" + "/" +nowUserId,  {bearer: true}).then(function(response) {
            this.profphotos = response.body
        })
    },
}
</script>

<style scoped>
.profile {
    display: flex;
    justify-content: center;
}
.profileheader {
    padding: 20px;
    margin-top: 87px;
    background-color: white;
    font-weight: bold;
    font-size: 30px;
}
.profilecenter {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.box {
   position: relative;
   overflow:hidden;
   width:300px;
   height:300px;
   box-shadow: 0px 0px 29px 1px rgba(34, 60, 80, 0.2);
   margin: 10px;
}

.box img {
   position: absolute;
   top:50%;
   left:50%;
   transform:translate(-50%,-50%);
   width:300px;
   height:300px;
   object-fit:cover;
}
.panelfeed {
    display: flex;
    justify-content: center;
}
.avatar {
    border-radius: 50%;
    width: 100px;
    margin-right: 20px;
}
</style>
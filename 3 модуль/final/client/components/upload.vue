<template>
    <div>
        <navigator>

        </navigator>
        <div class="uploadpanel">
            <div class="container">
            <div class="row">
                <div class="col-md-12 col-xl-12 col-lg-12 col-12 center">
                    <form v-on:submit="upload" class="panelfeed">
                        <div class="panel-heading">
                            <div class="headerpost">
                                <span class="panel-title"><img class="feedavatars" src=".\images\noavauser.png" alt="ava">{{username}}</span>
                            </div>
                        </div>
                        <div class="panel-body">
                            <label for="fileselect"><img src=".\images\preview.jpg" v-if="!previewd"></label>
                            <img v-bind:src="image" v-if="previewd">
                        </div>
                        <div class="panel-foter">
                            <span class="panel-descript"><input type="text" v-on:change="preview" v-model="discript" placeholder="Описание"><button type="submit" class="btnupload" v-bind:disabled="!previewd">Загрузить</button></span>
                            <span class="panel-date">{{ date.substr(0, 10) }}</span>
                        </div>
                        <input id="fileselect" type="file" accept="image/*" name="picture" v-on:change="preview">
                    </form>
                </div>
            </div>
            </div>
    </div>
        </div>
</template>

<script>
const { methods }=require("./reg.vue")

    module.exports = {
        data: function() {
            return {
                picture: "",
                previewd: false,
                discript: "",
                username: "",
                date: "",
            }
        },
        methods: {
            preview: function(event) {
                let file = event.target.files;
                if (file.length === 1) {
                    let self = this;
                    let reader = new FileReader();
                    reader.onload = function(readerEvent) {
                        self.image = readerEvent.target.result;
                        self.previewd = true
                        $("label").css({
                            'display' : 'none'
                        })
                    }
                    reader.readAsDataURL(file[0])
                }
            },
            upload: function(event) {
                this.previewd = false
                event.preventDefault();
                let form = event.target;
                let formPost = new FormData(form);
                formPost.append('descr', this.discript)
                console.log(this.discript);
                this.$http.post("/upload", formPost, {bearer: true}).then(function(){
                    this.$router.push("/feed");
                })
            }
        },
        components: {
            navigator: require("./navigator.vue")
        },
        mounted: function() {
            this.$http.get("/uploaduserinfo",  {bearer: true}).then(function(response) {
            this.username = response.body[0]
            this.date = response.body[1]
        })
        }
    }
</script>
<style scoped>
    .btnupload {
        height: 38px;
        outline: none !important;
        border: none;
        width: 100px;
        background: linear-gradient(31deg, rgba(56,89,250,1) 0%, rgba(125,44,249,1) 24%, rgba(205,45,249,1) 52%, rgba(255,166,5,1) 91%);
        color: white;
        font-weight: bold;
        border-radius: 3px;
    }
    .uploadpanel {
        padding-top: 100px;
        position: relative;
    }
    #fileselect {
        opacity: 0;
        width: 1px;
    }
    label {
        max-height: 480px;
        margin-bottom: 5px;
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
        height: 92%;
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
        padding-bottom: 20px;
    }
    .panel-title {
        padding-top: 10px;
        padding-left: 10px;
        display: flex;
        align-items: center;
    }
    .panel-date {
        padding-left: 10px;
        font-weight: bold;
        color: rgb(153, 153, 153);
        position: relative;
        top: -10px;
    }
    .panel-descript {
        padding-left: 10px;
        font-weight: bold;
        color: rgb(153, 153, 153);
    }
    .panel-foter {
        padding-top: 5px;
        font-size: 13px;
        display: flex;
        flex-direction: column;
    }
    .useridgo {
        text-decoration: none;
        color: black;
    }
    .feedavatars {
        width: 50px;
        margin-right: 10px;
    }
    .panelfeed {
        max-height: 1000px;
        background-color: white;
        padding-bottom: 20px;
        margin-bottom: 10px;
        box-shadow: 0px 0px 29px 1px rgba(34, 60, 80, 0.2);
    }
    input {
    margin-bottom: 10px;
    width: 65%;
    margin-right: 10px;
    border: none;
    background-color: rgb(199, 199, 199);
    outline: none !important;
    height: 37px;
    padding-left: 10px;
    border-radius: 3px;
}   
</style>
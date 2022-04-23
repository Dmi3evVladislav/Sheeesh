<template>
    <div>
        <navigator>

        </navigator>
        <div class="uploadpanel">
            <img v-bind:src="image" v-if="previewd">
            <form v-on:submit="upload">
                <input type="file" accept="image/*" name="picture" v-on:change="preview">
                <button type="submit" class="btn btn-info" v-bind:disabled="!previewd">Загрузить</button>
                <input type="text" name="disc" v-on:change="preview" v-model="discript">
            </form>
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
                discript: ""
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
                    }
                    reader.readAsDataURL(file[0])
                }
            },
            upload: function(event) {
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
        }
    }
</script>
<style scoped>
    .uploadpanel {
        padding-top: 78px;
        position: relative;
    }
    img {
        max-width: 600px;
    }
</style>
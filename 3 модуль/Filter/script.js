let textarea = document.getElementById("sandbox"),
text = textarea.value;

function stsearch(){
    for (let item of text) {
        console.log(item);
    }
}

let butt = document.getElementById("search")
butt.onclick(console.log("sheesh"))
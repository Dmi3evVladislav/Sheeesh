$(document).ready(function(){
    $.get("http://localhost:591/quote", function (data) {
        let datan = JSON.parse(data)
        let quotenumber = datan.number;
        console.log(quotenumber);
        let title = ("Цитата " + quotenumber);
        document.title = title;
        $(".cent").html(datan.text);
    })
})
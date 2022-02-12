$("#request").on("click", function(){
    let txt = $("#text").val();

    let response = $.get("http://localhost:591/folder/page", {music: txt});
    response.done(function(data){
        console.log(data)
    })
    response.fail(function(jqXHR, textStatus, errorThrown){
        console.log(textStatus, errorThrown)
    })
});
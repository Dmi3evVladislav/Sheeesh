let vmWiki = new Vue({
    el: "#app",
    data: {
        search: "",
        source: "<h1>Я люблю рисковать</h1>"
    }
})

$.ajax ({
    url: "https://ru.wkipedia.org/w/api.php",
    jsonp: "callback",
    dataType: "jsonp",
    data: {
        action: "query",
        prop: "extacts", 
        format: "json",
        exintro: true,
        redirects: true,
        titles: userQuery
    }
})
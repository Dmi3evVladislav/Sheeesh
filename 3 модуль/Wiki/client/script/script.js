let userQuery = "Голый землекоп"
let page = "start search"

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
    },
    success: function(response) {
        let pages = response.guery.pages;
        for(let pageId in pages) {
            if(pageId === -1) {
                console.log("Информация не найдена");
            } else {
                page = pages[pageId];
            }
            break;
        }
    }
})

let vmWiki = new Vue({
    el: "#app",
    data: {
        search: "",
        source: page,
    }
})
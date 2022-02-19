$.get("/records", function(data) {
    let list = JSON.parse(data)
    let tbody = $("tbody");
    list.forEach(function(item) {
        let row = $("<tr><td>" + item.firstName + "</td><td>" + item.secondName + "</td></tr>")
        tbody.append(row)
    });
})
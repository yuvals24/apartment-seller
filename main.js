
$("button").on("click", function () {
    let address = $("#addr-input").val()
    let minPrice = $("#min-p-input").val()
    let maxPrice = $("#max-p-input").val()
    let minRooms = $("#min-r-input").val()
    let maxRooms = $("#max-r-input").val()
    let immediate = $("#immed-y")

    let relevantApts = findRelevantApts(address, minPrice, maxPrice, minRooms, maxRooms, immediate)
    renderApts(relevantApts)
})

const renderApts = function (apartments) {
    $("#results").empty()
    if (apartments.length === 0)
    {
        $('#results').append(`<div class="no-match">fuck you</div>`)
    }
    else
    {
        let source = $('#houses-template').html()
        let template = Handlebars.compile(source)
        let newHtml = template({ apartments })
        $('#results').append(newHtml)
    }
}

renderApts(apartments) //renders apartments when page loads



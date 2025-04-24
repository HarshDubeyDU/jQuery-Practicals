$("button.show--button").on("click", function() {
    $(".show--paragraph").show();
});

$("button.hide--button").on("click", function() {
    $(".hide--paragraph").hide();
});

$("button.toggle--button").click(function() {
    $(".toggle--paragraph").toggle();
});

$("button.slide--button").click(function() {
    let query = $("button.slide--button").text();

    if (query === "Slide Up") {
        $(".slide--paragraph").slideUp();
        $(".slide--button").text("Slide Down");
    } else {
        $(".slide--paragraph").slideDown();
        $(".slide--button").text("Slide Up");
    }
});

$(function() {
    $(".draggable").draggable();
    $(".droppable").droppable({
        drop: function() {
            $(this)
                .addClass("droppable--highlight")
                .find("p")
                .html("Dropped!");
        }
    });
})

$(".image-slider__button--manual").click(function() {
    let query = $(".image-slider__button--manual").text();

    if (query === "Fade In") {
        $(".image-slider__image").fadeIn();
        $(".image-slider__button--manual").text("Fade Out");
    } else {
        $(".image-slider__image").fadeOut();
        $(".image-slider__button--manual").text("Fade In");
    }
});

$(".ajax__request").click(function() {
    $.ajax({
        type: "GET",
        url: "https://jsonplaceholder.typicode.com/posts",
        success: function(data) {
            data.forEach(function(post) {
                $("ajax").append("<h3>" + post.title + "</h3><p>" + post.body + "</p>");
            })
        }
    })
    $(".ajax__request").hide();
});

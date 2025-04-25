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
                $(".ajax").append("<h3>Title: " + post.title + "</h3><p class='post-body'>Body:<br/>" + post.body + "</p>");
            })
        }
    })
    $(".ajax__request").hide();
});

$("#identity-verification-form").submit(function(event) {
    $("form span").hide();
    let isValid = true;

    const name = $("#name").val();
    const email = $("#email").val();
    const phone = $("#phone").val();
    const password = $("#password").val();
    const confirmPassword = $("#confirmPassword").val();

    if (name === "") {
        $("#name").after('<span class="error">Please enter your name</span>');
        isValid = false;
    }

    if (!validateEmail(email)) {
        $("#email").after("<span>Invalid email format</span>");
        isValid = false;
    }

    if (!validatePhone(phone)) {
        $("#phone").after("<span>Invalid phone format</span>");
        isValid = false;
    }

    if (!validatePassword(password)) {
        $("#password").after("<span>Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number</span>");
        isValid = false;
    }

    if (password !== confirmPassword) {
        $("#confirmPassword").after("<span>Passwords do not match</span>");
        isValid = false;
    }

    event.preventDefault();

    if (isValid) {
        const form = $("#identity-verification-form");
        form.reset();

        const formButton = $(form+"button");
        formButton.attr("disabled", "disabled");
        formButton.before("<span>Form is Valid.</span>");
    }
});

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePhone(phone) {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
}

function validatePassword(password) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    return passwordRegex.test(password);
}

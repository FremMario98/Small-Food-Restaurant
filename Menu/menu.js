$(".card").on("mouseover", function () {

    $(this).find(".card-body p").css("display", "block");
    $(this).find(".card-body").css("height", "100%");

});

$(".card").on("mouseout", function () {

    $(this).find(".card-body p").css("display", "none");
    $(this).find(".card-body").css("height", "100px");

});
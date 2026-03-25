
/**if jQuery and js call is in head */
// $(document).ready(function() {
//     $("h1").css("color", "red")
// })

$("h1").css("color", "red")

if (!$("h2").hasClass("greeting")) {
    $("h2").addClass("greeting");
    $("h2").text("Lorem ipsum dolor sit amet consectetur adipisicing elit. Est iusto modi eaque delectus voluptatum accusantium vero repellat nam totam asperiores. Autem harum inventore repellendus minus accusamus cumque odio labore itaque.");
}

$("button").html("<em>Haiii</em>")

/**change attribute value */
$("a").attr("href", "https://jquery.com/")

$("button").click(function() {
    $("h1").css("color", "blue")
    $("h2").animate({ opacity: 0.5 })
    $("h1").fadeToggle()
    $("h3").slideUp().slideDown().animate({ color: "yellow"})
})
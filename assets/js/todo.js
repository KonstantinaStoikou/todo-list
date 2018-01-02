
$("ul").on("click", "li", function() {
    $(this).toggleClass("completed");
});

$("ul").on("click", "span", function(event) {
    $(this).parent().fadeOut(function() {
        //after fadeout the li element is removed
        $(this).remove();    //this in here refers to the parent(li) and not the span
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event) {
    if (event.which === 13) {
        var todoText = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fa fa-trash-o'></i></span>" + todoText + "</li>")
    }
});

$(".fa-plus-circle").click(function() {
    $("input[type='text']").fadeToggle()
});

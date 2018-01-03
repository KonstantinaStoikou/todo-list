
var todos = document.getElementById("todoList");

//to add line through when clikcing on todo
$("ul").on("click", "li", function() {
    $(this).toggleClass("completed");
    window.localStorage.myitems = todos.innerHTML;   //store
});

//to delete todo when clicking on trash can icon
$("ul").on("click", "span", function(event) {
    $(this).parent().fadeOut(function() {
        //after fadeout the li element is removed
        $(this).remove();    //this in here refers to the parent(li) and not the span
        window.localStorage.myitems = todos.innerHTML; //store
    });

    event.stopPropagation();
});

//to add todo when writing on input
$("input[type='text']").keypress(function(event) {
    if (event.which === 13) {    //enter pressed
        var todoText = $(this).val();
        $("ul").append("<li><span><i class='fa fa-trash-o'></i></span>" + todoText + "</li>");
        window.localStorage.myitems = todos.innerHTML; //store
        $(this).val("");
    }
});

$(".fa-plus-circle").click(function() {
    $("input[type='text']").fadeToggle();
});

getValues();

//FUNCTIONS

function getValues() {
    var storedValues = window.localStorage.myitems;
    if(storedValues) {
      todos.innerHTML = storedValues;
    }
  }

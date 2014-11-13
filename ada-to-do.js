$(function() {
  $("#addTask").click(addButtonClick);

  $("#remTask").click(remButtonClick);

  $("#list").sortable();


});

function addButtonClick(event) {
  event.preventDefault();
  // append the input task as a list item to the list
  $("<li>"+ $("#task").val() +"</li>").appendTo("#list").hide().fadeIn("slow");
  // get bgcolor based on whether the element is even or odd
  var bgcolor = ($("li").length % 2 === 0 ? "grey" : "lightblue");
  // apply bgcolor name
  $("li").last().css("background", bgcolor);
  // add clickhandler to this item
  $("li").last().click(doneClickHandler);
  // reset input task to blank again
  $("#task").val("");
}

function doneClickHandler() {
  $(this).toggleClass("done");
}

function remButtonClick(event) {
  event.preventDefault();
  $("li").last().remove();
}

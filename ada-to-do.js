$(function() {
  $("#addTask").click(addButtonClick);

  $("#remTask").click(remButtonClick);

});

function addButtonClick(event) {
  event.preventDefault();
  // append the input task as a list item to the list
  $("#list").append("<li>"+ $("#task").val() +"</li>");
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

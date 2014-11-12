$(function() {
  $("#addTask").click(addButtonClick);

  var rembutton = document.getElementById("remTask");
  rembutton.onclick = remButtonClick;

  document.getElementsByTagName("ul")[0].addEventListener("click",function(e) {
    // e.target is our targetted element.
    // try doing console.log(e.target.nodeName), it will result LI
    if(e.target && e.target.nodeName == "LI") {
        console.log(e.target.innerHTML + " was clicked");
        theTarget = e.target;
        theTarget.classList.contains("done") ? theTarget.classList.remove("done") : theTarget.classList.add("done");
    }
  });
});

function addButtonClick(event) {
  event.preventDefault();
  // append the input task as a list item to the list
  $("#list").append("<li>"+ $("#task").val() +"</li>");
  // get bgcolor based on whether the element is even or odd
  var bgcolor = ($("li").length % 2 === 0 ? "grey" : "lightblue");
  // apply bgcolor name
  $("li").last().css("background", bgcolor);
  // reset input task to blank again
  $("#task").val("");
}

function remButtonClick(event) {
  event.preventDefault();
  var liItems = document.getElementsByTagName("li");
  var lastListItem = liItems[liItems.length-1];
  console.log(lastListItem);
  lastListItem.remove();
}

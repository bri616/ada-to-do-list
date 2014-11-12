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
  var classname = ($("li").length % 2 === 0 ? "grey" : "light-blue");
  $list = $("#list").append("<li>"+ $("#task").val() +"</li>");
  $("li").last().addClass(classname);
  $("#task").val("");
}

function remButtonClick(event) {
  event.preventDefault();
  var liItems = document.getElementsByTagName("li");
  var lastListItem = liItems[liItems.length-1];
  console.log(lastListItem);
  lastListItem.remove();
}

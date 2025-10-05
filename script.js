// This function shows or hides topic lists when you click on another one
function showTopics(id) {
  // Hide all topic lists first
  var allLists = document.getElementsByClassName("topics");
  for (var i = 0; i < allLists.length; i++) {
    if (allLists[i].id !== id) {
      allLists[i].style.display = "none";
    }
  }

  // Toggle the one that was clicked
  var list = document.getElementById(id);
  if (list.style.display === "block") {
    list.style.display = "none";
  } else {
    list.style.display = "block";
  }
}

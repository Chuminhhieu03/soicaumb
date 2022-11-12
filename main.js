var check = true;
var btn = document.getElementsByClassName("hide-click");
function myFunction() {
  var element = document.getElementById("parahide");
  if (check) {
    element.classList.remove("max-h-[420px]");
    element.classList.remove("truncate");
    check = !check;
  } else {
    element.classList.add("max-h-[420px]");
    element.classList.add("truncate");
    check = !check;
  }
}
btn[0].addEventListener("click", myFunction);

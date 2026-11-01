//  navbar
window.addEventListener("scroll", function(){
  var scrollValue = window.scrollY;
  var navbar = document.querySelector(".navbar");

  if(scrollValue > 300){
    navbar.setAttribute("class", "navbar md:navbar-expand bg-primary")
  }else{
    navbar.setAttribute("class", "navbar md:navbar-expand bg-danger")
  }
})
//  navbar

// setInterval
var mouse = setInterval(myTimer,1000);

function myTimer(){
  var d= new Date();
  document.getElementById("demo").innerHTML = d;
}
// setInterval


// setTimeOut
function setData(){
  alert(123)
}
function getData() {
  Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Something went wrong!",
  footer: "<a href=\"#\">Why do I have this issue?</a>"
});
}
// setTimeOut
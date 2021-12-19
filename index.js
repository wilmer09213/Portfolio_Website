/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}

function projectPopup1() {
  let popup = document.querySelector("#project1");

   popup.classList.toggle("show");
}

function projectPopup2() {
  let project2 = document.querySelector("#project2");

   project2.classList.toggle("show");

}
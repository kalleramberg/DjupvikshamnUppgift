window.onscroll = function() {myFunction()};

var navbar = document.getElementById("fixedTop");

var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


// Jag anser att denna lösning är produktionsredo - däremot skulle man kunna ha en annan lösning som gör att det inte blir något "glapp" i scrollningen.
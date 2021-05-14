	// Sticky Header
    $(window).scroll(function() {    
      var scroll = $(window).scrollTop();

      if (scroll >= 100) {
        $(".top-nav").addClass("light-header");
    }  
      else {
        $(".top-nav").removeClass("light-header");
    }
});

// Year for copy content
    $(function(){
      var theYear = new Date().getFullYear();
    $('#year').html(theYear);
});
    //Scrollspy
$(document).ready(function(){
  // Add scrollspy to <body>
  $('body').scrollspy({target: ".navbar", offset: 50});   

  // Add smooth scrolling on all links inside the navbar
  $("#myNavbar a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }  // End if
  });
});
	// Email validation
      var email = document.getElementById("mail");

email.addEventListener("keyup", function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("Por favor, introduce un correo electronico valido.");
  } else {
    email.setCustomValidity("");
  }
});
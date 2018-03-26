$(document).ready(function() {
  // work through together in class
  setTimeout(function(){
    $(".wake-up-text").addClass("alarming"); 
    // $("body").addClass("alarming");
  }, 5000);

  $(".button").click(function() { 
    $(".wake-up-text").removeClass("alarming");
    // $("body").removeClass("alarming");
  });

});
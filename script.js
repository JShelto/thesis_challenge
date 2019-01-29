$( "#menu-button" ).click(function() {
  if($("body").width() < 750) {
    $("#mobile-nav").toggle();
  }
});

$( "#close-button" ).click(function() {
  $("#mobile-nav").css("display", "none");
});
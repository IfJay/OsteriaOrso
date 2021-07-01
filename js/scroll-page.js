// ON SCROLL FUNCTION
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  var pos1 = $( "#nav-trigger" ).first();
  var position = pos1.position();
  if (document.body.scrollTop >= position.top || document.documentElement.scrollTop >= position.top) {
    $(".pop-up").addClass("godown");
  } else {
    $(".pop-up").removeClass("godown");
  }
}

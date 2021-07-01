// HAMBURGER CLICK FUNCTION
function Toggle(){
  if (!$(".toggle").hasClass("open")) {
    $(".toggle").addClass("open");
    $(".body").addClass("open");
    $(".animated-icon2").addClass("open");
  } else {
    $(".toggle").removeClass("open");
    $(".body").removeClass("open");
    $(".animated-icon2").removeClass("open");
  }
}
// RISTORANTE sx
function ToggleUnderlinesx1(){
    $(".sezione1").removeClass("sezione-under");
    $(".sezione2").addClass("sezione-under");
    $(".menu-items-ristorante").addClass("nascondi");
    $(".menu-items-orso").removeClass("nascondi");
}
// RISTORANTE sx
function ToggleUnderlinedx1(){
    $(".sezione1").addClass("sezione-under");
    $(".sezione2").removeClass("sezione-under");
    $(".menu-items-ristorante").removeClass("nascondi");
    $(".menu-items-orso").addClass("nascondi");
}
// BAR sx
function ToggleUnderlinesx2(){
    $(".sezione3").removeClass("sezione-under");
    $(".sezione4").addClass("sezione-under");
    $(".menu-items-cocktail").addClass("nascondi");
    $(".menu-items-vini").removeClass("nascondi");
}
// BAR sx
function ToggleUnderlinedx2(){
    $(".sezione3").addClass("sezione-under");
    $(".sezione4").removeClass("sezione-under");
    $(".menu-items-cocktail").removeClass("nascondi");
    $(".menu-items-vini").addClass("nascondi");
}
function f() {
  console.log("ciao");
//  parallax_scroll( $el, local_options );b

}

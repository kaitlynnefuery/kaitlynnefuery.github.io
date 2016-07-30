
//sticky header
$(window).scroll(function() {
  if( $(this).scrollTop() > $('main').height() ) {
    $(".main-nav").addClass("main-nav-scrolled").fadeIn();
  } else {
    $(".main-nav").removeClass("main-nav-scrolled").css({"display" : "none"});
  }
});

// //skills section - enlarge li/row on hover
// $('#skills li').hover(
//     function() {
//         $( this ).addClass("skills-hover")
//     }, function() {
//         $( this).removeClass("skills-hover")
//     }
// );
//


//resume skills section - enlarge li/row on hover
$("#skills li").hover(
    function() {
        $( this ).addClass("skills-hover")
    }, function() {
        $( this).removeClass("skills-hover")
    }
);
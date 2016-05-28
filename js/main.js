
//sticky header
$(document).ready(function(){
    $(".sticky").sticky({topSpacing:200px});
});

//resume skills section - enlarge li/row on hover
$("#skills li").hover(
    function() {
        $( this ).addClass("skills-hover")
    }, function() {
        $( this).removeClass("skills-hover")
    }
);

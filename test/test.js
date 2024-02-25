$(document).ready(function(){
    $("button").click(function(){
        $("p").animate({left:'20px'});
    });
    $("#b").click(function(){
        $("p").fadeIn("slow");
    });
});
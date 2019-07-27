$(document).ready(function(){
    $("#design").click(function(){
        $("#design").hide();
        $("#designText").fadeIn('fast',0.25);
    });

    $("#dev").mouseenter(function(){
        $("#dev").hide();
        $("#devText").fadeIn('fast',0.25);
    });

    $("#product").click(function(){
        $("#product").hide();
        $("#prodText").fadeIn('fast',0.25);
    });

});
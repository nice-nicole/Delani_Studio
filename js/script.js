$(document).ready(function(){
    $("#design").click(function(){
        $("#design").hide();
        $("#designText").show();
    });
    $("#designText").click(function(){
        $("#design").show();
        $("#designText").hide();
    });
    $("#dev").click(function(){
        $("#dev").hide();
        $("#devText").show();
    });
    $("#devText").click(function(){
        $("#dev").show();
        $("#devText").hide();
    });

    $("#product").click(function(){
        $("#product").hide();
        $("#prodText").show();
    });
    $("#prodText").click(function(){
        $("#product").show();
        $("#prodText").hide();
    });

});
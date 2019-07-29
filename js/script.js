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

    $("#work1").hover(function(){
        $("#work1").fadeTo("slow", 0.10);

    });
    $("#work2").hover(function(){
        $("#work2").fadeTo("slow", 0.10);

    });
    $("#work3").hover(function(){
        $("#work3").fadeTo("slow", 0.10);

    });
    $("#work4").hover(function(){
        $("#work4").fadeTo("slow", 0.10);

    });
    $("#work5").hover(function(){
        $("#work5").fadeTo("slow", 0.10);

    });
    $("#work6").hover(function(){
        $("#work6").fadeTo("slow", 0.10);

    });
    $("#work7").hover(function(){
        $("#work7").fadeTo("slow", 0.10);

    });
    $("#work8").hover(function(){
        $("#work8").fadeTo("slow", 0.10);

    });
});
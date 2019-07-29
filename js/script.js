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

    $("#work1").mouseover(function(){
        $("#w1Text").show();
    });

    $("#work1").mouseleave(function(){
        $("#w1Text").hide();
    });

    $("#work2").mouseover(function(){
        $("#w2Text").show();
    });

    $("#work2").mouseleave(function(){
        $("#w2Text").hide();
    });
    $("#work3").mouseover(function(){
        $("#w3Text").show();
    });

    $("#work3").mouseleave(function(){
        $("#w3Text").hide();
    });
    $("#work4").mouseover(function(){
        $("#w4Text").show();
    });

    $("#work4").mouseleave(function(){
        $("#w4Text").hide();
    });
    $("#work5").mouseover(function(){
        $("#w5Text").show();
    });

    $("#work5").mouseleave(function(){
        $("#w5Text").hide();
    });
    $("#work6").mouseover(function(){
        $("#w6Text").show();
    });

    $("#work6").mouseleave(function(){
        $("#w6Text").hide();
    });
    
    $("#work7").mouseover(function(){
        $("#w7Text").show();
    });

    $("#work7").mouseleave(function(){
        $("#w7Text").hide();
    });
    $("#work8").mouseover(function(){
        $("#w8Text").show();
    });

    $("#work8").mouseleave(function(){
        $("#w8Text").hide();
    });

    $("#frm").submit(function(event) {
        var names = $("#name").val();
        var emailAd=$("#email").val();
        var message=$("#msg").val();
        if(names!==null || emailAd!==null || message!==null){
            alert(names + " we have received your message. Thank you fro reaching out to us.");
        }
        event.preventDefault();
        $("#name").val(" ");
        $("#email").val(" ");
        $("#msg").val(" ");
      });
});
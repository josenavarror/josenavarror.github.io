$(function(){
    $("#flecha").mouseenter(
        function () {
            $("#flecha").attr("src", 'img/abajo-2.png');
        });
    $("#flecha").mouseleave(
        function () {
            $("#flecha").attr("src", 'img/abajo-1.png');
        });
});

$(function(){
    $("#india").on("click", function(e){
        $("#india").css({
            "background-color":"#f8e0b9"
        });
    });
    /*$("#india").on("click", function(e){
        $("#india").css({
            "background-color":"white"
        });
    });*/
    $("#mexico").on("click", function(e){
        $("#mexico").css({
            "background-color":"#f8e0b9"
        });
    });
    $("#nz").on("click", function(e){
        $("#nz").css({
            "background-color":"#f8e0b9"
        });
    });
    $("#peru").on("click", function(e){
        $("#peru").css({
            "background-color":"#f8e0b9"
        });
    });
    $("#islandia").on("click", function(e){
        $("#islandia").css({
            "background-color":"#f8e0b9"
        });
    });
    $("#japon").on("click", function(e){
        $("#japon").css({
            "background-color":"#f8e0b9"
        });
    });
});
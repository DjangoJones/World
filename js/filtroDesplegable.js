window.onload=function inicio(){
    
     $("#boton-ocultar").hide("slow");
  
    $("#boton-mostrar").click(function() {
        $("#contenido").show();
        $("#boton-ocultar").show();
        $("#boton-mostrar").hide();
    });


    $("#boton-ocultar").click(function() {
        $("#contenido").hide();
        $("#boton-ocultar").hide();
        $("#boton-mostrar").show();
    });
}
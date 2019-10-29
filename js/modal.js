//___VENTANA MENU MODAL____________________________
let modal=document.getElementById('miModal');
let abrir=document.getElementById('abrir');
let cerrar=document.getElementById('cerrar');

abrir.addEventListener('click',function(){
                       modal.style.display='block';
                       })
cerrar.addEventListener('click',function(){
                       modal.style.display='none';
})
window.addEventListener('click',function(e){
    if(e.target==flex){
        modal.style.display='none';
    }
})
   
//____CONTROL VETANAS DEL MENU__________________
let ventanaEstadisticas=document.getElementById('caja2');
let ventanaconteTips=document.getElementById('contTi');
let ventanaconteGraficas=document.getElementById('contGra');
let abrirEstadisticas=document.getElementById('botVenEsta');
let abrirPrincipal=document.getElementById('botVenPrincipal');

abrirEstadisticas.addEventListener('click',function(){
                        ventanaEstadisticas.style.display='block';
    
                        ventanaconteTips.style.display='none';
                        ventanaconteGraficas.style.display='none';
                        ventanaHistorial.style.display='none';
                        ventanaSeguidores.style.display='none';
                        ventanaSeguidos.style.display='none'; 
                        modal.style.display='none';
                       })
//___________________VENTANA PRINCIPAL________________________
abrirPrincipal.addEventListener('click',function(){
                        ventanaconteTips.style.display='block';
                        ventanaconteGraficas.style.display='block';
    
                        ventanaHistorial.style.display='none';
                        ventanaEstadisticas.style.display='none';
                        ventanaSeguidores.style.display='none';
                        ventanaSeguidos.style.display='none'; 
                        modal.style.display='none';
                       })


//___________________VENTANA HISTORIAL_________________________
let ventanaHistorial=document.getElementById('caja3');
let abrirHistorial=document.getElementById('botVenHisto');

abrirHistorial.addEventListener('click',function(){
                ventanaHistorial.style.display='block';
    
                ventanaEstadisticas.style.display='none';
                ventanaconteTips.style.display='none';
                ventanaconteGraficas.style.display='none';
                ventanaSeguidores.style.display='none';
                ventanaSeguidos.style.display='none'; 
                modal.style.display='none';
})

//___________________VENTANA SEGUIDORES_________________________
let ventanaSeguidores=document.getElementById('caja4');
let abrirSeguidores=document.getElementById('botVenSeguidores');

abrirSeguidores.addEventListener('click',function(){
                ventanaSeguidores.style.display='block';            
    
                ventanaHistorial.style.display='none';
                ventanaEstadisticas.style.display='none';
                ventanaconteTips.style.display='none';
                ventanaconteGraficas.style.display='none';
                ventanaSeguidos.style.display='none'; 
                modal.style.display='none';
    
})

//___________________VENTANA SEGUIDOS_________________________
let ventanaSeguidos=document.getElementById('caja5');
let abrirSeguidos=document.getElementById('botVenSeguidos');

abrirSeguidos.addEventListener('click',function(){
                ventanaSeguidos.style.display='block'; 
    
                ventanaSeguidores.style.display='none';            
                ventanaHistorial.style.display='none';
                ventanaEstadisticas.style.display='none';
                ventanaconteTips.style.display='none';
                ventanaconteGraficas.style.display='none';
                modal.style.display='none';
    
})




//_______________VENTANAS DE PAGINA DE ESTADISTICAS___________________
//estadisticas Deporte____
let contDeport=document.getElementById('contDeport');
let abrirDeport=document.getElementById('abrirDeporte');

abrirDeport.addEventListener('click',function(){
    
                       if(contDeport.style.display=='block'){
                                    contDeport.style.display='none'; 
                       }else{
                                    contDeport.style.display='block'; 
                            }
                       
                       })

//estadisticas Categorias
let contCategorias=document.getElementById('contCategorias');
let abrirCategorias=document.getElementById('abrirCategorias');

abrirCategorias.addEventListener('click',function(){
    
                       if(contCategorias.style.display=='block'){
                                    contCategorias.style.display='none'; 
                       }else{
                                    contCategorias.style.display='block'; 
                            }
                       
                       })

//estadisticas tipos
let contTipos=document.getElementById('contTipos');
let abrirTipos=document.getElementById('abrirTipos');

abrirTipos.addEventListener('click',function(){
    
                       if(contTipos.style.display=='block'){
                                    contTipos.style.display='none'; 
                       }else{
                                    contTipos.style.display='block'; 
                            }
                       
                       })

//estadisticas estacas
let contEstacas=document.getElementById('contEstacas');
let abrirEstacas=document.getElementById('abrirEstacas');

abrirEstacas.addEventListener('click',function(){
    
                       if(contEstacas.style.display=='block'){
                                    contEstacas.style.display='none'; 
                       }else{
                                    contEstacas.style.display='block'; 
                            }
                       
                       })

//estadisticas bookies
let contBookies=document.getElementById('contBookies');
let abrirBookies=document.getElementById('abrirBookies');

abrirBookies.addEventListener('click',function(){
    
                       if(contBookies.style.display=='block'){
                                    contBookies.style.display='none'; 
                       }else{
                                    contBookies.style.display='block'; 
                            }
                       
                       })

//estadisticas Probabilidad
let contProbabilidad=document.getElementById('contProbabilidad');
let abrirProbabilidad=document.getElementById('abrirProbabilidad');

abrirProbabilidad.addEventListener('click',function(){
    
                       if(contProbabilidad.style.display=='block'){
                                    contProbabilidad.style.display='none'; 
                       }else{
                                    contProbabilidad.style.display='block'; 
                            }
                       
                       })

//estadisticas HoraDia
let contHoraDia=document.getElementById('contHoraDia');
let abrirHoraDia=document.getElementById('abrirHoraDia');

abrirHoraDia.addEventListener('click',function(){
    
                       if(contHoraDia.style.display=='block'){
                                    contHoraDia.style.display='none'; 
                       }else{
                                    contHoraDia.style.display='block'; 
                            }
                       
                       })

//estadisticas HoraEvento
let contHoraEvento=document.getElementById('contHoraEvento');
let abrirHoraEvento=document.getElementById('abrirHoraEvento');

abrirHoraEvento.addEventListener('click',function(){
    
                       if(contHoraEvento.style.display=='block'){
                                    contHoraEvento.style.display='none'; 
                       }else{
                                    contHoraEvento.style.display='block'; 
                            }
                       
                       })
//estadisticas Archivo
let contArchivo=document.getElementById('contArchivo');
let abrirArchivo=document.getElementById('abrirArchivo');

abrirArchivo.addEventListener('click',function(){
    
                       if(contArchivo.style.display=='block'){
                                    contArchivo.style.display='none'; 
                       }else{
                                    contArchivo.style.display='block'; 
                            }
                       
                       })
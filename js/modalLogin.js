let modal=document.getElementById('miModalLogin');
let abrir=document.getElementById('btIniciSesion');
let cerrar=document.getElementById('cerrarmodal');

abrir.addEventListener('click',function(){
                       modal.style.display='block';
                       })
cerrar.addEventListener('click',function(){
                       modal.style.display='none';
})
window.addEventListener('click',function(e){
    if(e.target==flexible){
        modal.style.display='none';
    }
})


let abrirPlantillas=document.getElementById('btiniciasesion');
let modalL=document.getElementById('miModalLogin');
let cerrarL=document.getElementById('cerrarmodal');

abrirPlantillas.addEventListener('click',function(){
                       modalL.style.display='block';
                       })
cerrarL.addEventListener('click',function(){
                       modalL.style.display='none';
})
window.addEventListener('click',function(e){
    if(e.target==flexible){
        modalL.style.display='none';
    }
})


let abrirPlantillasR=document.getElementById('btregistrate');
let modalR=document.getElementById('miModalRegistro');
let cerrarR=document.getElementById('cerrarmodalRegistro');

abrirPlantillasR.addEventListener('click',function(){
                       modalR.style.display='block';
                       })
cerrarL.addEventListener('click',function(){
                       modalR.style.display='none';
})
window.addEventListener('click',function(a){
    if(a.target==flexibleR){
        modalR.style.display='none';
    }
})
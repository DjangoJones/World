window.addEventListener("scroll", function(){
    if (this.scrollY >= 1){
        tuFuncion();
    }
}, false);



function tuFuncion(){
    $('html, body').animate({scrollTop:1000}, 'slow');
}
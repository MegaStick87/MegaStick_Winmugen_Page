/* Oh, hiii! u see me? lol */
zaehler=0; 
Show=false;
function right(e) {
    if(e.which == 3 || e.which == 2){
        if(Show==true){
            Show=false;
            alert("Aahh, ahh, pls, don't do that again...");
            alert("You do not need to right click... :(");
            for(i=0;i!=zaehler;i++)alert("You don't need to do that, please! \n"+(zaehler-i)+"\nThe more you do this, the more clicks will increase, so don't try it anymore. \n-MegaStick");
            zaehler+=10;
            return false;
        }
        if(Show==false){
            Show=true;
        }
    }
}
document.onmousedown=right;
if (document.layers) window.captureEvents(Event.MOUSEDOWN);
window.onmousedown=right;      

function scrollToTop() {
window.scrollTo({top: 0, behavior: 'smooth'});
}   
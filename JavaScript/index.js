var menu = document.getElementById("liste");
var visible = false;
        
menu.style.display = "none";
        
function Menu(){
    if(visible == false){
            
        menu.style.display = "block";
        visible = true;

    } else if(visible == true){

        menu.style.display = "none";
        visible = false;

    }
}
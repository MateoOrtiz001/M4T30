var oscurecido = false;

function oscurecer(){
    if(oscurecido == false){
        document.getElementById("oscuro").style.display = "block";
        var tituloh1 = document.getElementsByTagName("h1");
        for(var i=0;i<tituloh1.length;i++){
            tituloh1[i].style.color = "black";
            tituloh1[i].style.textShadow = " 0px 0px 0px black";
        }
        oscurecido = true;
    }else{
        document.getElementById("oscuro").display = "none";
        oscurecido = false;
    }
}
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

var cGaleriaNum = 1;
function adelanteGaleria(){
    var imagenGaleria = document.getElementById('cGImg');
    if(cGaleriaNum == 1){
        imagenGaleria.src = "imagenes/cGaleriaImgs/02.jpg";
        cGaleriaNum = 2;
    }else if(cGaleriaNum == 2){
        imagenGaleria.src = "imagenes/cGaleriaImgs/03.jpg";
        cGaleriaNum = 3;
    }else if(cGaleriaNum == 3){
        imagenGaleria.src = "imagenes/cGaleriaImgs/04.jpg";
        cGaleriaNum = 4;
    }else if(cGaleriaNum == 4){
        imagenGaleria.src = "imagenes/cGaleriaImgs/05.jpg";
        cGaleriaNum = 5;
    }else if(cGaleriaNum == 5){
        imagenGaleria.src = "imagenes/cGaleriaImgs/06.jpg";
        cGaleriaNum = 6;
    }else if(cGaleriaNum == 6){
        imagenGaleria.src = "imagenes/cGaleriaImgs/07.jpg";
        cGaleriaNum = 7;
    }else if(cGaleriaNum == 7){
        imagenGaleria.src = "imagenes/cGaleriaImgs/08.jpg";
        cGaleriaNum = 8;
    }else if(cGaleriaNum == 8){
        imagenGaleria.src = "imagenes/cGaleriaImgs/09.jpg";
        cGaleriaNum = 9;
    }else if(cGaleriaNum == 9){
        imagenGaleria.src = "imagenes/cGaleriaImgs/10.jpg";
        cGaleriaNum = 10;
    }else if(cGaleriaNum == 10){
        imagenGaleria.src = "imagenes/cGaleriaImgs/11.jpg";
        cGaleriaNum = 11;
    }else if(cGaleriaNum == 11){
        imagenGaleria.src = "imagenes/cGaleriaImgs/12.jpg";
        cGaleriaNum = 12;
    }else if(cGaleriaNum == 12){
        imagenGaleria.src = "imagenes/cGaleriaImgs/13.jpg";
        cGaleriaNum = 13;
    }else if(cGaleriaNum == 13){
        imagenGaleria.src = "imagenes/cGaleriaImgs/01.jpg";
        cGaleriaNum = 1;
    }
}

function atrasGaleria(){
    var imagenGaleria = document.getElementById('cGImg');
    if(cGaleriaNum == 1){
        imagenGaleria.src = "imagenes/cGaleriaImgs/13.jpg";
        cGaleriaNum = 13;
    }else if(cGaleriaNum == 2){
        imagenGaleria.src = "imagenes/cGaleriaImgs/01.jpg";
        cGaleriaNum = 1;
    }else if(cGaleriaNum == 3){
        imagenGaleria.src = "imagenes/cGaleriaImgs/02.jpg";
        cGaleriaNum = 2;
    }else if(cGaleriaNum == 4){
        imagenGaleria.src = "imagenes/cGaleriaImgs/03.jpg";
        cGaleriaNum = 3;
    }else if(cGaleriaNum == 5){
        imagenGaleria.src = "imagenes/cGaleriaImgs/04.jpg";
        cGaleriaNum = 4;
    }else if(cGaleriaNum == 6){
        imagenGaleria.src = "imagenes/cGaleriaImgs/05.jpg";
        cGaleriaNum = 5;
    }else if(cGaleriaNum == 7){
        imagenGaleria.src = "imagenes/cGaleriaImgs/06.jpg";
        cGaleriaNum = 6;
    }else if(cGaleriaNum == 8){
        imagenGaleria.src = "imagenes/cGaleriaImgs/07.jpg";
        cGaleriaNum = 7;
    }else if(cGaleriaNum == 9){
        imagenGaleria.src = "imagenes/cGaleriaImgs/08.jpg";
        cGaleriaNum = 8;
    }else if(cGaleriaNum == 10){
        imagenGaleria.src = "imagenes/cGaleriaImgs/09.jpg";
        cGaleriaNum = 9;
    }else if(cGaleriaNum == 11){
        imagenGaleria.src = "imagenes/cGaleriaImgs/10.jpg";
        cGaleriaNum = 10;
    }else if(cGaleriaNum == 12){
        imagenGaleria.src = "imagenes/cGaleriaImgs/11.jpg";
        cGaleriaNum = 11;
    }else if(cGaleriaNum == 13){
        imagenGaleria.src = "imagenes/cGaleriaImgs/12.jpg";
        cGaleriaNum = 12;
    }
}
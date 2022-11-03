
var cGaleriaNum = 1;
function adelanteGaleria(){
    var imagenGaleria = document.getElementById('cGImg');
    if(cGaleriaNum == 1){
        imagenGaleria.src = "images/fondo03.jpg";
        cGaleriaNum = 2;
    }else if(cGaleriaNum == 2){
        imagenGaleria.src = "images/fondo04.jpg";
        cGaleriaNum = 3;
    }else if(cGaleriaNum == 3){
        imagenGaleria.src = "images/fondo06.jpg";
        cGaleriaNum = 4;
    }else if(cGaleriaNum == 4){
        imagenGaleria.src = "images/fondo07.jpg";
        cGaleriaNum = 5;
    }else if(cGaleriaNum == 5){
        imagenGaleria.src = "images/fondo02.jpg";
        cGaleriaNum = 1;
    }
}

function atrasGaleria(){
    var imagenGaleria = document.getElementById('cGImg');
    if(cGaleriaNum == 1){
        imagenGaleria.src = "images/fondo07.jpg";
        cGaleriaNum = 5;
    }else if(cGaleriaNum == 2){
        imagenGaleria.src = "images/fondo02.jpg";
        cGaleriaNum = 1;
    }else if(cGaleriaNum == 3){
        imagenGaleria.src = "images/fondo03.jpg";
        cGaleriaNum = 2;
    }else if(cGaleriaNum == 4){
        imagenGaleria.src = "images/fondo04.jpg";
        cGaleriaNum = 3;
    }else if(cGaleriaNum == 5){
        imagenGaleria.src = "images/fondo06.jpg";
        cGaleriaNum = 4;
    }
}
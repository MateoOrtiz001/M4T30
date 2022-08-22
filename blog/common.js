//** Función de la palabra palindromo */
function palindromo(palabra) { //Creamos la función que se asegurará si la palabra es palindromo, retorna True si es palindromo y False si no
    const myArray = palabra.split(''); //Creamos una lista con cada una de los caracteres de la palabra
    let sizeArray = myArray.length; //Tomamos el tamaño de la palabra
    var j = sizeArray; //Creamos un índice a partir del tamaño de la palabra
    for(var i = 0; i<= sizeArray/2; i++){ //Empezamos un bucle desde el primer caracter hasta la mitad de la palabra
        if(myArray[i] != myArray[j-1]){ //Analizamos si el caracter es el mismo en la posición i (que va aumentando) y en la posición j (que va decreciendo)
            return false;
        }
        j--; //Tomamos el índice anterior
    }
    return true; //Si ningún indice es distinto entonces retornamos true
}

function validarPalindromo() { //Creamos la función que llamará el HTML
    let palabra = document.getElementById('palabra').value.replace(/ /g, ""); //Tomamos el valor del input
    let tamPalabra = palabra.length; //Tomamos el tamaño del valor
    if(tamPalabra == 0){ //Observamos que el valor ingresado tenga caracteres (que no esté vacio)
        document.getElementById("resultado").innerHTML = " Escriba algo xd"; //Si es así, entonces se escribe el texto
        return; //Acaba la funcion
    }
    if (palindromo(palabra)) { //Si el valor sí tiene caracteres, entonces llamamos la función palindromo con el valor
        document.getElementById("resultado").innerHTML = " Es palindromo :)"; //Si el retorno de la función es true, entonces el valor es palindromo
    } else {
        document.getElementById("resultado").innerHTML = " No es palindromo :("; //Si el retorno es false, entonces no es palindromo
    }
}

var fondoCambiado = false;

//** Función cambio de fondo */
function cambiarFondo() {
    var texto = document.getElementById("pc"); //Tomamos el div con el id "pc"
    if(fondoCambiado == false){
        document.body.style.background ="url(imagenes/fondo.jpg)"; //Cambia la imagen de fondo
        texto.style.color = "black"; //Cambiamos el color de texto de los div con el id "pc"
        fondoCambiado = true;
    }else{
        document.body.style.background ="url(imagenes/fondo2.jpg)"; //Cambia la imagen de fondo
        texto.style.color = "white"; //Cambiamos el color de texto de los div con el id "pc"
        fondoCambiado = false;
    }

	
}


/** Función datos numeros */
function paridad(numero){
    if(numero%2){
        return true;
    }
    return false;
}

function ecuacionPar(numero,simbolo){
    if(simbolo == "positivo"){
        if(numero == 0){
            return "0=2*0";
        }
        for(var i=0;i<numero;i++){
            if(2*i==numero){
                var retorno = numero + " = 2 * " + i;
                return retorno;
            }
            if((2*i)+1 ==numero){
                var retorno = numero + " = 2 * " + i + " + 1";
                return retorno;
            }
        }
    }
    if(simbolo == "negativo"){
        for(var i=0;i>numero;i--){
            if(2*i==numero){
                var retorno = numero + " = 2 * " + i;
                return retorno;
            }
            if((2*i)+1 ==numero){
                var retorno = numero + " = 2 * " + i + " + 1";
                return retorno;
            }
        }
    }
}

function primo(numero){ //Retorna -1 si es un número menor o igual a 1, 0 si es compuesto y 1 si es primo
    if(numero<2){
        return -1;
    }
    var aux=1;
    for(var i = 2;i<numero;i++){
        for(var k = 1;k<numero;k++){
            aux = i * k;
            if(aux>numero){
                break;
            }
            if(aux==numero){
                return 0;
            }
        }
    }
    return 1;
}

function binario(numero){
    var binario = [];
    var i = 0;
    while(numero >= 1){
        binario[i] = Math.floor(numero) % 2;
        numero = Math.floor(numero) / 2;
        i++;
    }
    var aux = []
    i = binario.length-1;
    for(var j = 0;j<binario.length;j++){
        aux[j] = binario[i];
        i--;
    }
    return aux.toString();
}

function relacion(numero){
    if(numero>=0){
        return "Entero como relacion: ("+numero+",0)";
    }else{
        numero = numero * -1;
        return "Entero como relacion: (0,"+numero+")";
    }
}

function datosNumeros(){
    let numero = document.getElementById('number').value;
    console.log(numero);
    var pa = "";
    var pr = "";
    var eP = "";
    var bin = "";
    var rel = "";

    if(paridad(numero)==true){
        pa = "El número es impar";
    }else{
        pa = "El número es par";
    }
    if(numero>=0){
        eP = ecuacionPar(numero,"positivo");
    }else{
        eP = ecuacionPar(numero,"negativo");
    }
    
    if(primo(numero) == 0){
        pr = "El número es compuesto";
    }else if(primo(numero) == 1){
        pr = "El número es primo";
    }else{
        pr = "El número no es ni compuesto ni primo"
    }
    if(numero == ""){
        return;
    }

    if(numero>=0){
        bin = "En binario: " + binario(numero).replace(/,/g, "");
    }else{
        bin = "El número no tiene representación binaria (sin base)"
    }
    rel = relacion(numero);
    
    var numeros = document.getElementsByClassName("iN");

    document.getElementById("infoNumeros").style.display = "block";
    document.getElementById("num").innerHTML = numero;
    numeros[0].innerHTML = pa + " (" + eP + ").";
    numeros[1].innerHTML = pr;
    numeros[2].innerHTML = bin;
    numeros[3].innerHTML = rel;
    console.log(pa + " " + pr);

}

/* Galeria */

var img = 1;

function imgSiguiente(){
    var imagenGaleria = document.getElementById("imgGaleria");
    if(img == 1){
        imagenGaleria.src = "imagenes/iGaleria/paisaje02.jpg";
        img = 2;
    }else if(img ==2){
        imagenGaleria.src = "imagenes/iGaleria/paisaje03.jpg";
        img = 3;
    }else if(img ==3){
        imagenGaleria.src = "imagenes/iGaleria/paisaje04.jpg";
        img = 4 ;
    }else if(img ==4){
        imagenGaleria.src = "imagenes/iGaleria/paisaje05.jpg";
        img = 5;
    }else{
        imagenGaleria.src = "imagenes/iGaleria/paisaje01.jpg";
        img = 1;
    }
}

function imgAnterior(){
    var imagenGaleria = document.getElementById("imgGaleria");
    if(img == 1){
        imagenGaleria.src = "imagenes/iGaleria/paisaje05.jpg";
        img = 5;
    }else if(img ==2){
        imagenGaleria.src = "imagenes/iGaleria/paisaje01.jpg";
        img = 1;
    }else if(img ==3){
        imagenGaleria.src = "imagenes/iGaleria/paisaje02.jpg";
        img = 2 ;
    }else if(img ==4){
        imagenGaleria.src = "imagenes/iGaleria/paisaje03.jpg";
        img = 3;
    }else{
        imagenGaleria.src = "imagenes/iGaleria/paisaje04.jpg";
        img = 4;
    }
    
}
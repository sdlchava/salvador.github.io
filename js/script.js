let menuVisible = false;
//Funcion que muestra u oculta el menu
function MostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList = "" ;
        menuVisible = false;
    } else {
        document.getElementById("nav").classList = "responsive" ;
        menuVisible = true;
    }
}

function seleccionar(){
    //Ocultar menu una vez se haya seleccioando un opcion
    document.getElementById("nav").classList = "" ;
    menuVisible = false;
}



//Funcion para las habilidades (Skills)
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight = skills.getBoundingClientRect().top;
    if (distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("htmlcss")
        habilidades[1].classList.add("ensambles")
        habilidades[2].classList.add("comunicacion")
        habilidades[3].classList.add("trabajoequipo")
        habilidades[4].classList.add("dedicacion")
        habilidades[5].classList.add("creatividad")
    }
};

//Detectar el scrolling para aplicar la animacion de la barra de habilidades (Skills)
window.onscroll = function (){
    efectoHabilidades();
}
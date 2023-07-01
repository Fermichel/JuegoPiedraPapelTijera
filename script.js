
const PIEDRA="piedra";
const PAPEL="papel";
const TIJERA="tijera";

const EMPATE= 0;
const GANASTE= 1;
const PERDISTE=2;

const piedraBtn = document.getElementById("piedra");
const papelBtn = document.getElementById("papel");
const tijeraBtn = document.getElementById("tijera");
const resultadoTexto= document.getElementById("playTitulo");
const usuarioImg= document.getElementById("usuario-img");
const maquinaImg= document.getElementById("maquina-img");

piedraBtn.addEventListener("click",()=>{
    play(PIEDRA);
});

papelBtn.addEventListener("click",()=>{
    play(PAPEL);
});

tijeraBtn.addEventListener("click",()=>{
    play(TIJERA);
});

function play(opcionUsuario){
    
    let opcionMaquina = modificacionMaquina();
        
    usuarioImg.src="img/"+ opcionUsuario +".png";
    maquinaImg.src="img/"+ opcionMaquina +".png";

    let resultado= juego(opcionUsuario,opcionMaquina);    
        
        switch(resultado){
            case EMPATE:
                resultadoTexto.innerHTML="Empataste";
                break;
            case GANASTE:
                resultadoTexto.innerHTML="Ganaste";
                break;
            case PERDISTE:
                resultadoTexto.innerHTML="Perdiste";
                break;
        };  
}



function modificacionMaquina(){
    let numero=Math.floor(Math.random()*3);
    switch(numero){
        case 0:
            return PIEDRA;
        case 1:
            return PAPEL;
        case 2:
            return TIJERA;
    }
}



function juego(opcionUsuario,opcionMaquina){

    if(opcionUsuario === opcionMaquina){
        return EMPATE;
    }else if(opcionUsuario===PIEDRA){
        if (opcionMaquina===PAPEL){
            return PERDISTE;
        }else if(opcionMaquina===TIJERA){
            return GANASTE;
        }
    }else if(opcionUsuario===PAPEL){
        if(opcionMaquina===TIJERA){
            return PERDISTE;
        }else if(opcionMaquina===PIEDRA){
            return GANASTE;
        }
    }else if (opcionUsuario===TIJERA){
            if(opcionMaquina===PIEDRA){
                return PERDISTE;
            }else if (opcionMaquina===PAPEL){
                return GANASTE;
            }
        }
}

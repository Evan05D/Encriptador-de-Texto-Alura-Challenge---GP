//Encriptar texto.
const btnEncriptar = document.querySelector('.encriptar');
const btnDesencriptar = document.querySelector('.desencriptar');
const textEncriptar = document.querySelector('#ingrese-texto');
const textEncriptado = document.querySelector('#mostrarEncriptado');
const quitarElementos = document.querySelector('#elementos');
const btnCopiar = document.querySelector('.copiar');
const mensajeDeCopiado = document.querySelector('span');

btnCopiar.style.display = 'none';
mensajeDeCopiado.style.display = 'none';

function solominusculas(e){
    key= e.keycode || e.which;
    let teclado = String.fromCharCode(key);
    let minusculas = " abcdefghijklmnñopqrstuvwxyz";
    let especiales = "8-37-38-46";
    let teclado_especial = false;   

    for(var i in especiales){
        if(key==especiales[i]){
            teclado_especial=true;
        }
    }

    if(minusculas.indexOf(teclado) == -1 && !teclado_especial){
        return false;
    }
}

btnEncriptar.addEventListener('click',function(){
    let mensaje = textEncriptar.value;
    let mensajeEncriptado = mensaje
                        .replaceAll("e","enter")
                        .replaceAll("i","ines")
                        .replaceAll("o","ober")
                        .replaceAll("a","ai")
                        .replaceAll("u","ufat");
    textEncriptado.value = mensajeEncriptado;
    quitarElementos.style.display = 'none';
    btnCopiar.style.display = 'block';
})


btnDesencriptar.addEventListener('click',function(){
    let mensaje = textEncriptar.value;
    let mensajeEncriptado = mensaje
                        .replaceAll("enter","e")
                        .replaceAll("ines","i")
                        .replaceAll("ober","o")
                        .replaceAll("ai","a")
                        .replaceAll("ufat","u");
    textEncriptado.value = mensajeEncriptado;
    quitarElementos.style.display = 'none';
})


btnCopiar.addEventListener('click',function(){
    
    let mensajeEncriptado = textEncriptado.value;
    navigator.clipboard.writeText(mensajeEncriptado);
    mensajeDeCopiado.style.display = 'inline';
    setTimeout(function(){
        mensajeDeCopiado.style.display = "none";
    }, 1000);
})
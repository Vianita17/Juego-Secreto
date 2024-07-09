//Logica del numero secreto con Java Curso 2
let numeroSecreto;
let intentos;
let numerosSorteados = [];
let numeroMaximo = 10;
condicionesInciales();

function numeroAleatorio(){
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;
    //si ya sorteamos todos los numeros
    if(numerosSorteados.length == numeroMaximo){//Conocido como Validador, Añadir siempre una verificacion
        septupTexto('p', `Ya se sortearon todos lo numeros posibles. Gracias por jugar!`);
    }else{
        //si el numero generado esta en la lista
        if(numerosSorteados.includes(numeroGenerado)){
            return numeroAleatorio();//Recursividad
        }else{
            numerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
    
}

function condicionesInciales(){
    septupTexto('h1','Juego del numero secreto');
    septupTexto('p', `Escoge un numero del  al ${numeroMaximo}`);
    numeroSecreto = numeroAleatorio();
    intentos = 1;
    
    document.querySelector('#reiniciar').setAttribute('disabled','true');//Asegurando que Reiniciar este Deshabilitado
}

function septupTexto(elemento, texto){
    //Generalizar los mensajes 
    let ElementoHTML = document.querySelector(elemento); //Acceder en la parte del HTML
    ElementoHTML.innerHTML = texto;
}

function IntUsuario() {
    //Logica para el boton de Ingresar
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    /*
    //Observacion del funcionamiento en la consola
    console.log(typeof(numeroDeUsuario));
    console.log(numeroDeUsuario);
    console.log(typeof(numeroSecreto));
    console.log(numeroSecreto);
    console.log(numeroDeUsuario == numeroSecreto);
    */
    if (numeroDeUsuario == numeroSecreto){
        //Parte donde el usario acierta el numero
        septupTexto('p', `Acertaste el numero, Lo intentaste en ${intentos} ${(intentos == 1) ? 'vez' : 'veces' }`);
        document.getElementById('reiniciar').removeAttribute('disabled');//Habilitar el botton de reinicar
        
    }else{
        //Parte donde el usario no acierta el numero
        if(numeroDeUsuario > numeroSecreto){
            septupTexto('p', 'El numero es menor')
        }else {
            septupTexto('p', 'El numero es mayor')
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function reiniciarJuego(){
    //Limpiar la caja en blanco
    limpiarCaja();
    //Restablecer las condiciones de un incio
    condicionesInciales();
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}


/*//Desafio 2.3 funcion que recibe 3 numeros y saca el promedio en la consola para no tardar 
let numeros = [];
let suma = 0
console.log("Promedio de 3 numeros dados por el usuario")
function Calculopromedio(cadena){
    for(let i = 0; i<3;i++){
        console.log(`Sumatoria hasta el momento con el numero ${i + 1 }`);
        console.log(numeros[i]);
        suma = suma + parseInt(numeros[i]);
        console.log(suma);
    }
    return suma / 3;
}
for(let i = 0; i<3;i++){
    let numero = prompt("Puede ingresar el numero que quieres ingresar: ");
    console.log(numero);
    numeros.push(numero);
}
let promedio = Calculopromedio(numeros);
console.log("promedio");
console.log(promedio);
*/


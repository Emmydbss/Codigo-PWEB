function numeroComputador(){
    let numero_computador=Math.floor(Math.random()*100)+1;
    return numero_computador;
}

function numeroUsuario(){
    let numero_usuario=Number(prompt("Qual número de 1 a 100 você acha que é?"));
    return numero_usuario;
}

function conferirNumeros(numero_computador){
    let tentativas = 10;

    for(let e=1; e<=tentativas; e++){

        let numero_usuario=numeroUsuario();

        if( numero_computador == numero_usuario ){
            alert("VOCÊ ACERTOU!!!\nO número secreto é "+numero_computador);
            return;
        }
        else if(numero_computador > numero_usuario){
            alert("O número secreto é maior!!!");
        }
        else{
            alert("O número secreto é menor!!!");
        }
        alert("Você ainda tem " + (tentativas - e) + " tentativa(s).");

    }

    alert("Você perdeu!!!\nO número secreto era "+numero_computador);
    
}

function Jogo(){
    do {
        conferirNumeros(numeroComputador());
        resp = Number(prompt("Deseja continuar jogando?\n1 - Sim\n2 - Não"));
    } while (resp === 1);
}
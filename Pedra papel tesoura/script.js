function usuario() {
    let resposta_usuario = Number(prompt("Escolha:\n1-PEDRA\n2-PAPEL\n3-TESOURA"));
    return resposta_usuario;
}

function computador() {
    let resposta_computador = Math.floor(Math.random() * 3) + 1;
    return resposta_computador;
}

function jogo() {
    do {
        let resposta_usuario = usuario();
        let resposta_computador = computador();

        ganhador(resposta_computador, resposta_usuario);

        let resp = Number(prompt("Deseja continuar jogando?\n1 - Sim\n2 - Não"));

    } while (resp = 1);
}

function ganhador(resposta_computador, resposta_usuario) {

    if (resposta_usuario == 1) {
        if (resposta_computador == 1) {
            alert("O Computador escolheu PEDRA!\nRESULTADO: EMPATE!");
        }
        else if (resposta_computador == 2) {
            alert("O Computador escolheu PAPEL!\nRESULTADO: COMPUTADOR GANHOU!");
        }
        else {
            alert("O Computador escolheu TESOURA!\nRESULTADO: VOCÊ GANHOU!");
        }
    }
    if (resposta_usuario == 2) {
        if (resposta_computador == 1) {
            alert("O Computador escolheu PEDRA!\nRESULTADO: VOCÊ GANHOU!");
        }
        else if (resposta_computador == 2) {
            alert("O Computador escolheu PAPEL!\nRESULTADO: EMPATE!");
        }
        else {
            alert("O Computador escolheu TESOURA!\nRESULTADO: COMPUTADOR GANHOU!");
        }
    }
    if (resposta_usuario == 3) {
        if (resposta_computador == 1) {
            alert("O Computador escolheu PEDRA!\nRESULTADO: COMPUTADOR GANHOU!");
        }
        else if (resposta_computador == 2) {
            alert("O Computador escolheu PAPEL!\nRESULTADO: VOCÊ GANHOU!");
        }
        else {
            alert("O Computador escolheu TESOURA!\nRESULTADO: EMPATE!");
        }
    }
} 
function listaDePalavras() {
    let palavras = ["computador", "internet", "Emilly", "cachorro", "abacaxi", "caderno", "escola", "janela", "montanha", "chuva", "bicicleta", "praia", "amarelo", "violão", "girassol", "guitarra", "mochila", "panela", "relógio", "avião", "gato", "grama", "ponte", "estrada", "banco", "telefone", "notebook", "caneta", "cobertor", "nuvem"];
    let palavraIndice = Math.floor(Math.random() * palavras.length);
    return palavras[palavraIndice];
}

function verificarPalavra(letra, palavra, palavraSecreta) {
    let palavraNova = "";

    for (let e = 0; e < palavra.length; e++) {
        if (palavra[e] == letra) {
            palavraNova += letra;
        } else {
            palavraNova += palavraSecreta[e];
        }
    }

    return palavraNova;
}

function Jogo() {
    do {
        let palavraSorteada = listaDePalavras();
        let palavraSecreta = "_".repeat(palavraSorteada.length);
        let tentativas = 6;

        do {
            let letra = prompt("Digite uma letra:");
            let palavraNovaSecreta = verificarPalavra(letra, palavraSorteada, palavraSecreta);

            if (palavraNovaSecreta == palavraSecreta) {
                tentativas -= 1;
            } else {
                palavraSecreta = palavraNovaSecreta;
            }

            alert("Palavra: " + palavraSecreta + "\nTentativas restantes: " + tentativas);

        } while (tentativas > 0 && palavraSecreta != palavraSorteada);

        if (palavraSecreta == palavraSorteada) {
            alert("Parabéns! Você acertou a palavra: " + palavraSorteada);
        } else {
            alert("Você perdeu! A palavra era: " + palavraSorteada);
        }

        var resp = Number(prompt("Deseja jogar novamente?\n(1)Sim\n(2)Não"));

    } while (resp==1);
}

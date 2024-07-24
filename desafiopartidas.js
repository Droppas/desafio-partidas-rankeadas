// Desafio Partidas Rankeadas
let vitorias = 10;
let derrotas = 5;

function main(){
    let saldo = vitorias - derrotas;
    let nivel = ranque(saldo);
    imprimir(saldo, nivel);
}

function ranque(saldo){
    if (saldo <= 10){
        return "Ferro";
    }else if(saldo >= 11 && saldo <= 20){
        return "Bronze"
    }else if(saldo >= 21 && saldo <= 50){
        return "Prata"
    }else if(saldo >= 51 && saldo <= 80){
        return "Ouro"
    }else if(saldo >= 81 && saldo <= 90){
        return "Diamante"
    }else if(saldo >= 91 && saldo <= 100){
        return "Lendário"
    }else if(saldo >= 101){
        return "Imortal"
    }
}

function imprimir(saldo, nivel){
    console.log(`O Herói tem de saldo de ${saldo} está no nível de ${nivel}`);
}

main();
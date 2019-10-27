
// criando o tabuleiro
var tabuleiro = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
]// var tabuleiro.new Array();

/*
var liquadro1 =["1","2 ","3 "],
    liquadro2 =[" 4","5X","6 "],
    liquadro3 =[" 7","8 ","9X"];

tabuleiro.push(liquadro1);
tabuleiro.push(liquadro2);
tabuleiro.push(liquadro3);    */
var vezJogada = 1; // variavel que ira verificar a vez dos jogadores 

// crainado as referencias aos elementos da pagina do tabulario
var outq1 = document.getElementById("outq1");
var outq2 = document.getElementById("outq2");
var outq3 = document.getElementById("outq3");
var outq4 = document.getElementById("outq4");
var outq5 = document.getElementById("outq5");
var outq6 = document.getElementById("outq6");
var outq7 = document.getElementById("outq7");
var outq8 = document.getElementById("outq8");
var outq9 = document.getElementById("outq9");

//chamando a function que ira setar o sinal do jogador da vez
outq1.addEventListener('click', function () { escolherPosicaoTabuleiro(0, 0, 1) });
outq2.addEventListener('click', function () { escolherPosicaoTabuleiro(0, 1, 2) });
outq3.addEventListener('click', function () { escolherPosicaoTabuleiro(0, 2, 3) });
outq4.addEventListener('click', function () { escolherPosicaoTabuleiro(1, 0, 4) });
outq5.addEventListener('click', function () { escolherPosicaoTabuleiro(1, 1, 5) });
outq6.addEventListener('click', function () { escolherPosicaoTabuleiro(1, 2, 6) });
outq7.addEventListener('click', function () { escolherPosicaoTabuleiro(2, 0, 7) });
outq8.addEventListener('click', function () { escolherPosicaoTabuleiro(2, 1, 8) });
outq9.addEventListener('click', function () { escolherPosicaoTabuleiro(2, 2, 9) });

function escolherPosicaoTabuleiro(linha, coluna, index) {
    var icones = document.createElement('i');//criando um elemento i para ser criado a class do fontasow


    if (vezJogada % 2 != 0) {//jogador 1 - sempre que a variavel vezjogada tiver valor impar
        if (tabuleiro[linha][coluna] == "") {//verifica se o tabuleiro esta vazio nesta posição

            tabuleiro[linha][coluna] = "X";//adiciona sinal x para vetor 
            switch (index) {//verifica  qual valor da variavel index para selecionar saida
                case 1://caso 1
                    icones.className = "fas fa-times" //criando class do font no elemento i que  
                    sai1.appendChild(icones);//definindo qual id ela pertence
                    break;//quebrando 
                case 2:
                    icones.className = "fas fa-times"
                    sai2.appendChild(icones);
                    break;
                case 3:
                    icones.className = "fas fa-times"
                    sai3.appendChild(icones);
                    break;
                case 4:
                    icones.className = "fas fa-times"
                    sai4.appendChild(icones);
                    break;
                case 5:
                    icones.className = "fas fa-times"
                    sai5.appendChild(icones);
                    break;
                case 6:
                    icones.className = "fas fa-times"
                    sai6.appendChild(icones);
                    break;
                case 7:
                    icones.className = "fas fa-times"
                    sai7.appendChild(icones);
                    break;;
                case 8:
                    icones.className = "fas fa-times"
                    sai8.appendChild(icones);
                    break;
                case 9:
                    icones.className = "fas fa-times"
                    sai9.appendChild(icones);
                    break;
                default:
            }
        }
        //sai.textContent = "X";
    } else {
        if (tabuleiro[linha][coluna] != "") {

            tabuleiro[linha][coluna] = "O";
            switch (i) {
                case 1:
                    //  outq1.textContent = "0";
                    icones.className = "far fa-circle"
                    sai1.appendChild(icones);
                    break;
                case 2:
                    icones.className = "far fa-circle"
                    sai2.appendChild(icones);
                    break;
                case 3:
                    icones.className = "far fa-circle"
                    sai3.appendChild(icones);
                    break;
                case 4:
                    icones.className = "far fa-circle"
                    sai4.appendChild(icones);
                    break;
                case 5:
                    icones.className = "far fa-circle"
                    sai5.appendChild(icones);
                    break;
                case 6:
                    icones.className = "far fa-circle"
                    sai6.appendChild(icones);
                    break;
                case 7:
                    icones.className = "far fa-circle"
                    sai7.appendChild(icones);
                    break;
                case 8:
                    icones.className = "far fa-circle"
                    sai8.appendChild(icones);
                    break;
                case 9:
                    icones.className = "far fa-circle"
                    sai9.appendChild(icones);
                    break;
                default:
            }
        }
    }
    //alert(tabuleiro[linha][coluna]);
    //alert(tabuleiro)
    vezJogada++;
    verificarFimDeJogo();
}//fim da function escolher Posição Tabuleiro

function verificarFimDeJogo() {
    // verificar se tem ganhador
    if ((tabuleiro[0][0] == 'X' && tabuleiro[0][1] == 'X' && tabuleiro[0][2] == 'X') ||  // linha 1
        (tabuleiro[1][0] == 'X' && tabuleiro[1][1] == 'X' && tabuleiro[1][2] == 'X') ||  // linha 2
        (tabuleiro[2][0] == 'X' && tabuleiro[2][1] == 'X' && tabuleiro[2][2] == 'X') ||  // linha 3
        (tabuleiro[0][0] == 'X' && tabuleiro[1][0] == 'X' && tabuleiro[2][0] == 'X') ||  // coluna 1
        (tabuleiro[0][1] == 'X' && tabuleiro[1][1] == 'X' && tabuleiro[2][1] == 'X') ||  // coluna 2
        (tabuleiro[0][2] == 'X' && tabuleiro[1][2] == 'X' && tabuleiro[2][2] == 'X') ||  // coluna 3
        (tabuleiro[0][0] == 'X' && tabuleiro[1][1] == 'X' && tabuleiro[2][2] == 'X')) {  // diagonal
        // ganhou = true;
        alert("Parabéns, jogador 1 ganhou!");
    } else if ((tabuleiro[0][0] == 'O' && tabuleiro[0][1] == 'O' && tabuleiro[0][2] == 'O') ||  // linha 1
        (tabuleiro[1][0] == 'O' && tabuleiro[1][1] == 'O' && tabuleiro[1][2] == 'O') ||  // linha 2
        (tabuleiro[2][0] == 'O' && tabuleiro[2][1] == 'O' && tabuleiro[2][2] == 'O') ||  // linha 3
        (tabuleiro[0][0] == 'O' && tabuleiro[1][0] == 'O' && tabuleiro[2][0] == 'O') ||  // coluna 1
        (tabuleiro[0][1] == 'O' && tabuleiro[1][1] == 'O' && tabuleiro[2][1] == 'O') ||  // coluna 2
        (tabuleiro[0][2] == 'O' && tabuleiro[1][2] == 'O' && tabuleiro[2][2] == 'O') ||  // coluna 3
        (tabuleiro[0][0] == 'O' && tabuleiro[1][1] == 'O' && tabuleiro[2][2] == 'O')) {  // diagonal
        //ganhou = true;
        alert("Parabéns, jogador 2 ganhou!");
    } else if (vezJogada > 9) {
        //ganhou = true;
        alert("Ninguém ganhou essa partida");
    }
}//fim da função que verificar o fim do jogo

/*if(tabuleiro[linha][coluna] != null){

for(var i = 1; i < linha; i++){
    for(var j = 1; j < coluna; j++  ){
        tabuleiro[linha][coluna] = "0";
    }
}
}else{
    alert("posição ocupada !")
}
verificarFimDeJogo();*/
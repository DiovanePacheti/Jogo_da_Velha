
// criando o tabuleiro
var tabuleiro = [
    ["x","0","0"],
    ["0","x","0"],
    ["0","0","X"]
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
outq1.addEventListener('click', function(){escolherPosicaoTabuleiro(0, 0,1)});
outq2.addEventListener('click', function(){escolherPosicaoTabuleiro(0, 1,2)});
outq3.addEventListener('click', function(){escolherPosicaoTabuleiro(0, 2,3)});
outq4.addEventListener('click', function(){escolherPosicaoTabuleiro(1, 0,4)});
outq5.addEventListener('click', function(){escolherPosicaoTabuleiro(1, 1,5)});
outq6.addEventListener('click', function(){escolherPosicaoTabuleiro(1, 2,6)});
outq7.addEventListener('click', function(){escolherPosicaoTabuleiro(2, 0,7)});
outq8.addEventListener('click', function(){escolherPosicaoTabuleiro(2, 1,8)});
outq9.addEventListener('click', function(){escolherPosicaoTabuleiro(2, 2,9)});

function escolherPosicaoTabuleiro(linha, coluna, i){
    var icones = document.createElement('i');
    
   
    if(vezJogada%2 != 0){
        tabuleiro[linha][coluna] = "X";
        switch(i){
            case 1:
                outq1.textContent = "x";
                break;
            case 2:
                outq2.textContent = "x";
                break;
            case 3:
                outq3.textContent = "x";
                break;
            case 4:
                outq4.textContent = "x";
                break;
            case 5:
                outq5.textContent = "x";
                break;
            case 6:
                outq6.textContent = "x";
                break;
            case 7:
                outq7.textContent = "x"
                break;;
            case 8:
                outq8.textContent = "x";
                break;
            case 9:
                outq9.textContent = "x";
                break;
            default:
                
        }
        //sai.textContent = "X";
    }else{
        tabuleiro[linha][coluna] = "0";
        switch(i){
            case 1:
            //  outq1.textContent = "0";
                icones.className = "far fa-circle"  
                outq1.appendChild(icones);
                break;
            case 2:
                outq2.textContent = "0";
                break;
            case 3:
                outq3.textContent = "0";
                break;
            case 4:
                outq4.textContent = "0";
                break;
            case 5:
                outq5.textContent = "0";
                break;
            case 6:
                outq6.textContent = "0";
                break;
            case 7:
                outq7.textContent = "0"
                break;;
            case 8:
                outq8.textContent = "0";
                break;
            case 9:
                outq9.textContent = "0";
                break;
            default:
                
        }
    }
    alert(tabuleiro[linha][coluna]);
    alert(tabuleiro)
    vezJogada++;
  
    }//fim da function escolher Posição Tabuleiro
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
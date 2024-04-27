var jogador,vencedor = null;
var jogadorSelecionado = document.getElementById('jogador-selecionado');
var vencedorSelecionado = document.getElementById('vencedor-selecionado');
let trilho=document.getElementById('trilho')
let body = document.querySelector('body')
mudarJogador('X');
function escolher_Quadrado(id){
    console.log(id);
    var quadrado= document.getElementById(id);
    if (vencedor!==null) {
        return;
        
    }
    //funçao para conferir se o quadrado for difernete de - não é para fazer mas nenhuma alteraçao
    if(quadrado.innerHTML!=='-'){
        return;
    }
    quadrado.innerHTML=jogador;   
    quadrado.style.color='#000';
    if(jogador==='X'){
        jogador='O';
    }else{
        jogador='X';
    }
    mudarJogador(jogador);
    quemVenceu();
}

function mudarJogador(valor){
    jogador=valor;
    jogadorSelecionado.innerHTML=jogador;
}
function mudarCor(quadrado1, quadrado2,quadrado3){
    quadrado1.style.background='#0f0';
    quadrado2.style.background='#0f0';
    quadrado3.style.background='#0f0';
}

function quemVenceu(){
        var quadrado1=document.getElementById(1);
        var quadrado2=document.getElementById(2);
        var quadrado3=document.getElementById(3);
        var quadrado4=document.getElementById(4);
        var quadrado5=document.getElementById(5);
        var quadrado6=document.getElementById(6);
        var quadrado7=document.getElementById(7);
        var quadrado8=document.getElementById(8);
        var quadrado9=document.getElementById(9);
        if (checarSequencia(quadrado1,quadrado2,quadrado3)) {
            mudarCor(quadrado1,quadrado2,quadrado3);
            mudarVencedor(quadrado1);
            return;
        }
        if (checarSequencia(quadrado4, quadrado5, quadrado6)) {
            mudarCor(quadrado4, quadrado5, quadrado6);
            mudarVencedor(quadrado4);
            return;
        }
    
        if (checarSequencia(quadrado7, quadrado8, quadrado9)) {
            mudarCor(quadrado7, quadrado8, quadrado9);
            mudarVencedor(quadrado7);
            return;
        }
    
        if (checarSequencia(quadrado1, quadrado4, quadrado7)) {
            mudarCor(quadrado1, quadrado4, quadrado7);
            mudarVencedor(quadrado1);
            return;
        }
    
        if (checarSequencia(quadrado2, quadrado5, quadrado8)) {
            mudarCor(quadrado2, quadrado5, quadrado8);
            mudarVencedor(quadrado2);
            return;
        }
    
        if (checarSequencia(quadrado3, quadrado6, quadrado9)) {
            mudarCor(quadrado3, quadrado6, quadrado9);
            mudarVencedor(quadrado3);
            return;
        }
    
        if (checarSequencia(quadrado1, quadrado5, quadrado9)) {
            mudarCor(quadrado1, quadrado5, quadrado9);
            mudarVencedor(quadrado1);
            return;
        }
    
        if (checarSequencia(quadrado3, quadrado5, quadrado7)) {
            mudarCor(quadrado3, quadrado5, quadrado7);
            mudarVencedor(quadrado3);
        }

}
function mudarVencedor(quadrado){
    vencedor=quadrado.innerHTML;
    vencedorSelecionado.innerHTML=vencedor;
    /*alert("Parabéns! O jogador " + vencedor + " ganhou! Clique em OK para reiniciar o jogo.");
    reiniciar();*/
}
function reiniciar(){
    vencedor=null;
    vencedorSelecionado.innerHTML='';
    for (var i = 1; i <= 9; i++) {
        var quadrado = document.getElementById(i);
        quadrado.style.background = '#eee';
        quadrado.style.color = '#000';
        quadrado.innerHTML = '-';
    }
    mudarJogador('X');
}


function checarSequencia(quadrado1, quadrado2, quadrado3){
        var ganhador=false;

        if(quadrado1.innerHTML !== '-' && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML){
            ganhador=true;
        }
        return ganhador;
}

trilho.addEventListener('click',()=>{
    trilho.classList.toggle('dark')
    body.classList.toggle('dark')
})




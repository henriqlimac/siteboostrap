var hutao = document.getElementById('hutao');
var xingqiu = document.getElementById('xingqiu');
var noelle = document.getElementById('noelle');

var botao1 = document.getElementById('mostre_mais1');
var botao2 = document.getElementById('mostre_mais2');
var botao3 = document.getElementById('mostre_mais3');

botao1.onclick = function (){
    
    if(hutao.className == "open"){
        hutao.className = "";
        botao1.innerHTML = "Veja mais";
    }

    else{
        hutao.className = "open";
        botao1.innerHTML = "Veja menos";
    }
};

botao2.onclick = function (){
    
    if(xingqiu.className == "open"){
        xingqiu.className = "";
        botao2.innerHTML = "Veja mais";
    }

    else{
        xingqiu.className = "open";
        botao2.innerHTML = "Veja menos";
    }
};

botao3.onclick = function (){
    
    if(noelle.className == "open"){
        noelle.className = "";
        botao3.innerHTML = "Veja mais";
    }

    else{
        noelle.className = "open";
        botao3.innerHTML = "Veja menos";
    }
};
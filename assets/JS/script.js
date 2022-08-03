//Armazenam os elementos Html
var resultado=document.getElementsByTagName('h3')[0];
const clean=document.getElementsByClassName('limpar')[0];
const botão=document.getElementsByClassName('calcula')[0];
var mediaAlvo=document.querySelector('#media-alvo');
var nota1=document.querySelector('#nota1');
var nota2=document.querySelector('#nota2');
var nota3=document.querySelector('#nota3');
var nota4=document.querySelector('#nota4');
var doMedia;
var acimaMedia;
var textResult=document.getElementsByClassName('text-result')[0];




function calcMedia(){
    doMedia=parseInt(nota1.value)+parseInt(nota2.value)+parseInt(nota3.value)+parseInt(nota4.value)/4;

        if(doMedia<0){
            resultado.innerHTML='INVÁLIDO'
            textResult.innerHTML='Nota máxima é 10 e nota mínima é 0';
            
        }
        else if(doMedia==mediaAlvo.value){
            resultado.innerHTML='Resultado é APROVADO. Parabéns!';
            textResult.innerHTML=`${'Sua média é'} ${doMedia}`;
        
        }else if(doMedia>mediaAlvo.value){
            acimaMedia=doMedia-mediaAlvo.value;
            resultado.innerHTML='Resultado é APROVADO.';
            textResult.innerHTML=`${'Parabéns!Vc está'} ${acimaMedia} ${'pontos acima da media'}`;
            
        }else{
            resultado.innerHTML='Resultado é REPROVADO';
            textResult.innerHTML=`${'Sua média é'} ${doMedia}`;
        }
    
        
}

botão.addEventListener('click',calcMedia);


function cleaner(){
    if(doMedia!==0||doMedia==0){
        resultado.innerHTML='Resultado';
        textResult.innerHTML='Veja aqui seu resultado !';
        
    }
}
clean.addEventListener('click',cleaner);



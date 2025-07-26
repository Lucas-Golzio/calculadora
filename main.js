//Função: define uma lista de ações que serão executadas quando a função for chamada. A palavra reservada para criar uma função em JavaScript é function

function insert(num){
    //Variável é um espaço na memória que armazena uma informação para uso posterior. Ao nomeá-la evite: n°s e letras maiúsculas no início, espaço entre palavras(use_ ou camelCase) e acentuação.
    //Captura o conteúdo atual exibido no elementado html cujo id é 'resultado'e armazena na variavel numero
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;

    //Verificando se existem dois operadores iguais na tela
    //var valorAtual = resultado.innerHTML;
    var ultimoCaracter = numero.slice(-1);
    //Criando uma lista para armz. os operadores que ue não quero que se repita
    //Uma lista é uma estrutura similar a variável, porém armaz. mais de uma informação, sua criação diferencia-se pelos [] após o sinal de igual
    var op = ['+', '-', '/', '.', '*'];
    if(op.includes(num)){
        if(op.includes(ultimoCaracter)){
           resultado.innerHTML = numero.slice(0,-1)+num;
           return;


        }
    }
    resultado.innerHTML = numero + num;
}

function clean(){
    //Função para limpar o conteúdo do visor
    //Define o conteúdo do elemento resultado como uma string vazia, limpando a tela
    document.getElementById('resultado').innerHTML = "";
}

function back(){
//Função para apagar o último caractere digitado na tela da calculadora.
var resultado = document.getElementById('resultado').innerHTML;
document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length-1);
//Exemplo se o resultado estiver = 7+1545 = 7+154
}

function calcular(){
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado){
        //Executa se tiver algo digitado no resultado, ou seja se a condição for verdadeira
        //A função eval atribuida ao elemento resultado, vai avaliar a expressão matemática e exibir o resultado na tela 
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
    else{
        //Executa caso a condição seja falsa
        document.getElementById('resultado').innerHTML = 'Erro'
    }
}













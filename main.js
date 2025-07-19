//Função: define uma lista de ações que serão executadas quando a função for chamada. A palavra reservada para criar uma função em JavaScript é function

function insert(num){
    //Variável é um espaço na memória que armazena uma informação para uso posterior. Ao nomeá-la evite: n°s e letras maiúsculas no início, espaço entre palavras(use_ ou camelCase) e acentuação.
    //Captura o conteúdo atual exibido no elementado html cujo id é 'resultado'e armazena na variavel numero
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;




}
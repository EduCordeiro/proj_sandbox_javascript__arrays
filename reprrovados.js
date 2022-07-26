const nomes = ["joao", "Ana", "Caio", "Lara", "Marjorie", "Leo"];
const notas = [10, 6.5, 8, 7.5, 5, 2];

//Quando a função callback retorna verdadeiro, ou true, o elemento é adicionado no array de retorno, e quando ela retorna falso, ou false, o elemento é descartado.
const reprovados = nomes.filter( (aluno, indice) => notas[indice] < 5)

console.log(reprovados);
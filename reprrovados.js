const nomes = ["joao", "Ana", "Caio", "Lara", "Marjorie", "Leo"];
const notas = [10, 6.5, 8, 7.5, 5, 2];

const reprovados = nomes.filter( (aluno, indice) => notas[indice] < 5)

console.log(reprovados);
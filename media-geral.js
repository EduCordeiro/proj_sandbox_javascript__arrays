const listaDeChamda = ['Joao', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo'];

const joao = [4, 7, 6, 8]
const ana = [7, 9, 5.5, 6]
const caio = [10, 8, 9, 8]
const lara = [7, 6, 5, 8]
const marjorie = [10, 10, 9, 9.5]
const leo = [5, 5.5, 6.8, 8]

const notasAlunos = [joao, ana, caio, lara, marjorie, leo]

function media(notasAlunos){
    const somaNotas = notasAlunos.reduce((acum, atu) => atu + acum, 0);
    return somaNotas/notasAlunos.length;
}

console.log('Médias');
console.log('joao: ' + media(joao));
console.log('ana: ' + media(ana));
console.log('caio: ' + media(caio));
console.log('lara: ' + media(lara));
console.log('marjorie: ' + media(marjorie));
console.log('leo: ' + media(leo));
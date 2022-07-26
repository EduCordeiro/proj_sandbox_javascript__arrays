const listaDeChamada = ["joao", "Ana", "Caio", "Lara", "Marjorie", "Leo"]

console.log('Lista de Chamada: ' + listaDeChamada)

// insere excluindo algum elemento
listaDeChamada.splice(1, 2, 'rodrigo')

console.log('Lista de Chamada: ' + listaDeChamada)

// inseree sem excluir - Informar 0 no parrâmtro 2
listaDeChamada.splice(0, 0, 'Eduardo')

console.log('Lista de Chamada: ' + listaDeChamada)
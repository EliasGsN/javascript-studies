const estudantes = require('../json/estudantes.json');

function buscasInformacao(lista, chave, valor) {
    return lista.find((estudante) => estudante[chave].includes(valor));
}

const estudanteEncontrado = buscasInformacao(estudantes, 'nome', 'Juliet');
console.log(estudanteEncontrado);

const telefoneEstudante = buscasInformacao(estudantes, 'telefone', '90945673092');
console.log(telefoneEstudante);
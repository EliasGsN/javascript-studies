const cliente = {
   nome: "John",
   idade: 24,
   email: "John@example.com",
   telefone: ["1140028922", "1132066711"],
};
   
cliente.enderecos = [
  {
    rua: "R. Joseph Climberg",
    numero: 1234,
    apartamento: true,
    complemento: "ap 992",
 },
];

function ligaParaCliente(telefoneComercial, telefoneResidencial) {
    console.log(`Ligando para $(telefoneComercial)`);
    console.log(`Ligando para $(telefoneResidencial)`);
};

ligaParaCliente(...cliente.telefone);

const encomenda = {

    destinatario: cliente.nome,
    ...cliente.enderecos[0]
};

console.log(encomenda);
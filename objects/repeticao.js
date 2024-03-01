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

for (let chave in cliente) {
    let tipo = typeof cliente[chave];
    if (tipo !== `object` && tipo !== `function`) {
    console.log(`A chave ${chave} tem o valor ${cliente[chave]}`);
    }
}

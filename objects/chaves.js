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

const chavesDoObjeto = Object.keys(cliente);

console.log(chavesDoObjeto);

if (!chavesDoObjeto.includes("enderecos")) {
    console.error("Erro. É necessário ter um endereço cadastrado.");
}
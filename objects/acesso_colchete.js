const cliente = {
    nome: "Andre",
    idade: 32,
    cpf: "1112222333",
    email: "andre@andre.com",
};

console.log(`O nome do cliente é ${cliente['nome']} e essa pessoa tem ${cliente['idade']} anos.`);

const chaves = ["nome", "idade", "cpf", "email", "altura"];

chaves.forEach((chave) => {
    console.log(`A chave ${chave} tem o valor ${cliente[chave]}`);
});
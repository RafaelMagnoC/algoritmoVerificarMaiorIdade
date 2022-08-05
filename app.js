function mensagem(frase) {
  alert(frase);
}
function dadosPessoa() {
  let pessoa = {
    nome: String(prompt("Digite seu nome")),
    idade: parseInt(prompt("Digite sua idade")),
  };
  validarDados(pessoa.nome, pessoa.idade);
  return pessoa;
}
function validarDados(nomePessoa, idadePessoa) {
  while (!isNaN(nomePessoa) || nomePessoa == "") {
    mensagem("Digite um nome válido!");
    dadosPessoa();
  }
  while (Number.isNaN(idadePessoa) || idadePessoa == null) {
    mensagem("Digite uma idade válida!");
    dadosPessoa();
  }
}
function listaPessoas() {
  let lista = [];
  for (let i = 1; i <= 2; i++) {
    lista.push(dadosPessoa());
    if (i === 1) {
      confirm("Agora digite os dados da segunda pessoa, ok?");
    }
  }
  return lista;
}
function verificarIdade() {
  mensagem("Hey Gass, Seja bem-vindo! Este é um sistema de comparação de idades.\n Informe nome e idade da primeira pessoa, em seguida, da segunda pessoa e receba o resultado!");
  let pessoa1 = {};
  let pessoa2 = {};
  let novaListaDePessoas = listaPessoas();
  for (let i = 0; i < novaListaDePessoas.length; i++) {
    pessoa1 = novaListaDePessoas[i];
    pessoa2 = novaListaDePessoas[(i += 1)];
  }
  if (pessoa1.idade > pessoa2.idade) {
    mensagem(
      `${pessoa1.nome} tem ${
        pessoa1.idade
      } anos a diferença entre as idades é de:\n ${
        pessoa1.idade - pessoa2.idade
      } anos`
    );
  } else {
    mensagem(
      `${pessoa2.nome} tem ${
        pessoa2.idade
      } anos a diferença entre as idades é de:\n ${
        pessoa2.idade - pessoa1.idade
      } anos`
    );
  }
}
verificarIdade();

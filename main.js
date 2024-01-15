const form = document.getElementById('form');

form.addEventListener("submit", (e) => {
  e.preventDefault();
  adicionarLinhas();
  atualizaTabela();
})

let linhas = '';

function adicionarLinhas() {
  const campoNome = document.getElementById('nome');
  const nome = campoNome.value;

  const campoTelefone = document.getElementById('telefone');
  const telefone = campoTelefone.value;

  let linha = '<tr>';
  linha += `<td>${nome}</td>`;
  linha += `<td>${telefone}</td>`;
  linha += '<tr>';

  linhas += linha;

  campoNome.value = "";
  campoTelefone.value = "";
}

function atualizaTabela() {
  const corpoTabela = document.querySelector('tbody');
  corpoTabela.innerHTML = linhas;
}

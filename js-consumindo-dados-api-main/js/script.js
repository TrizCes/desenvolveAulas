async function buscaEndereco(cep) {
  let mensagemErro = document.getElementById('erro');
  mensagemErro.innerHTML = '';
  try {
    let consultaCEP = await fetch(`http://viacep.com.br/ws/${cep}/json`);
    let consultaCEPConvertida = await consultaCEP.json();
    if (consultaCEPConvertida.erro) {
      throw Error(`O numero ${cep} não existe no banco de dados de CEP`);
    }
    let cidade = document.getElementById('cidade');
    let logradouro = document.getElementById('endereco');
    let estado = document.getElementById('estado');

    cidade.value = consultaCEPConvertida.localidade;
    logradouro.value = consultaCEPConvertida.logradouro;
    estado.value = consultaCEPConvertida.uf;

    return consultaCEPConvertida;
  } catch (e) {
    mensagemErro.innerHTML = `<p> O numero ${cep} não existe no banco de dados de CEP. Tente novamente.</p>`;
    console.log(e);
  }
}

var cep = document.getElementById('cep');
cep.addEventListener('focusout', () => buscaEndereco(cep.value));

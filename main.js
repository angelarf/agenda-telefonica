const SAIR = 0
const ADICIONAR_CONTATO = 1
const REMOVER_CONTATO = 2
const LISTAR_CONTATOS = 3
const EDITAR_CONTATOS = 4

const escreveOpcoesDoMenu = () => {
  return `
          0 - Sair
          1 - Adicionar contato
          2 - Remover contato
          3 - Ver contatos cadastrados
          4 - Editar contato`
}

function adicionarContato() {
  const nome = prompt("Insira o nome do contato:")
  let telefoneValido = false
  let telefone

  do {
    let telefoneInput = prompt(
      "Insira o telefone (apenas números ex: 999999999)"
    )
    console.log()
    // isNaN verifica se o numero é um número mesmo!
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN
    if (isNaN(telefoneInput)) {
      alert("Por favor, apenas números")
    } else {
      telefone = parseInt(telefoneInput)
      telefoneValido = true;
    }
  } while (!telefoneValido)

  // Por enquanto, não vamos salvar, mas vamos fingir que sim :)
  alert("Contato salvo com sucesso!\n" + nome + "\nTelefone:" + telefone)
}

function listarContatos() {
  // Vamos fingir que temos os contatos salvos:
  alert("Nome: Angela \nTelefone: 99999-9999")
}

function removerContato() {
  alert("Método não implementado :(")
}

function editarContato() {
  alert("Método não implementado :(")
}


function agendaTelefonica() {
  let opcao
  do {
    opcao = parseInt(
      prompt("Digite a opção desejada:\n" + escreveOpcoesDoMenu())
    )

    switch (opcao) {
      case ADICIONAR_CONTATO:
        adicionarContato()
        break;
      case REMOVER_CONTATO:
        removerContato()
        break;
      case LISTAR_CONTATOS:
        listarContatos()
        break;
      case EDITAR_CONTATOS:
        editarContato()
        break;
      case SAIR:
        alert("Até logo!")
        break;
      default:
        alert(
          "Opção inválida! Escolha uma das opções abaixo:" +
            escreveOpcoesDoMenu()
        )
    }
    console.log(opcao)
  } while (opcao != SAIR)
}

agendaTelefonica();

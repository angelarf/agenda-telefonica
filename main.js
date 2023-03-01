/************************************
 * Classe para guardar informacoes do contato
 * nome: string
 * telefone: string
 */
class Contato {
  constructor(nome, telefone) {
    this.nome = nome
    this.telefone = telefone
  }
}

class Agenda {
  constructor() {
    this.contatos = [];
  }

  adicionarContato() {
    const nome = prompt("Insira o nome do contato:")
    let telefoneValido = false
    let telefone

    do {
      let telefoneInput = prompt(
        "Insira o telefone (apenas números ex: 999999999)"
      )

      // isNaN verifica se o numero é um número mesmo!
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN
      if (isNaN(telefoneInput)) {
        alert("Por favor, apenas números")
      } else {
        telefone = parseInt(telefoneInput)
        telefoneValido = true
      }
    } while (!telefoneValido)

    const novoContato = new Contato(nome, telefone)
    this.contatos.push(novoContato);

    alert(
      "Contato salvo com sucesso!\n" +
      novoContato.nome +
      "\nTelefone:" +
      novoContato.telefone
    )
  }

  listarContatos() {
    for(let cont of this.contatos){
      alert("Nome: " +  cont.nome + "\nTelefone: " + cont.telefone);
    }
  }

  removerContato(indice) {
    this.contatos.splice(indice,1);
  }

  editarContato() {
    alert("Método não implementado :(")
  }
}

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

function agendaTelefonica() {
  const agenda = new Agenda()
  let opcao
  do {
    opcao = parseInt(
      prompt("Digite a opção desejada:\n" + escreveOpcoesDoMenu())
    )

    switch (opcao) {
      case ADICIONAR_CONTATO:
        agenda.adicionarContato()
        break
      case REMOVER_CONTATO:
        let indice = parseInt(
          prompt("Digite a posicao do elemento que vc qr apagar")
        )
        agenda.removerContato(indice)
        break
      case LISTAR_CONTATOS:
        agenda.listarContatos()
        break
      case EDITAR_CONTATOS:
        agenda.editarContato()
        break
      case SAIR:
        alert("Até logo!")
        break
      default:
        alert(
          "Opção inválida! Escolha uma das opções abaixo:" +
            escreveOpcoesDoMenu()
        )
    }
  } while (opcao != SAIR)
}

agendaTelefonica()

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

  removerContato(nome) {
    // A função find percorre o array de contatos e procura por um contato.nome 
    // que seja igual ao nome recebido por parametro na função removerContato
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
    
    // const contatoEncontrado = this.contatos.find((c) => c.nome === nome)

    // A função filter percorre o array de contatos e filtra de acordo com a condição (c.nome !== nome)
    // Essa função retorna um novo array.
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
    // Para evitar percorrer a lista duas vezes, vou usar o método filter. 
    // Se o array retornado for vazio, significa que o contato não foi encontrado
    const contatosFiltrados = this.contatos.filter((c) => c.nome !== nome);
    const contatoEncontrado = contatosFiltrados.length >= 1;

    if(contatoEncontrado) {
      this.contatos = contatosFiltrados;
      alert("Contato removido da lista!")
    } else {
      alert("Contato nao encontrado!")
    }
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
       let nome = prompt("Digite o nome do contato que deseja apagar: ")
        agenda.removerContato(nome)
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

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
    this.contatos = []
  }

  adicionarContato(nome, telefone) {
    const novoContato = new Contato(nome, telefone)
    this.contatos.push(novoContato)
  }

  listarContatos() {
    for (let cont of this.contatos) {
      alert("Nome: " + cont.nome + "\nTelefone: " + cont.telefone)
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
    const contatosFiltrados = this.contatos.filter((c) => c.nome !== nome)
    const contatoEncontrado = contatosFiltrados.length >= 1

    if (contatoEncontrado) {
      this.contatos = contatosFiltrados
      alert("Contato removido da lista!")
    } else {
      alert("Contato nao encontrado!")
    }
  }

  editarContato() {
    alert("Método não implementado :(")
  }
}

function agendaTelefonica() {
  return new Agenda()
}
const agenda = agendaTelefonica()
// agenda.adicionarContato("Contato 1", "(11) 9999-9999");
// agenda.adicionarContato("Contato 2", "(11) 9999-9998");

const atualizarListaHTML = () => {
  const listaEl = document.getElementById("lista-contatos")
  listaEl.innerHTML = ""

  const contatos = agenda.contatos

  if (contatos.length === 0) {
    listaEl.innerText = "Lista Vazia :("
    return
  }

  contatos.forEach((contato) => {
    const itemEl = document.createElement("li")
    itemEl.innerText = `${contato.nome} - ${contato.telefone}`
    itemEl.className = "contato-novo"
    listaEl.appendChild(itemEl)
  })
}

const limparForm = () => {
  document.querySelector("#input-nome").value = ""
  document.querySelector("#input-telefone").value = ""
}

// Executa a função assim que o javascript é carregado ;)
atualizarListaHTML()


const adicionarContato = (e) => {
  e.preventDefault();
  const nome = document.querySelector("#input-nome").value
  const telefone = document.querySelector("#input-telefone").value

  // TODO: Validacoes

  agenda.adicionarContato(nome, telefone)
  atualizarListaHTML()
  limparForm()
}

const formSalvarContato = document.getElementById("adicionar-contato-form");
formSalvarContato.addEventListener("submit", adicionarContato)

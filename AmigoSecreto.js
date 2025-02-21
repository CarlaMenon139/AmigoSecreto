// Array para armazenar os nomes dos amigos
let listaAmigos = [];

// Referência ao elemento onde serão exibidos os resultados
const resultadoElement = document.getElementById("resultado");
const listaAmigosElement = document.getElementById("listaAmigos");

// Função para adicionar amigos à lista
function adicionarAmigo() {
  const nomeAmigo = document.getElementById("nomeAmigo").value;
  if (nomeAmigo) {
    listaAmigos.push(nomeAmigo); // Adiciona o nome à lista
    atualizarListaAmigos(); // Atualiza a lista na página
    document.getElementById("nomeAmigo").value = ""; // Limpa o campo de entrada
  } else {
    alert("Por favor, insira o nome de um amigo.");
  }
}

// Função para atualizar a lista de amigos exibida na página
function atualizarListaAmigos() {
  listaAmigosElement.innerHTML = ""; // Limpa a lista de amigos
  listaAmigos.forEach(amigo => {
    const li = document.createElement("li");
    li.textContent = amigo;
    listaAmigosElement.appendChild(li);
  });
}

// Função para realizar o sorteio
function sortearAmigo() {
  if (listaAmigos.length < 2) {
    alert("Adicione pelo menos dois amigos para sortear.");
    return;
  }

  let sorteados = [...listaAmigos]; // Cópia da lista
  let embaralhado = [];

  while (sorteados.length > 0) {
    let indiceSorteado = Math.floor(Math.random() * sorteados.length);
    let nomeSorteado = sorteados[indiceSorteado];

    // Evita que a pessoa tire a si mesma
    if (listaAmigos[embaralhado.length] === nomeSorteado && sorteados.length === 1) {
      return sortearAmigo(); // Refaz o sorteio se necessário
    }

    embaralhado.push(nomeSorteado);
    sorteados.splice(indiceSorteado, 1);
  }

  // Exibir pares de sorteio na tela
  resultadoElement.innerHTML = "";
  for (let i = 0; i < listaAmigos.length; i++) {
    const li = document.createElement("li");
    li.textContent = `${listaAmigos[i]} → ${embaralhado[i]}`;
    resultadoElement.appendChild(li);
  }
}

// Adicionando evento de clique ao botão "Adicionar"
document.getElementById("adicionarButton").addEventListener("click", adicionarAmigo);

// Adicionando evento de clique ao botão "Sortear"
document.getElementById("sortearButton").addEventListener("click", sortearAmigo);
    
    


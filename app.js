let amigos = [];

// Função para adicionar amigo
function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();

    if (nome && !amigos.includes(nome)) {
        amigos.push(nome);

        const lista = document.getElementById("listaAmigos");
        const li = document.createElement("li");
        li.textContent = nome;
        lista.appendChild(li);

        input.value = "";
    } else {
        alert("Digite um nome válido ou que ainda não foi adicionado!");
    }
}

// Função para sortear amigo secreto
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos 2 pessoas para sortear!");
        return;
    }

    let sorteio = [...amigos];
    let valido = false;

    // Garantir que ninguém tire a si mesmo
    while (!valido) {
        sorteio = [...amigos].sort(() => Math.random() - 0.5);
        valido = true;

        for (let i = 0; i < amigos.length; i++) {
            if (amigos[i] === sorteio[i]) {
                valido = false;
                break;
            }
        }
    }

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = `${amigos[i]} → ${sorteio[i]}`;
        resultado.appendChild(li);
    }
}

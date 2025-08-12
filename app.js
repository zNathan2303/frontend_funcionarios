'use strict'

import funcionarios from './funcionarios.json' with {type: "json"}

const container = document.getElementById('container')

function criarCard(funcionario) {
    const card = document.createElement('div')
    const foto = document.createElement('img')
    const nome = document.createElement('span')
    const cargo = document.createElement('span')

    card.className = 'card'
    foto.className = 'foto'
    nome.className = 'nome'
    cargo.className = 'cargo'

    foto.src = './img/' + funcionario.imagem
    nome.textContent = funcionario.nome
    cargo.textContent = funcionario.cargo

    card.appendChild(foto)
    card.appendChild(nome)
    card.appendChild(cargo)

    container.appendChild(card)
}

function carregarCards() {
    console.log(funcionarios)
    funcionarios.forEach(criarCard)
}

carregarCards()
'use strict';
 
// Criando o JSON para simular um banco de dados
let bancoDeDados = [
    {'tarefa':' Estudar', 'status': ''},
    {'tarefa': ' Lavar Louça', 'status': 'checked'},
    {'tarefa': ' Academia', 'status': 'checked'},
];

// Função que ensina o Javascript a criar o elemento que queremos
const criarItem = (tarefa, status) => {
    const item = document.createElement('label');
    item .classList.add("to-do__item");
    item.innerHTML = `
        <input type = "checkbox" ${status}>
        <div>${tarefa}</div>
        <input type = "button" value = "X">
    `
    document.getElementById('to-doList').appendChild(item);
}

const atualizarTarefa = () => {
    bancoDeDados.forEach (item => criarItem (item.tarefa, item.status))     // forEach = percorre o array item a item
}

atualizarTarefa();
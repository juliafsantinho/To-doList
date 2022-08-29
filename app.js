'use strict';
 
// Criando o JSON para simular um banco de dados
let bancoDeDados = [
    {'tarefa':' Estudar', 'status': ''},
    {'tarefa': ' Lavar Louça', 'status': 'checked'},
    {'tarefa': ' Academia', 'status': ''},
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
    document.getElementById('todoList').appendChild(item);
}
// Funções para atualização da tela
const limparTarefas = () => {
    const todoList = document.getElementById('todoList');
    while (todoList.firstChild) {
        todoList.removeChild(todoList.lastChild);
    }
}

const atualizarTarefa = () => {
    limparTarefas();
    bancoDeDados.forEach (item => criarItem (item.tarefa, item.status))     // forEach = percorre o array item a item
}

atualizarTarefa();

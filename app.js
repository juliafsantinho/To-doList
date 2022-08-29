'use strict';
 
// Criando o JSON para simular um banco de dados
let bancoDeDados = [
    {'tarefa':' Estudar', 'status': ''},
    {'tarefa': ' Lavar Louça', 'status': 'checked'},
    {'tarefa': ' Academia', 'status': ''},
];

// Função que ensina o Javascript a criar o elemento que queremos
const criarItem = (tarefa, status, indice) => {
    const item = document.createElement('label');
    item .classList.add("to-do__item");
    item.innerHTML = `
        <input type = "checkbox" ${status} data-indice = ${indice}>
        <div>${tarefa}</div>
        <input type = "button" value = "X" data-indice = ${indice}>
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
    bancoDeDados.forEach ((item, indice) => criarItem (item.tarefa, item.status, indice))     // forEach = percorre o array item a item
}

// Criando a função para inserir uma nova tarefa
const inserirItem = (evento) => {
    const tecla = evento.key;
    const texto = evento.target.value;
    if (tecla === 'Enter'){
        bancoDeDados.push({'tarefa': texto, 'status': ''});
        atualizarTarefa();
        evento.target.value = ''; // limpando a tarefa da caixa de texto ao atualizar a pagina
    }
}

// Programando a ação de deletar tarefas
const removerItem = (indice) => {
    bancoDeDados.splice(indice, 1);
    atualizarTarefa();
}


// Identificando as tarefas com índice
const clickItem = (evento) => {
    const elemento = evento.target;
    if(elemento.type === 'button') {
        const indice = elemento.dataset.indice
        removerItem(indice);
    } else if(elemento.type === 'checkbox') {
        const indice = elemento.dataset.indice;
        atualizarTarefa(indice);
    }
}


document.getElementById('newItem').addEventListener('keypress', inserirItem);
document.getElementById('todoList').addEventListener('click', clickItem);

atualizarTarefa();
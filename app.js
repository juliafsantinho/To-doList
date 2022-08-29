'use strict';
 
// Criando o JSON para simular um banco de dados
let banco = [
//    {'tarefa':' Estudar', 'status': ''},
//    {'tarefa': ' Lavar Louça', 'status': 'checked'},
//    {'tarefa': ' Academia', 'status': ''},
];

//Configurando os dados no LocalStorage
const getBanco = () => JSON.parse(localStorage.getItem ('to-doList')) ?? [];      //Pega informação do meu banco
const setBanco = (banco) => localStorage.setItem ('to-doList', JSON.stringify(banco));     //Atualiza informação do meu banco

// Função que ensina o Javascript a criar o elemento que queremos
const criarItem = (tarefa, status, indice) => {
    const item = document.createElement('label');
    item .classList.add("todo__item");
    item.innerHTML = `
        <input type = "checkbox" ${status} data-indice = ${indice}>
        <div>${tarefa}</div>
        <input type = "button" value ="X" data-indice = ${indice}>
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
    const banco = getBanco();
    banco.forEach ((item, indice) => criarItem (item.tarefa, item.status, indice));    // forEach = percorre o array item a item
}

// Criando a função para inserir uma nova tarefa
const inserirItem = (evento) => {
    const tecla = evento.key;
    const texto = evento.target.value;
    if (tecla === 'Enter'){
        const banco = getBanco();
        banco.push({'tarefa': texto, 'status': ''});
        setBanco(banco);
        atualizarTarefa();
        evento.target.value = ''; // limpando a tarefa da caixa de texto ao atualizar a pagina
    }
}

// Programando a ação de deletar tarefas
const removerItem = (indice) => {
    const banco = getBanco();
    banco.splice(indice, 1);
    setBanco(banco);
    atualizarTarefa();
}

//Programando a ação de atualizar o status da tarefa
const atualizarItem = (indice) => {
    const banco = getBanco();
    banco[indice].status = banco[indice].status === '' ? 'checked' : '';
    setBanco(banco);
    atualizarTarefa();
}


// Identificando as tarefas com índice
const clickItem = (evento) => {
    const elemento = evento.target;
    console.log(elemento.type);
    if(elemento.type === 'button') {
        const indice = elemento.dataset.indice;
        removerItem(indice);
    } else if (elemento.type === 'checkbox') {
        const indice = elemento.dataset.indice;
        atualizarItem(indice);
    }
}


document.getElementById('newItem').addEventListener('keypress', inserirItem);
document.getElementById('todoList').addEventListener('click', clickItem);

atualizarTarefa();
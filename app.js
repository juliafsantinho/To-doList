'use strict';

//função que ensina o Javascript a criar o elemento que queremos
const criarItem = (tarefa, status='') => {
    const item = document.createElement('label');
    item .classList.add("to-do__item");
    item.innerHTML = `
        <input type = "checkbox" ${status}>
        <div>${tarefa}</div>
        <input type = "button" value = "X">
    `
    document.getElementById('to-doList').appendChild(item);
}
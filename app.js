'use strict';

const criarItem = (tarefa) => {
    const item = document.createElement('label');
    item .classList.add("to-do__item");
    item.innerHTML = `
        <input type = "checkbox">
        <div>${tarefa}</div>
        <input type = "button" value = "X">
    `
    document.getElementById('to-doList').appendChild(item);
}
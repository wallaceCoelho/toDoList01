
const setList = document.querySelector("#btn-confirm");
const list = document.querySelector("#list");
const delet = document.querySelector("#btn-delete");
const edit = document.querySelector("#btn-edit");

setList.addEventListener("click", () => {
    const task = document.getElementById("task");
    const date = document.getElementById("date");
    const time = document.getElementById("time");
    const addList = [task.value, date.value, time.value];
    const tr = document.createElement("tr");

    if(task.value != 0 || date.value != 0 || time.value != 0){
        tr.setAttribute("id", "tr-list");
        list.appendChild(tr);
        tr.insertAdjacentHTML("afterend", '<td id="task-value">'+addList[0]+'</td>' + '<td id="date-value">'+addList[1]+'</td>' + '<td id="time-value">'+addList[2]+'</td>' + '<td><input type="checkbox" id="checkbox"></td>');
        date.value = "";
        time.value = "";
        task.value = "";
    }
}) 

delet.addEventListener("click", () => {
    let selectItem = document.querySelectorAll('td [type="checkbox"]:checked'); // aqui seleciona todos os elementos checados
    for(let i = 0; i < selectItem.length; i++) {
        selectItem[i].parentNode.parentNode.remove(); // aqui vai do elemento input voltando até o td
    }
})

edit.addEventListener("click", () => {
    const task = document.getElementById("task");
    const date = document.getElementById("date");
    const time = document.getElementById("time");
    const taskValue = document.getElementById("task-value");
    const dateValue = document.getElementById("date-value");
    const timeValue = document.getElementById("time-value");

    let selectItem = document.querySelectorAll('td [type="checkbox"]:checked');
    for(let i = 0; i < selectItem.length; i++) {
        task.value = taskValue.textContent;
        date.value = dateValue.textContent;
        time.value = timeValue.textContent;
        selectItem[i].parentNode.parentNode.remove() ;
    }
})

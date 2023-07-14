`use strict`

document.addEventListener("DOMContentLoaded", () => {
    const todoAdd = document.querySelector("#todoAdd");
    const statusParagraph = document.getElementById("status")
    const todolist = document.getElementById("todolist");
    const todos = [];

    console.log(todoAdd);
    todoAdd.addEventListener("keydown", addTodo);


    /**Fonctions */
    function addTodo(e) {
        if (e.key === "Enter") {
            const todo = todoAdd.value;
            todos.push(todo);
            todoAdd.value = "";

            insertTodos();
        }
        // console.log("ajout de la tache ...");
        updateStatus();
    }

    function updateStatus() {
        if (todos.length > 0) {
            statusParagraph.style.display = "none";
        } else {
            statusParagraph.style.display = "block";
        }
    }
    function insertTodos() {

        // création d'une balise li
        const liElement = document.createElement("li");
        // ajout de la classe "todo"
        liElement.classList.add("todo");
        // insérer le text dans le li
        const task = todos[todos.length - 1]
        todolist.innerHTML = task;
        console.log(liElement);

    }
});
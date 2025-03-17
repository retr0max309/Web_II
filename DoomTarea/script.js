import checkComplete from "./componentes/checkComplete.js";
import deleteIcon from "./componentes/deleteIcon.js";
import editIcon from "./componentes/editIcon.js"; // Importa el nuevo componente de edición

(() => {
    const btn = document.querySelector('[data-form-btn]');
    const list = document.querySelector('[data-list]');

    //funciona para actualizar el contador de tareas pendientes
    const updatePendingTasksCount = () => {
        const pendingTasks = document.querySelectorAll('.card:not(.completed)'); 
        const pendingTasksCount = document.getElementById('pendingTasksCount');
        pendingTasksCount.textContent = pendingTasks.length; 
    };

    //sirve para crear una tarea
    const createTask = (evento) => {
        evento.preventDefault();
        const input = document.querySelector('[data-form-input]');
        const value = input.value.trim();

        if (value === "") {
            alert("Por favor, ingresa una tarea válida.");
            return;
        }

        const task = document.createElement('li');
        task.classList.add('card');
        input.value = '';

        const contTask = document.createElement('div');
        contTask.appendChild(checkComplete());

        const titleTask = document.createElement('span');
        titleTask.classList.add('task');
        titleTask.innerText = value;
        contTask.appendChild(titleTask);

        task.appendChild(contTask);
        task.appendChild(editIcon()); 
        task.appendChild(deleteIcon());
        list.appendChild(task);

        updatePendingTasksCount(); 
    };

    btn.addEventListener('click', createTask);

    list.addEventListener('click', (evento) => {
        if (evento.target.classList.contains('icon')) {
            updatePendingTasksCount(); 
        }
    });

    //  
    list.addEventListener('click', (evento) => {
        if (evento.target.classList.contains('fa-trash-alt')) {
            setTimeout(updatePendingTasksCount, 0); 
        }
    });

    // Evento para poder editar una tarea
    list.addEventListener('click', (evento) => {
        if (evento.target.classList.contains('fa-edit')) {
            const taskElement = evento.target.closest('.card');
            const taskText = taskElement.querySelector('.task');
            const newValue = prompt("Edita tu tarea:", taskText.innerText);
            if (newValue !== null && newValue.trim() !== "") {
                taskText.innerText = newValue.trim();
            }
        }
    });


})();
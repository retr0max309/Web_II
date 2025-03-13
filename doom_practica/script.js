
const btn = document.querySelector('[data-form-btn]');

console.log(btn);

const createTask = (evento) => {
    evento.preventDefault();
    const input = document.querySelector('[data-form-input]');
    console.log(input.value);
    const value = input.value;
    const lista = document.querySelector('[data-list]');
    const task = document.createElement('li');
    task.classList.add('card');
    input.value = '';
    /*const contenido = `
        <div>
            <i class="far fa-check-square icon"></i>
            <span class="task">${value}</span>
        </div>
        <i class="fas fa-trash-alt trashIcon icon"></i>
    `;
     */

    const contTask= document.createElement('div')
    contTask.appendChild(checkComplete());
    const titleTask = document.createElement('span')
    titleTask.classList.add('task');
    titleTask.innerText=value;
    contTask.appendChild(titleTask);
    const content ='<i class="fas fa-trash-alt trashIcon icon"></i>'


    //task.innerHTML = contenido;
    task.appendChild(contTask)
    lista.appendChild(task);
    console.log(contenido)
};

btn.addEventListener('click', createTask);

const checkComplete=()=>{
    const i=document.createElement('i') //creacion de un icono
    i.classList.add("far fa-check-square icon", "icon")
    return i;
}

const color = (evento)=>{
    const element= evento.target
    element.classList.add('fas')
    element.classList.add('completIcon')
    element.classList.remove('far')
}
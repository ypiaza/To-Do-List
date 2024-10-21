//Logica para adicionar e remover tasks assim que concluida ou excluida

const btnAddTarefa = document.getElementById('btn-add-tarefa');
const inputTarefa = document.getElementById('tarefa');
const listaTarefas = document.getElementById('listaTarefas');

function addTarefa(event) {
    const tarefaEscrita = inputTarefa.value;

    if (tarefaEscrita) {
        const tarefa = document.createElement('li');
        const btnDelete = document.createElement('button');
        btnDelete.innerHTML = '<i class="fa-solid fa-trash"></i>';
        tarefa.innerText = tarefaEscrita;
        listaTarefas.appendChild(tarefa);
        tarefa.appendChild(btnDelete);
        tarefaEscrita.value = '';


        btnDelete.addEventListener('mouseover', (event) => {
            if (event.currentTarget === btnDelete) {
                tarefa.style.backgroundColor = 'var(--bg-task-delete-red)'
                btnDelete.style.backgroundColor = 'transparent'
                btnDelete.style.rotate = '10deg'
            }

        });

        btnDelete.addEventListener('mouseout', (event) => {
            if (event.currentTarget !== tarefa) {
                tarefa.style.backgroundColor = ''
                btnDelete.style.backgroundColor = ''
                btnDelete.style.rotate = ''
            }
        })

        btnDelete.addEventListener('click', () => {
            tarefa.remove(tarefa);
        })

        tarefa.addEventListener('click', (event) => {
            if (event.target !== btnDelete && event.target.tagName === 'LI'
            ) {
                tarefa.remove(tarefa)
            }
        });

        inputTarefa.classList.remove('inputReject')
    } else {
        inputTarefa.classList.add('inputReject')

    }

    inputTarefa.value = '';
}

btnAddTarefa.addEventListener('click', addTarefa)
inputTarefa.addEventListener('keydown', (event)=>{
    if(event.key === 'Enter'){
        addTarefa();
        event.preventDefault();
    }
})


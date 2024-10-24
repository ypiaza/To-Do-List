//Logica para adicionar e remover tasks assim que concluida ou excluida

const btnAddTarefa = document.getElementById('btn-add-tarefa');
const inputTarefa = document.getElementById('tarefa');
const listaTarefas = document.getElementById('listaTarefas');
const areaTasks = document.getElementById('body')

function addTarefa(event) {
    const tarefaEscrita = inputTarefa.value;

    if (tarefaEscrita) {
        const tarefa = document.createElement('li');
        const btnArea = document.createElement('div')
        const btnDelete = document.createElement('button');
        const btnCheck = document.createElement('button');
        btnDelete.innerHTML = '<i class="fa-solid fa-trash"></i>';
        btnCheck.innerHTML = '<i class="fa-solid fa-check"></i>'
        tarefa.innerText = tarefaEscrita;
        btnArea.classList.add('btnArea')
        listaTarefas.appendChild(tarefa);
        tarefa.appendChild(btnArea);
        btnArea.appendChild(btnDelete);
        btnArea.appendChild(btnCheck);
        tarefaEscrita.value = '';


        btnDelete.addEventListener('click', () => {
            tarefa.remove(tarefa);
            const alertDel = document.querySelector('.alertDel');
            const progress = document.querySelector('.progressDel');
            const btnRevert = document.getElementById('revert');

            btnRevert.addEventListener('click', () => {
                listaTarefas.appendChild(tarefa);

                clearTimeout(timeoutProgress); // Cancela o timeout do progresso
                clearTimeout(timeoutHide); // Cancela o timeout de esconder o alerta
                alertDel.style.display = 'none';
                progress.style.width = '';
            })

            alertDel.style.display = 'flex'
            
            timeoutProgress = setTimeout(() => {
                progress.style.width = '100%'
            }, 100)
            
            timeoutHide = setTimeout(() => {
                alertDel.style.display = 'none'
                progress.style.width = ''
            }, 5000);
        })

        btnCheck.addEventListener('click', () => {
            tarefa.remove(tarefa);
            const alertCheck = document.querySelector('.alertCheck');
            const progress = document.querySelector('.progressCheck');
            alertCheck.style.display = 'flex'
            setTimeout(() => {
                progress.style.width = '100%'
            }, 100)
            setTimeout(() => {
                alertCheck.style.display = 'none'
                progress.style.width = ''
            }, 3000);
        })


        inputTarefa.classList.remove('inputReject')
    } else {
        inputTarefa.classList.add('inputReject')

    }

    inputTarefa.value = '';
}

btnAddTarefa.addEventListener('click', addTarefa)
inputTarefa.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        addTarefa();
        event.preventDefault();
    }
})


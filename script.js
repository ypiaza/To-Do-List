//Logica para adicionar e remover tasks assim que concluida ou excluida

const btnAddTarefa = document.getElementById('btn-add-tarefa');
const inputTarefa = document.getElementById('tarefa');
const listaTarefas = document.getElementById('listaTarefas');
const areaTasks = document.getElementById('body')

function addTarefa(event) {
    let tarefaEscrita = inputTarefa.value;

    if (tarefaEscrita) {
        const tarefa = document.createElement('li');
        const btnArea = document.createElement('div')
        const btnDelete = document.createElement('button');
        const btnCheck = document.createElement('button');
        const btnEdit = document.createElement('button');
        const btnPriority = document.createElement('button');
        btnDelete.innerHTML = '<i class="fa-solid fa-trash"></i>';
        btnCheck.innerHTML = '<i class="fa-solid fa-check"></i>'
        btnEdit.innerHTML = '<i class="fa-solid fa-pen"></i>'
        btnPriority.innerHTML = '<i class="fa-solid fa-exclamation"></i>'
        tarefa.innerText = tarefaEscrita;
        btnArea.classList.add('btnArea')
        listaTarefas.appendChild(tarefa);
        tarefa.appendChild(btnArea);
        btnArea.appendChild(btnPriority)
        btnArea.appendChild(btnEdit);
        btnArea.appendChild(btnDelete);
        btnArea.appendChild(btnCheck);
        tarefaEscrita.value = '';


        btnDelete.addEventListener('click', () => {
            tarefa.remove(tarefa);
            const alertDel = document.querySelector('.alertDel');
            const progress = document.querySelector('.progressDel');
            const btnRevert = document.getElementById('revert');

            btnRevert.addEventListener('click', (event) => {
                listaTarefas.appendChild(tarefa);

                clearTimeout(timeoutProgress); // Cancela o timeout do progresso
                clearTimeout(timeoutHide); // Cancela o timeout de esconder o alerta
                alertDel.style.display = 'none';
                progress.style.width = '';
                event.preventDefault();
            })

            alertDel.style.display = 'flex'

            timeoutProgress = setTimeout(() => {
                progress.style.width = '100%'
            }, 100)

            timeoutHide = setTimeout(() => {
                alertDel.style.display = 'none'
                progress.style.width = ''
            }, 3000);

        })

        btnCheck.addEventListener('click', (event) => {
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
            }, 1000);

            event.preventDefault();
        })


        btnEdit.addEventListener('click', () => {
            const inputEdit = document.createElement('input')
            const btnSubmmitEdit = document.createElement('button')
            btnSubmmitEdit.innerHTML = '<i class="fa-solid fa-check"></i>'
            btnSubmmitEdit.classList.add('btnEdit')
            tarefa.appendChild(inputEdit)
            tarefa.appendChild(btnSubmmitEdit)

            function submitEdit() {
                let tarefaEditada = inputEdit.value
              
                tarefaEscrita = tarefaEditada;

                inputEdit.value = ''

                tarefa.innerText = tarefaEditada;
                tarefa.appendChild(btnArea);
            }


            btnSubmmitEdit.addEventListener('click', submmitEdit);


            inputEdit.addEventListener('keydown', (event) => {
                if (event.key === 'Enter') {
                    submmitEdit();
                    event.preventDefault();
                }
            });

        })


        btnPriority.addEventListener('click', () => {
            const btnEase = document.createElement('button')
            const btnMedium = document.createElement('button')
            const btnHard = document.createElement('button')
            const btnAreaPriority = document.createElement('div')
            btnEase.innerHTML = '<i class="fa-solid fa-face-smile"></i>'
            btnMedium.innerHTML = '<i class="fa-solid fa-face-meh-blank"></i>'
            btnHard.innerHTML = '<i class="fa-solid fa-face-flushed"></i>'
            btnAreaPriority.classList.add('btnAreaPriority')
            btnAreaPriority.appendChild(btnEase)
            btnAreaPriority.appendChild(btnMedium)
            btnAreaPriority.appendChild(btnHard)
            tarefa.appendChild(btnAreaPriority)


            //Adicionar ações dos botoes de prioridade
            
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


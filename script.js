document.addEventListener('DOMContentLoaded', ()=>{
    const input = document.getElementById('todo-input');
    const add = document.getElementById('add');
    const todoList = document.getElementById('to-do');
    const done = document.getElementById('done');

    function addTask(){
        const content = input.value.trim();
        if(content === ''){
            alert("Enter something!!!");
            return;
        }

        const li = document.createElement('li');
        li.textContent = content;

        const doneButton = document.createElement('button');
        doneButton.textContent = '✓Done';
        doneButton.addEventListener('click', ()=>{
            li.remove();
            const complete = document.createElement('li');
            complete.textContent = content;
            done.appendChild(complete);
            const remove = document.createElement('button');
            remove.textContent = '✕';
            remove.addEventListener('click', () => {
                complete.remove();
            });
            complete.appendChild(remove);
        });

        li.appendChild(doneButton);
        todoList.appendChild(li);
        input.value = '';
    }

    add.addEventListener('click', addTask);

    input.addEventListener('keydown', (event) =>{
        if(event.key === 'Enter'){
            addTask();
        }
    });

});

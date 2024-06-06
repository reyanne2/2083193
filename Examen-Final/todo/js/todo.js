// declaration variable
document.addEventListener('DOMContentLoaded', (event) => {
    var taskInput = document.getElementById('taskInput');
    var boutonAjout = document.getElementById('addButton');
    var supprimer = document.getElementById('deleteButton');
    var Liste = document.getElementById('taskList');
    var TotalTask = document.getElementById('taskTotal');

    //mettre le curseur à la bonne place
    taskInput.focus();
 
   //fonction pour enregistrer les entrées saisis
   taskInput.addEventListener('input', function() {
    if (taskInput.value.trim() === '') {
        boutonAjout.setAttribute('disabled', 'disabled');
    } else {
        boutonAjout.removeAttribute('disabled');
    }
 });

    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter' && taskInput.value.trim() !== '') {
            AjouterTask();
        }
    });


    //fonction qui ajoute des valeurs dans la liste des tasks
    function AjouterTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const li = document.createElement('li');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.addEventListener('change', mettresupprimeràjour);
            li.appendChild(checkbox);
            li.appendChild(document.createTextNode(' ' + taskText));
            li.addEventListener('click', () => {
                li.style.textDecoration = li.style.textDecoration === 'line-through' ? '' : 'line-through';
            });
            taskList.appendChild(li);
            taskInput.value = '';
            boutonAjout.disabled = true;
            mettreTasktotalàjour();
        }
    }

    //ajout du bouton Click qui permet de mettre des valeurs dans la liste lorsqu'on click
     boutonAjout.addEventListener('click', AjouterTask);
 
 // activation et update du bouton supprimer
    function mettresupprimeràjour() {
        supprimer.disabled = !Array.from(taskList.querySelectorAll('input[type="checkbox"]')).some(checkbox => checkbox.checked);
    }

     // suppression des taches
    supprimer.addEventListener('click', () => {
        const checkedTasks = taskList.querySelectorAll('input[type="checkbox"]:checked');
        checkedTasks.forEach(task => task.parentElement.remove());
        mettresupprimeràjour();
        mettreTasktotalàjour();
    });

     // activation et update du bouton Ajout
    function mettreTasktotalàjour() {
        TotalTask.textContent = `(${taskList.children.length})`;
    }
  
});
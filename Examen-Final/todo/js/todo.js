document.addEventListener('DOMContentLoaded', (event) => {
    var taskInput = document.getElementById('taskInput');
    var boutonAjout = document.getElementById('addButton');
    var supprimer = document.getElementById('deleteButton');
    var Liste = document.getElementById('taskList');
    var TotalTask = document.getElementById('taskTotal');

    //placer le curseur
    taskInput.focus();

   taskInput.addEventListener('input', function() {
    if (taskInput.value.trim() === '') {
        addButton.setAttribute('disabled', 'disabled');
    } else {
        addButton.removeAttribute('disabled');
    }
 });


    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter' && taskInput.value.trim() !== '') {
            addTask();
        }
    });
});
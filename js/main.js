
let checklist = [
  { id: 0, name: "Light weight clothing that can be layered", complete: true },
  { id: 1, name: "Long-sleeved shirts", complete: false },
  { id: 2, name: "Sweaters or fleece jacket", complete: false },
  { id: 3, name: "Comfortable walking shoes", complete: true },
  { id: 4, name: "Sunglasses and glasses case", complete: true },
  { id: 5, name: "Swimsuit", complete: false },
  { id: 6, name: "Eye mask and ear plugs", complete: false },
  { id: 7, name: "Electric converters and adapters", complete: true }
];

const checkListul = document.getElementById('checklistul');  // our list of tasks (ol)
const theTaskForm = document.getElementById('newtask');  // our new task input


theTaskForm.addEventListener('submit', event => {
  checklist.push({
    id: checklist.length,
    name: theTaskForm.task.value,
    complete: false
  });

  theTaskForm.task.value = '';

  printAllTasks();

  event.preventDefault();
});


checkListul.addEventListener('click', event => {
  if (event.target.matches('input')) {
    let theId = event.target.dataset.id;
    checklist.forEach(oneTask => {
      if (oneTask.id == theId) {
        oneTask.complete = !oneTask.complete;
      }
    })

    printAllTasks();
  }

});

function printAllTasks() {
checkListul.innerHTML = checklist.map(oneTask =>
  `<li class="task${  (oneTask.complete) ? ' complete' : ''  }">
  <label>
  <input type="checkbox"
          data-id="${ oneTask.id }"
          name="task${ oneTask.id }"
          ${ (oneTask.complete) ? ' checked' : ''}>
          ${oneTask.name}
        </label>
      </li>` ).join('');
}

printAllTasks();




let flightFirstStructure = [
  {
    date: `Data`,
    number: `Flight Number`,
    time: `Flight Time`
  },
  {
    date: `March 13th`,
    number: `ACA 61`,
    time: `14:35`
  },
];

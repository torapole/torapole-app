
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

// theTaskForm.addEventListener('submit', event => {
//   tasks.push({
//     id: tasks.length,
//     name: theTaskForm.task.value,
//     complete: false
//
//   });
//
//   theTaskForm.task.value = '';
//   printAllTasks();
//   event.preventDefault();
// })

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


checkListul.innerHTML = checklist.map(c =>
  `<li class="check">
    <label>
      <input type="checkbox" name="task${c.id}">
      ${c.name}
    </label>
  </li>` ).join('');


let flightFirstStructure = [
  {

  },
  {
    date: `March 13th`,
    number: `ACA 61`,
    time: `14:35`
  },
];

// function printAllTasks() {
//   allTasks.innerHTML = tasks.map(oneTask =>
//     `<li class="task${(oneTask.complete) ? 'complete' : ''}">
//       <label>
//         <input type="checkbox" name="task${oneTask.id}" ${(oneTask.complete) ?
//         ${oneTask.name}
//       </label>
//     </li>`).join('');
//   }



//---------------TO DO DAY PLAN---------------------------------------

var dayButton = document.querySelector('button');
var myDay = document.querySelector('userday')
// var storedDay = ""

function setUserDay(){
  var askDay = prompt('Please enter the day.');
  localStorage.setItem('day', askDay);
  myDay.textContent = 'This plan is on,' + askDay
}

if(!localStorage.getItem('day')) {
  setUserDay();
} else {
  var storedDay = localStorage.getItem('day');
  myDay.textContent = 'This plan is on,' + storedDay;
}

dayButton.onclick = function(){
  setUserDay();
}

// var _userday = document.getElementById('userday');
// _userday.innerHTML = askDay;

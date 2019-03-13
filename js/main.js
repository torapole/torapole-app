
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



checkListul.innerHTML = checklist.map(c => `<li class="check"><input type="checkbox">${c.name}</li>` ).join('');


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

const addForm = document.querySelector(".add-task"); //reference to form
const list = document.querySelector(".tasks"); //reference to ul

//Adding tasks
const generateTemplate = (task) => {
  const html = `
   <li class="mb-1 d-flex justify-content-between align-items-center">
                <span>${task}</span>
                <i class="fa-solid fa-trash-xmark delete"></i>
    </li>
    `;
  list.innerHTML += html;
};

addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const task = addForm.add.value.trim();
  console.log(task);

  //check for true if the task length is greater than 1 it return true to if condition
  if (task.length) {
    generateTemplate(task);
    addForm.reset(); //to reset the input
  }
});

//using event delegation as we already had reference for ul
list.addEventListener("click", (e) => {
  //  if (e.target.tagName === "I")
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});

async function getData() {
  try {
    const resposne = await fetch("/api");
    const data = await resposne.json();
    renderToDoList(data);
  }

  catch (error) {
    console.log(error);
  }
}

// Rendering List
function renderToDoList(todoLists) {
  const listContainer = document.querySelector(".list-container");
  const lists = todoLists.map((tasks) => {
    return /* HTML */ `
      <div class="task-container">
        <p class="task-name">${tasks}</p>
        <button type="submit">Delete</button>
      </div>
    `
  }).join('');

  listContainer.innerHTML = lists
}

getData()
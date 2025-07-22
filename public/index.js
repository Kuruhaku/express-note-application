export async function getData() {
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
  console.log(todoLists);
  const lists = todoLists.map((tasks) => {
    return /* HTML */ `
      <div class="task-container">
        <p class="task-name">${tasks.description}</p>
        <button class="delete-btn" data-id="${tasks.id}" type="submit">Delete</button>
      </div>
    `
  }).join('');

  console.log(lists);
  listContainer.innerHTML = lists

  //  == Delete Handling ==
  try {
    document.querySelectorAll(".delete-btn").forEach(btn => {
      btn.addEventListener('click', async (e) => {
        const id = e.target.getAttribute('data-id');
        const response = await fetch(`/api/postList/${id}`, { method: "DELETE" })

        if (response.ok) {
          alert("Successfully Delete the Data");
          getData();
        }
      })
    })
  }

  catch (err) {
    console.error(err);
  }
}

getData()
import { getData } from './index.js';

const form = document.querySelector(".todo-form")
const confirmation = document.querySelector(".confirmation-text")

form.addEventListener("submit", async function (note) {
  note.preventDefault();

  const todoInput = document.querySelector("#todo-input").value;

  if (!todoInput) {
    confirmation.innerHTML = "Some fields are missing. Make sure to fill out the entire form."
    confirmation.style.display = "block";
    confirmation.style.color = "red"
    return
  }

  const formData = {
    description: todoInput
  }

  try {
    const response = await fetch("/api/postList", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    })

    if (response.ok) {
      confirmation.innerHTML = "Inserted Data Successfully!"
      confirmation.style.display = "block";
      confirmation.style.color = "green";
      getData();
      return
    }
  }

  catch (error) {
    console.error("Fetch Error", error);
  }
})
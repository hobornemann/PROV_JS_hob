// 3 (3p) Hämta todo-data från denna url: https://jsonplaceholder.typicode.com/todos/
// Skriv ut med html på skärmen titeln på alla todo-objekt som har
// completed: true
// Använd fetch och async/await, samt felhantering medd try/catch.




const apiUrl3 = 'https://jsonplaceholder.typicode.com/todos/';

const todoTitleElements = document.querySelector(".todo-titles")
fetchDataWithAsyncAwait3();

async function fetchDataWithAsyncAwait3() {
  try {
    const response = await fetch(apiUrl3);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    const completedTodos = data.filter(todo => todo.completed === true);
    const html = completedTodos.map(todo => {
        return`<p>${todo.title}</p>`
    }).join('');
    todoTitleElements.innerHTML = html;
  } catch (error) {
    console.error('Async-Await Error:', error);
  }
}

/* {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  }, */




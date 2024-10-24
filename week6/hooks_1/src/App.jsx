import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [todo, setTodo] = useState(null); // To store a single todo based on the id
  const [selectedId, setSelectedId] = useState(1); // Default ID to fetch on first load

  // Fetch the todo based on the selected ID
  useEffect(() => {
    axios
      .get(`http://localhost:3000/todo/${selectedId}`) // Fetching todo with specific id
      .then(function (response) {
        setTodo(response.data.todo);
      })
      .catch(function (error) {
        console.error("Error fetching data: ", error);
      });
  }, [selectedId]); // Trigger useEffect when selectedId changes

  return (
    <div>
      <h1>Todo App</h1>
      {/* Buttons to select different todos */}
      <button onClick={() => setSelectedId(1)}>Get Todo 1</button>
      <button onClick={() => setSelectedId(2)}>Get Todo 2</button>
      <button onClick={() => setSelectedId(3)}>Get Todo 3</button>

      {/* Render the todo if it's available */}
      {todo ? <Todo title={todo.title} description={todo.description} /> : <p>Loading...</p>}
    </div>
  );
}

function Todo({ title, description }) {
  return (
    <div>
      <h1>{title}</h1>
      <h5>{description}</h5>
    </div>
  );
}

export default App;


// import { useEffect , useState } from "react";
// import axios from "axios"

// function App(){
//   const [todos , setTodos] = useState([]);

//   // can use by using id we can use it for particular id 
// useEffect( ()=> {
//   axios.get("http://localhost:3000/todo")
//   .then(function(response){
//     setTodos(response.data.todos)
//   })

// }, []) ;

//   return (
//     <div>
    
//     {todos.map(todo => <Todo title = {todo.title} description = {todo.description} />)}
//     </div>
//   );
// }

// function Todo({title , description}){
//   return <div>
//     <h1>{title}</h1>
//     <h5>{description}</h5>
//   </div>
// }

// export default App;
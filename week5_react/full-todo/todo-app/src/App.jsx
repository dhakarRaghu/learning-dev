import { useState } from 'react'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'


function App() {
  const [todo , setTodo] = useState([]);
  fetch("http://localhost:3000/todo")
  .then(async function(res){
    const json = await res.json();
    setTodo(json.todo);
  })
  
  return (
    <div>
      <CreateTodo></CreateTodo>
    <Todos todo={[
      {
        title: "asd",
        description : "adffs",
        completed: false
      },
    ]}></Todos>
    </div>
    
  )

}

export default App

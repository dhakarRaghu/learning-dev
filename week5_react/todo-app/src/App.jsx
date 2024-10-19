import { count } from "drizzle-orm"
import { useState } from "react";

function App() {

  const [todos ,setTodos ] = useState([{
    title: "Go to gym ",
    description: "Go to gym from 7:30 to 8:45 am",
    completed : false
  },{
    title: "Study CP ",
    description : "study cp from 10 :00 to 1:00pm" ,
    completed : false
  },
  {
    title: "Go to mess",
    description: "eat to live",
    completed : false
  }
]);

  function addTodo(){
    setTodos([...todos, {
      title: "new Todo",
      description : "desc of new todo"
    }])
  }

  return (
    <div>
      <button onClick={addTodo}>Add a random todo</button>
      {/* <Todo title = {todos[0].title} description = {todos[0].description}></Todo>
      <Todo title = {todos[1].title} description = {todos[1].description}></Todo> */}

      {todos.map(function(todo){
        return <Todo title= {todo.title} description= {todo.description} ></Todo>
      })}
    </div>
  )
}

function Todo(props){

  return <div>
    <h1> {props.title}</h1>
    <h2>{props.description}</h2>
  </div>
}

export default App

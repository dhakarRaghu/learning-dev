import { count } from "drizzle-orm"
import { useState } from "react";

function App() {

  const [count , setCount] = useState(0);

  function onclick_handler(){
    setCount(count + 1);
  }


  return (
    <div>
    <button onClick={onclick_handler}>Counter {count}</button>
    </div>
  )
}

export default App

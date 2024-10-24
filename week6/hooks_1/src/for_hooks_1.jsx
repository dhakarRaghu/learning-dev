import React, { useState } from "react"


// function App(){

//   return (
//     <>
//      {/* // to avoid the re - render bcause  child parents render everything */}
//        < HeaderWithButton /> 
//         <Header title="har2"></Header>
    
//     </>
//   )
// }

// function HeaderWithButton(){
//   const [title , setTitle] = useState("hari");
//   function updateTitle(){
//     setTitle("my name is " + Math.random());
//   }

//   return<>
//     <button onClick={updateTitle}>update the title</button>
//     <Header title = {title}></Header>
//     </>

// }
// /*
// const Header = React.memo(funtion Header({title}){
//   return <div>
//     {title}
//   </div>
// })
//    */

// function Header({title}){
//   return <div>
//     {title}
//   </div>
// }

// export default App

 /* KKKKKKKKEEEEEEEEEEYYYYYYYYYYY */
//  import React, { useState } from 'react';

// function Todo({ title, description }) {
//   return (
//     <div>
//       <h1>{title}</h1>
//       <h5>{description}</h5>
//     </div>
//   );
// }

// function App() {
//   const [todos, setTodo] = useState([
//     {
//       id: 1,
//       title: "Go to gym",
//       description: "Need you"
//     },
//     {
//       id: 2,
//       title: "Go to study",
//       description: "Need you"
//     },
//     {
//       id: 3,
//       title: "Go hard",
//       description: "Need you"
//     }
//   ]);

//   function addTodo() {
//     setTodo([
//       ...todos,
//       {
//         id: todos.length + 1,
//         title: `Todo ${todos.length + 1}`,
//         description: `Description for todo ${todos.length + 1}` 
//       }
//     ]);
//   }

//   return (
//     <div>
//       <button onClick={addTodo}>Add a todo</button>
//       {todos.map(todo => (
//         <Todo 
//           key={todo.id} 
//           title={todo.title} 
//           description={todo.description} 
//         />
//       ))}
//     </div>
//   );
// }

// export default App;

// function App(){
//   return (
//     <div>
//       <CardWrapper innerComponent={<TextComponent />} />
//       <CardWrapper innerComponent={<TextComponent2 />} />
//     </div>
//   );
// }
function App(){
  return (
    <div>
      <CardWrapper >
    <div>
      hi there 
    </div>
      </CardWrapper>
      <CardWrapper >
    <div>
     <TextComponent />
    </div>
      </CardWrapper>
    </div>
  );
}



function TextComponent(){
  return (
    <div>
      Hi there text
    </div>
  );
}
function TextComponent2(){
  return (
    <div>
      Hi there8936
    </div>
  );
}

function CardWrapper({children}){
  return (
    <div style={{border: "2px solid black" , padding:20 , margin : 10}}>
      {children}
    </div>
  );
}
// function CardWrapper({ innerComponent }){
//   return (
//     <div style={{border: "2px solid black" , padding:20 , margin : 10}}>
//       {innerComponent}
//     </div>
//   );
// }

export default App;

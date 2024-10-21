import { useState } from "react";

export function CreateTodo(){

    //react query
    const [title , setTitle] = useState("");
    const [description, setDescription] = useState("");


    return <div>
        <input id="title" style={{
            padding:15,
            margin:10
        }} type="text" placeholder="title"  onChange={function(e){
            const val = e.target.value;
        }}
        /> <br />
        <input id="desc" style={{
            padding:15,
            margin:10
        }} type="text" placeholder="description"/> <br />

        <button style={{
            padding:15,
            margin:10
        }} onClick={ () => {
            fetch("http://localhost:3000/todo" , {
                method: "POST",
                body : JSON.stringify({
                    title: title,
                    description : description
                }),
                headers: {
                    "Content-type": "application/json",
                }
            })
            .then(async function (res) {
                const json = await res.json();
                alert("todo added");
            })
        }}
        >Add a todo</button>
    </div>
}


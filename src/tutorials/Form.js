import { useState, useRef, useEffect } from "react";


/*
  Form 

  1 Form data handling
  2 Form tricks 
*/


/*
  1 Form data handling

  It's totally different from HTML.
  handling form data with state
*/


export function HandlingData() {
  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    
    // accessing form data
    console.log("email:", email);
  }

  function handleChange(e) {
    setEmail(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Newsletter</h1>
      <input 
        type="email"
        placeholder="bunny@example.com" 
        onChange={handleChange} 
      />
      <button type="submit">Subscribe</button>
    </form>  
  )
}


/*
  Form tricks

  1 Dynamic button
  2 Clearing input after submit
  3 Auto focus on input
*/


/*
  Dynamic button
*/


export function DynamicButton() {
  const [comment, setComment] = useState("");

  return (
    <>
      <h1>Add a comment</h1>
      <input 
        type="text" 
        onChange={(e) => setComment(e.target.value)}
      />  
      <button 
        disabled={!comment.trim()}
      >
        Send
      </button>
    </>
  )
}


/*
  Clearing input after submit
*/


export function ClearingInput() {
  const [todo, setTodo] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    alert("Added");
    setTodo("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Todo App 📝</h1>
      <input 
        type="text" 
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="New Todo"
      />  
      <button>Add</button>
    </form>
  )
}


/*
  Auto focus on input
*/


export function AutoFocus() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  })

  return (
    <>
      <h1>Explore</h1>

      <input 
        type="search" 
        placeholder="username" 
        ref={inputRef}
      />
    </>
  )
}

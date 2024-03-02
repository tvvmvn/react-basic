import React, { useState, useEffect, useRef } from "react";

export default function Lab() {
  return <Snippet />
}


/*
  * handling form

*/


function Snippet() {
  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log("email:", email);
    setEmail("");
  }

  function handleChange(e) {
    setEmail(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>handling form</h1>
      <input 
        type="text"
        placeholder="bunny@example.com" 
        value={email}
        onChange={handleChange} 
      />
      <button disabled={!email}>Submit</button>
    </form>  
  )
}


/*
  useEffect

  It can give many effects on app

  - use case
  1) useEffect(effect)
  excute effect whenever component is rendered.
  
  2) useEffect(effect, []) 
  excute effect only at initial rendering.
  
  3) useEffect(effect, [deps])
  excute effect at initial rendering and whenever deps(dependencies) is updated.
*/


export function UseEffectHook() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("rendered at " + new Date().toLocaleTimeString());
  }, [])

  return (
    <>
      <h3>useEffect Hook</h3>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Add</button>
    </>  
  )
}


/*
  * useRef

  It allows to access real element
*/


// function Snippet() {

//   const inputRef = useRef(null);

//   // should access asynchronously
//   useEffect(() => {
//     inputRef.current.focus();
//   }, [])

//   return (
//     <>
//       <h1>useRef</h1>
//       <p>It allows access to real element </p>
//       <input 
//         type="text" 
//         autoFocus 
//         ref={inputRef}
//       />
//     </>  
//   )
// }

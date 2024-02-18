import React, { useState, useEffect, useRef } from "react";

export default function Lab() {
  return <Snippet />
}

// # handling form

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


// # useRef

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

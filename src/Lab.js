import React, { useState, useEffect, useRef } from "react";

export default function Lab() {
  return <Snippet />
}

// # form

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
      <h1>Subscribe</h1>
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

// # live search

// function Snippet() {
//   const [query, setQuery] = useState("");
//   const list = ["foo", "bar", "baz"];

//   const results = list.filter(item => item.indexOf(query) > -1); 

//   return (
//     <>
//       <h1>Live search</h1>
//       <input type="text" onChange={(e) => setQuery(e.target.value)} />

//       <ul>
//         {results.map(item => (
//           <li key={item}>{item}</li>
//         ))}
//       </ul>
//     </>  
//   )
// }


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

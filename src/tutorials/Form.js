import { useState, useRef, useEffect } from "react";


/*
  * React Form 

  1 form data handling
  2 How to use form tricks 
*/


/*
  1 form data handling

  It's totally different from HTML.
  handling form data with state
*/


export function HandlingData() {
  const [q, setQ] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    
    // accessing form data
    console.log("q:", q);
  }

  function handleChange(e) {
    setQ(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Google</h1>
      <input 
        type="search"
        placeholder="Search Google" 
        onChange={handleChange} 
      />
      <button type="submit">Search</button>
    </form>  
  )
}


/*
  form tricks

  1 dynamic button - login form
  2 clearing input after submit - todo form
  3 auto focus - search form
*/


export function Tricks() {
  const [email, setEmail] = useState("");
  const inputRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    
    // accessing form data
    console.log("email:", email);
    setEmail("");
  }

  function handleChange(e) {
    setEmail(e.target.value);
  }

  useEffect(() => {
    inputRef.current.focus();
  })

  return (
    <form onSubmit={handleSubmit}>
      <h1>Form tricks</h1>
      <input 
        type="text"
        value={email}
        placeholder="bunny@example.com" 
        onChange={handleChange} 
        ref={inputRef}
      />
      <button type="submit" disabled={!email}>
        Submit
      </button>
    </form>  
  )
}
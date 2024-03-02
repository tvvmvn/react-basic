import { useState } from "react";

/*
  * form in React

  1 form data handling
  It's totally different from HTML.
  handling form data with useState Hook.

  2 How to use tricks 
  disabling button or clearing input
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
      <h1>handling form data</h1>
      <input 
        type="text"
        placeholder="bunny@example.com" 
        onChange={handleChange} 
      />
      <button type="submit">Submit</button>
    </form>  
  )
}

export function Tricks() {
  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    
    // accessing form data
    console.log("email:", email);
    setEmail("");
  }

  function handleChange(e) {
    setEmail(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>handling form data</h1>
      <input 
        type="text"
        value={email}
        placeholder="bunny@example.com" 
        onChange={handleChange} 
      />
      <button type="submit" disabled={!email}>
        Submit
      </button>
    </form>  
  )
}
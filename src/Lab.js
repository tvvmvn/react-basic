import { 
  useState, 
  useEffect, 
  useRef, 
  createContext, 
  useContext 
} from "react";

export default function Lab() {
  return <Snippet />
}


/*
  1 dynamic button - comment
  2 clearing input after submit - todo form
  3 auto focus - search form
*/


function Snippet() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  })

  return (
    <>
      <h1>Autofocus</h1>
      <h3>Google</h3>
      <input 
        type="search" 
        placeholder="Google Search" 
        ref={inputRef}
      />
    </>
  )
}

function __Snippet() {
  const [todo, setTodo] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    alert("Added");
    setTodo("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Clearing input</h1>
      <h3>Todo List 📝</h3>
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

function _Snippet() {
  const [comment, setComment] = useState("");

  return (
    <>
      <h1>Dynamic button</h1>
      <h3>Add a comment</h3>
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

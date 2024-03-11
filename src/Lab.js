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

function Snippet() {
  const inputRef = useRef(null);
  
  // async
  useEffect(() => {
    console.log(inputRef.current);
  });

  return (
    <div>
      <h1>Accessing real element</h1>
      <input type="text" ref={inputRef} />
    </div>  
  )
}

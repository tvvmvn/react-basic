import { 
  useEffect, 
  useRef, 
} from "react";


/*
  Basic

  1 basic usage
  2 accessing real element
  3 useRef Hook
*/


export function Basic() {
  //  It's not HTML. It is JSX.
  return <h1>Hello React!</h1>
}


export function Element() {
  
  // async
  useEffect(() => {
    console.log(document.getElementById("input"));
  });

  // inject tree to document.
  return (
    <div>
      <h1>Accessing real element</h1>
      <input id="input" type="text" />
    </div>  
  )
}


export function RefHook() {
  const inputRef = useRef(null);

  useEffect(() => {
    console.log(inputRef.current);
  });

  return (
    <div>
      <h1>Accessing real element</h1>
      <input id="input" type="text" ref={inputRef} />
    </div>  
  )
}

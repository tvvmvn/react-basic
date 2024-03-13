import { 
  useEffect, 
  useRef, 
} from "react";


/*
  Basic

  1 Basic usage
  2 Accessing real element
  3 useRef Hook
*/


/*
  Basic usage

  virtual tree is converted to real tree 
  and injected to document.
*/


export function Basic() {
  //  virtual tree
  return <h1>Hello React!</h1>
}


/*
  Accessing real element
*/


export function Element() {
  
  // async
  useEffect(() => {
    console.log(document.getElementById("input"));
  });

  return (
    <div>
      <h1>Accessing real element</h1>
      <input id="input" type="text" />
    </div>  
  )
}


/*
  useRef Hook

  It is used to access real element.
*/


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

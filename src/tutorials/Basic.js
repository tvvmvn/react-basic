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
    console.log(document.getElementById("btn"));
  });

  return (
    <div>
      <h1>Accessing real element</h1>
      <button id="btn">나 잡아봐라</button>
    </div>  
  )
}


/*
  useRef Hook

  It is used to access real element.
*/


export function RefHook() {
  const buttonRef = useRef(null);

  useEffect(() => {
    console.log(buttonRef.current);
  });

  return (
    <div>
      <h1>Accessing real element</h1>
      <button ref={buttonRef}>button</button>
    </div>  
  )
}

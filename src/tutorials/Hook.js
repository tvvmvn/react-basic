import { useEffect, useRef, useState } from "react";


/*
  * React Basic Hook
  special methods which React provides.
  It process many tasks in app.

  1 useEffect
  2 useRef
  3 useState
*/


/*
  useEffect

  you can give many effects with it to app.

  - use case
  1) useEffect(effect)
  excute effect whenever component is rendered.
  
  2) useEffect(effect, []) 
  excute effect only at initial rendering.
  
  3) useEffect(effect, [deps])
  excute effect at initial rendering and whenever deps(dependencies) is updated.
*/


export function EffectHook() {

  useEffect(() => {
    // effect
    document.title = "lol";
  }, [])
}


/*
  * useRef

  It allows to access real element
*/


export function RefHook() {

  const inputRef = useRef(null);

  // should access asynchronously
  useEffect(() => {

    // access
    console.log("element:", inputRef.current);

    inputRef.current.focus();
  }, [])

  return (
    <>
      <h1>useRef</h1>
      <input 
        type="text" 
        ref={inputRef}
      />
    </>  
  )
}


/*
  useState Hook

  const [state, setState] = useState(initialValue);

  1 state: variable in component
  2 setState(newState): function that updates state.
  3 initialValue: initial value of state.
*/


export function StateHook() {
  const [time, setTime] = useState(2024);

  // Why should we use it with useEffect?
  useEffect(() => {
    setTime(1984);
  }, [])
  
  console.log("I'm in", time);
}

import { useState } from 'react';


/*
  Update View

  1 Basic example
  2 Dynamic styling
*/


/*
  An basic example
  It is achieved by useState Hook.

  ---
  
  useState Hook

  const [state, setState] = useState(initialValue);

  1 state: variable in component
  2 setState(newState): function that updates state.
  3 initialValue: initial value of state.
*/


export function UseStateHook() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
      <p>count: {count}</p>
      <button onClick={handleClick}>+</button>
    </>
  )
}


/*
  Dynamic Styling
*/


export function DynamicStyling() {
  const [liked, setLiked] = useState(false);

  return (
    <>
      <h1>Dynamic styling</h1>

      <svg 
        style={{ width: "2rem", fill: liked ? "#e00" : "#ddd" }}
        onClick={() => setLiked(!liked)}
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 512 512"
      >
        <path d="M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 18.5-10.5 34.6-25.9 42.6C497 275.4 504 288.9 504 304c0 23.4-16.8 42.9-38.9 47.1c4.4 7.3 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z"/>
      </svg>
    </>  
  )
}
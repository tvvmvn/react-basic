import { useState } from 'react';


/*
  Update View

  1 useState Hook
  2 Update higher state
*/


/*
  1 useState Hook

  const [state, setState] = useState(initialValue);

  state: variable
  setState(newState): a method that updates state.
  initialValue: initial value of state.
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
  Updates higher state
*/


export function UpdateWithComposition() {
  
  function Btn({ handleClick }) {
    return <button onClick={handleClick}>+</button>
  }
    
  function Snippet() {
    const [count, setCount] = useState(0);

    function handleClick() {
      setCount(count + 1);
    }

    return (
      <>
        <p>count: {count}</p>
        <Btn handleClick={handleClick} />
      </>  
    )
  }

  return <Snippet />
}




import { useState } from 'react';

/*
  Update View

  1 useState Hook
  2 update state and composition
*/


/*
  1 useState Hook

  const [state, setState] = useState(initialValue);

  state: a variable in Component
  setState(newState): a method that updates state.
  initialValue: initial value of state.
*/

export function UseStateHook() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  )
}

/*
  2 update state and composition
  A composited Component updates the state of main component.
*/

export function UpdateWithComposition() {
  function Snippet() {
    const [count, setCount] = useState(0);

    function handleClick() {
      setCount(count + 1);
    }

    return (
      <>
        <p>count: {count}</p>
        <Button handleClick={handleClick} />
      </>  
    )
  }

  function Button({ handleClick }) {
    return (
      <button onClick={handleClick}>+</button>
    )
  }

  return <Snippet />
}




import { useState } from 'react';

/*
  Update View

  1 useState Hook
*/


/*
  useState Hook

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
      <button onClick={() => setCount(count + 1)}>Add</button>
    </>
  )
}





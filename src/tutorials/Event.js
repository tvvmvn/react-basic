/* 
  Event handling
*/


export function Basic() {

  function handleClick() {
    alert('lol');
  }

  return (
    // onEvent={eventHandler}
    <button onClick={handleClick}>
      button
    </button>
  )
}

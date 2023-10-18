/* 
  event handling in JSX

  onEventName={eventHandler}
*/


export function Basic() {

  function handleClick() {
    alert('lol');
  }

  return <button onClick={handleClick}>button</button>
}

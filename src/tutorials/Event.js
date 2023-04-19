
export function Basic() {

  function handleClick(e) {
    alert('lol');
  }

  // onEventName={eventHandler}

  return (
    <>
      <h3>Event and EventHandler</h3>      
      <button onClick={handleClick}>Button</button>
    </>  
  )
}

import { useState } from 'react'

export function JSX() {

  const beers = [
    { name: "Heineken", origin: "Netherlands", available: false },
    { name: "Guinness", origin: "Ireland", available: true },
    { name: "Asahi", origin: "Japan", available: true }
  ]

  return (
    <>
      <h1>Beers</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Origin</th>
            <th>Avaiable</th>
          </tr>
        </thead>
        <tbody>
          {beers.map((beer, index) => (
            <tr>
              <td>{beer.name}</td>
              <td>{beer.origin}</td>
              <td>{beer.available ? "Yes" : "No"}</td>
            </tr>  
          ))}
        </tbody>
      </table>
    </>
  )
}


export function Snippet() {
  const [subscribed, setSubscribed] = useState(false);

  return (
    <>
      <h1>Subscribe button</h1>
      <button onClick={() => setSubscribed(!subscribed)}>
        {!subscribed ? "Subscribe" : "Subscribed"}
      </button>
    </>  
  )
}
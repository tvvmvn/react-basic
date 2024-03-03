import { useState } from "react"


/*
  JSX rendering

  Q. Create following table
*/


export function JSX() {
  const beers = [
    { name: "Guinness", origin: "Ireland", available: false },
    { name: "Heineken", origin: "Netherlands", available: true },
    { name: "Budwiser", origin: "USA", available: true }
  ]

  const beerRows = beers.map((beer, index) => (
    <tr key={beer.name}>
      <td>{++index}</td>
      <td>{beer.name}</td>
      <td>{beer.origin}</td>
      <td>{beer.available ? "Yes" : "No"}</td>
    </tr>  
  ))

  return (
    <>
      <h1>Beers</h1>
      <table border="1">
        <thead>
          <tr>
            <td>No</td>
            <th>이름</th>
            <th>원산지</th>
            <th>판매중</th>
          </tr>
        </thead>
        <tbody>
          {beerRows}
        </tbody>
      </table>
    </>
  )
}


/*
  Q. Component Composition & Props.

  When VIEW is like the left screen,
  Complete components.
*/


export function ComponentComposition() {
  
  function Articles({ articles }) {
    return (
      <section>
        <h3>The latest articles</h3>
        
        <ul>
          {articles.map(article => (
            <li key={article.id}>
              <b>{article.category}</b> {article.title}
            </li>  
          ))}
        </ul>
      </section>  
    )
  }

  function Foo() {}

  // main
  function Snippet() {

    const DATA = [
      { id: "a2", category: "Economics", title: "this is a title" },
      { id: "a1", category: "Sports", title: "this is a title" },
      { id: "a0", category: "Entertainment", title: "this is a title" },
    ]

    return (
      <>
        <h1>News</h1>
        
        <Articles articles={DATA} />
        {/* additionally.. */}
        <Foo data={DATA} />
      </>  
    )
  }

  return <Snippet />
}


/*
  Update View
*/


export function UpdateView() {
  const [subscribed, setSubscribed] = useState(false);

  function handleClick() {
    setSubscribed(!subscribed);
  }

  return (
    <>
      <h1>Subscribe button</h1>
      <button onClick={handleClick}>
        {subscribed ? "구독중" : "구독하기"}
      </button>
    </>  
  )
}

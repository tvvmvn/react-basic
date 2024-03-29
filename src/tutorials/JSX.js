/*
  JSX (JavaScript eXtension)

  A Syntax extension for JavaScript.
  Is is used for making virtual tree.
  Declarative syntax

  1 Basic Syntax
  2 Fragments
  3 Print variables 
  4 Conditional rendering 
  5 List rendering 
*/


/*
  Basic Syntax
*/


export function JSXBasic() {
  return (
    <form>
      <h1>Google</h1>
      <input
        type="search"
        id="search"
        name="q"
        className="class1 class2"
        style={{ display: "inline-block" }}
        placeholder="Search Google"
        autoComplete="off"
      />
    </form>
  )
}


/* 
  Fragments

  Virtual tree should be wrapped by one tag.
  you can use fragments if you don't want to make a tag
  unnecessarily.
*/


export function Fragment() {

  return (
    // fragments
    <> 
      <h1>Heading</h1>

      <ul>
        <li>list item</li>
        <li>list item</li>
        <li>list item</li>
      </ul>
    </>  
  )
}


/*  
  Print variables in JSX
*/


export function Print() {

  const cat = {
    name: "Kitty",
    age: 2,
    home: null,
    sound: function () {
      return "meow"
    }
  }

  return (
    <ul>
      <li>name: {cat.name}</li>
      <li>age: {cat.age}</li>
      <li>home: {cat.home}</li>
      <li>sound: {cat.sound()}</li>
    </ul>
  )
}


/*
  Conditional rendering

  1 && (AND)
  expr1 && expr2 

  if expr1 is true, print expr2. 
  if expr1 is false, print nothing.

  2 || (OR)
  expr1 || expr2 

  if expr1 is true, print expr1 
  if expr1 is false, print expr2 

  3 Ternary
  condition ? expr1 : expr2 
  
  if condition is true, print expr1
  if condition is false, print expr2
*/


export function Condition() {

  return (
    <>
      <h2>Conditional rendering</h2>

      <h3>&& (AND)</h3>
      <ol>
        <li>{true && "표현식 2"}</li>
        <li>{false && "표현식 2"}</li>
      </ol>

      <h3>|| (OR)</h3>
      <ol>
        <li>{"표현식 1" || "표현식 2"}</li>
        <li>{"" || "표현식 2"}</li>
      </ol>


      <h3>? (Ternary)</h3>
      <ol>        
        <li>{true ? "표현식 1" : "표현식 2"}</li>
        <li>{false ? "표현식 1" : "표현식 2"}</li>
      </ol>
    </>  
  )
}


/*
  List rendering
*/


export function Loop() {
  
  const beers = [
    { name: "Heineken", origin: "Netherlands" },
    { name: "Guinness", origin: "Ireland" },
    { name: "Asahi", origin: "Japan" }
  ]
  
  const beerList = beers.map((beer) => (
    // list rendering needs key. It should be unique value. 
    <li key={beer.name}>
      <b>{beer.name}</b> - {beer.origin}
    </li>
  ))

  return (
    <>
      <h3>List rendering</h3>
      <ul>
        {beerList}
      </ul>
    </>
  )
}









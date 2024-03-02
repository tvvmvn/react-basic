/*
  JSX (JavaScript eXtension)

  A Syntax extension for JavaScript.
  Is is used for making virtual tree.
  Declarative

  1 JSX Basic Syntax
  2 JSX Fragment
  3 Print variables in JSX
  4 Conditional rendering in JSX
  5 List rendering in JSX
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
        style={{ outline: "none" }}
        placeholder="Search Google"
        autoComplete="off"
      />
    </form>
  )
}


/* 
  Fragments

  empty tag which wraps entire tree
*/


export function Fragment() {

  // compare <div></div> with <></>

  return (
    <div>
      <h1>JSX Fragment</h1>
      <ul>
        <li>list item</li>
        <li>list item</li>
        <li>list item</li>
      </ul>
    </div>  
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
      <li>Name: {cat.name}</li>
      <li>Age: {cat.age}</li>
      <li>Home: {cat.home}</li>
      <li>Sound: {cat.sound()}</li>
    </ul>
  )
}


/*
  JSX Conditional rendering

  1 && (AND)
  expr1 && expr2 

  print expr2 if expr1 is true.
  not print if expr1 is false

  2 || (OR)
  expr1 || expr2 

  print expr1 if expr1 is true.
  print expr2 if expr1 is false.


  3 ? (Ternary)

  condition ? expr1 : expr2 
  print expr1 if condition is true.
  print expr2 if condition is false.
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
    <li key={beer.name}>
      <b>{beer.name},</b> {beer.origin}
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









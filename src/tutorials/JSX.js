/*
  JSX (JavaScript extension)
  A Syntax extension to JavaScript
  used for create virtual elements
  Declarative 
  Compile to plain JavaScript Object

  1 JSX Syntax
  2 JSX Fragment
  2 print variables in JSX
  3 Condition in JSX
  4 Loop in JSX
*/


export function JSXBasic() {
  
  // attributes
  // className
  // style

  return (
    <form>
      <h1>Google</h1>
      <input
        type="search"
        className="class1 class2"
        style={{ padding: "0.5rem", width: '20rem' }}
        placeholder="Search Google"
        autoComplete="off"
      />
    </form>
  )
}

export function Fragment() {

  // elements must be wrapped in one tag.

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


export function Print() {

  // Print Variables in JSX

  let cat = {
    name: 'Kitty',
    age: 2,
    home: null,
    sound: function () {
      return 'meow'
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

export function Condition() {

  /*
    A condition is something that evaluates to true/false. 
    An expression is just a technical term for "code" really. 
    It could be anything.
  */

  return (
    <>
      <h2>JSX Conditional rendering</h2>

      <h3>&& (Logical AND)</h3>
      <p>
        expr1 && expr2 <br />
        print expr2 if expr1 is considered true.
      </p>
      <p>{true && "You can see me"}</p>
      <p>{null && "You cannot see me"}</p>

      <h3>|| (Logical OR)</h3>
      <p>
        expr1 || expr2 <br />
        print expr1 if expr1 is considered true.
        print expr2 if expr1 is considered false.
      </p>
      <p>{"You can see me" || "You cannot see me"}</p>
      <p>{null || "You can see me"}</p>

      <h3>? (Ternary)</h3>
      <p>
        condition ? expr1 : expr2 <br />
        print expr1 if condition is true.
        print expr2 if condition is false.
      </p>
      <p>{true ? 'Condition is true' : 'Condition is false'}</p>
      <p>{false ? 'Condition is true' : 'Condition is false'}</p>
    </>  
  )
}

export function Loop() {
  
  const beers = [
    { name: "Heineken", origin: "Netherlands" },
    { name: "Guinness", origin: "Ireland" },
    { name: "Asahi", origin: "Japan" }
  ]
  
  // Rendering list: Array.map
  const beerList = beers.map((beer, index) => (
    <li key={index}>{beer.name}, {beer.origin}</li>
  ))

  return (
    <>
      <h3>World Beers</h3>
      <ul>
        {beerList}
      </ul>
    </>
  )
}









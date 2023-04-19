/*
  JSX
  
  Stands for JavaScript extension 
  A Syntax extension to JavaScript
  used for create virtual DOM
  Declarative
  Compile to plain JavaScript Object

  2 JSX Syntax
  3 print JavaScript result in JSX
  4 Condition in JSX
  5 Loop in JSX
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

  // You can replace outer div with empty tag if it's not necessary. 
  // try it yourself.

  return (
    <div>
      <h1>Unordered list</h1>
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
    <>
      <h3>{cat.name}</h3>
      <ul>
        <li>Name: {cat.name}</li>
        <li>Age: {cat.age}</li>
        <li>Home: {cat.home}</li>
        <li>Sound: {cat.sound()}</li>
      </ul>
    </>  
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
      <h1>JSX Conditional rendering</h1>

      <h3>1 && (Logical AND)</h3>
      <p>
        expr1 && expr2 <br />
        print expr2 if expr1 is true.
      </p>
      <p>Result: {true && "expr1 was true"}</p>

      <h3>2 || (Logical OR)</h3>
      <p>
        expr1 || expr2 <br />
        print expr1 if expr1 is true.
        print expr2 if expr1 is false.
      </p>
      <p>Result: {false || "expr1 was false"}</p>

      <h3>3 ? (Ternary)</h3>
      <p>
        condition ? expr1 : expr2 <br />
        print expr1 if condition is true.
        print expr2 if condition is false.
      </p>
      <p>Result: {true ? 'Condition was true' : 'Condition was false'}</p>
    </>  
  )
}

export function Loop() {

  // Rendering list
  
  const beers = [
    { name: "Heineken", origin: "Netherlands" },
    { name: "Guinness", origin: "Ireland" },
    { name: "Asahi", origin: "Japan" }
  ]

  return (
    <>
      <h3>World Beers</h3>
      <ul>
        {beers.map((beer, index) => (
          <li key={index}>{beer.name}, {beer.origin}</li>
        ))}
      </ul>
    </>
  )
}









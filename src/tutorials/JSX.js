/*
  JSX (JavaScript extension)
  A Syntax extension to JavaScript
  used for create virtual elements
  Declarative 
  Compile to plain JavaScript Object

  1 JSX Basic Syntax
  2 JSX Fragment
  2 Print variables in JSX
  3 Conditional rendering in JSX
  4 List rendering in JSX
*/


/*
  1 JSX Basic Syntax
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

/* 
  2 Fragments
*/

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


/*  
  3 Print variables in JSX
*/

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


/*
  JSX Conditional rendering

  1 &&(AND)
  expr1 && expr2 
  print expr2 if expr1 is considered true.

  2 ||(OR)
  expr1 || expr2 
  print expr1 if expr1 is considered true.
  print expr2 if expr1 is considered false.

  3 ?(Ternary)
  condition ? expr1 : expr2 
  print expr1 if condition is true.
  print expr2 if condition is false.
*/

export function Condition() {

  /*
    A condition is something that evaluates to true/false. 
    An expression is just a technical term for "code" really. 
    It could be anything.
  */

  return (
    <>
      <h2>JSX Conditional rendering</h2>

      <h3>&&</h3>
      <p>{true && "나는 보입니다"}</p>
      <p>{null && "나는 안보입니다"}</p>

      <h3>||</h3>
      <p>{"나는 보입니다" || "나는 안보입니다"}</p>
      <p>{null || "나는 보입니다"}</p>

      <h3>Ternary</h3>
      <p>{true ? '조건이 참입니다' : '조건이 거짓입니다'}</p>
      <p>{false ? '조건이 참입니다' : '조건이 거짓입니다'}</p>
    </>  
  )
}


/*
  5 List rendering
*/

export function Loop() {
  
  const beers = [
    { name: "Heineken", origin: "Netherlands" },
    { name: "Guinness", origin: "Ireland" },
    { name: "Asahi", origin: "Japan" }
  ]
  
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









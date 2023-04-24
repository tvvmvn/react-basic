/*
  # React and ES6
  React uses es6 syntax in most cases

  1 Destructing syntax
  2 Spread operator
  3 let and const
  4 Array.map
  5 ...
*/

export function ES6() {
  return <h2>React and ES6</h2>
}

function Map() {

  /*
    Array.map
    perform some operation on each item of array.
    return updated array.
  */

  const numbers = [1, 2, 3];

  const result = numbers.map((item, index) => {
    return item * 10;
  })

  console.log(result);


  // const beers = ["Guinness", "Heineken", "Budwiser"];

  // const result = beers.map((beer, index) => {
  //   return beer.toUpperCase();
  // })

  // console.log(result);
}

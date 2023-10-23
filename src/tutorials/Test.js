import React, { useState, useEffect, useRef } from "react";

export default function Test() {
  return <Snippet />
}

// function Snippet() {
//   const el = useRef(null);

//   window.addEventListener("scroll", (e) => {
//     var scrollTop = window.document.documentElement.scrollTop;
    
//     console.log(scrollTop);
    
//     if (scrollTop > 100) {
//       el.current.style.color = "#f00"
//     } else {
//       el.current.style.color = "#000"
//     }
//   })

//   return (
//     <div style={{ height: "2000px" }}>
//       <h3>Test</h3>

//       <p 
//         style={{ position: "fixed", bottom: "0" }}
//         ref={el}
//       >
//         Some text
//       </p>
//     </div>
//   )
// }

// function Snippet() {

//   const canvasRef = useRef(null);

//   setInterval(() => {
//     const canvas = canvasRef.current;

//     const ctx = canvas.getContext("2d");

//     ctx.fillRect(0, 0, 100, 50);
//   }, 10)

//   return (
//     <>
//       <canvas 
//         style={{ border: "1px solid" }}
//         width="200"
//         height="200"
//         ref={canvasRef}
//         >  
//       </canvas>
//     </>  
//   )
// }

// class Snippet extends React.Component {
//   constructor() {
//     super();
//     this.state = { foo: "bar" };
//   }

//   render() {
//     return <h1>State: {this.state.foo}</h1>
//   }
// }

// class Snippet extends React.Component {
//   constructor(props) {
//     super(props)
//     console.log(props)
//   }

//   render() {
//     return <h1>{this.props.foo}</h1>
//   }
// }


// class Snippet extends React.Component {
//   constructor() {
//     super()
//     this.state = { foo: "bar" }
//   }

//   handleClick = () => {
//     this.setState({ foo: "baz" })
//   }

//   render() {
//     return (
//       <>
//         <p>{this.state.foo}</p>
//         <button onClick={this.handleClick}>
//           Button
//         </button>
//       </>
//     )
//   }
// }

/* 
Lifecycle of Components
Each component in React has a lifecycle thas has three main phases.

The three phases are:
1 Mounting 
2 Updating
3 Unmounting
*/

/*
Mounting

Mounting means putting elements into the DOM.
React has four built-in methods that gets called, 
in this order, when mounting a component:

1 constructor()
2 getDerivedStateFromProps()
3 render()
4 componentDidMount()
*/

// class Header extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { favoritecolor: "red" };
//   }

//   /*
//   The getDerivedStateFromProps method is called 
//   right before the render method:
//   */
//   static getDerivedStateFromProps(props, state) {
//     console.log(props, state)
    
//     return { 
//       // state has been changed from red to yellow.
//       favoritecolor: props.favoritecolor 
//     };
//   }

//   render() {
//     return (
//       <h1>My Favorite Color is {this.state.favoritecolor}</h1>
//     );
//   }
// }

// function Snippet() {
//   return <Header favoritecolor="yellow" />
// }


// class Snippet extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { 
//       favoritecolor: "red" 
//     };
//   }

//   /*
//   The componentDidMount() method is called 
//   after the component is rendered.
  
//   data fetching..
//   */
//   componentDidMount() {
//     setTimeout(() => {
//       this.setState({ favoritecolor: "yellow" })
//     }, 1000)
//   }

//   render() {
//     return (
//       <h1>My Favorite Color is {this.state.favoritecolor}</h1>
//     );
//   }
// }

/*
Updating
A component is updated whenever there is a change 
in the component's state or props.

React has five built-in methods that gets called, in this order, 
when a component is updated:

1 getDerivedStateFromProps()
2 shouldComponentUpdate()
3 render()
4 getSnapshotBeforeUpdate()
5 componentDidUpdate()
*/

// class Snippet extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { favoritecolor: "red" };
//   }

//   /*
//   This is the first method that is called 
//   when a component gets updated.
//   */
//   static getDerivedStateFromProps(props, state) {
//     console.log("Updated")
    
//     return { favoritecolor: "Gray" };
//   }

//   changeColor = () => {
//     // it makes component updated
//     this.setState({ favoritecolor: "blue" });
//   }

//   render() {
//     return (
//       <div>
//         <h1>My Favorite Color is {this.state.favoritecolor}</h1>
//         <button type="button" onClick={this.changeColor}>Change color</button>
//       </div>
//     );
//   }
// }

// class Snippet extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { favoritecolor: "red" };
//   }

//   /*
//   In the shouldComponentUpdate() method you can return a Boolean value 
//   that specifies whether React should continue with the rendering or not.
//   */
//   shouldComponentUpdate() {
//     return false;
//   }

//   changeColor = () => {
//     this.setState({ favoritecolor: "blue" });
//   }

//   render() {
//     return (
//       <>
//         <h1>My Favorite Color is {this.state.favoritecolor}</h1>
//         <button type="button" onClick={this.changeColor}>
//           Change color
//         </button>
//       </>
//     );
//   }
// }

// class Snippet extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { favoritecolor: "red" };
//   }

//   componentDidMount() {
//     setTimeout(() => {
//       this.setState({ favoritecolor: "yellow" })
//     }, 1000)
//   }

//   /*
//   In the getSnapshotBeforeUpdate() method you have access 
//   to the props and state before the update.
//   It means that even after the update, 
//   you can check what the values were before the update.

//   useRef
//   */
//   getSnapshotBeforeUpdate(prevProps, prevState) {
//     console.log('prev state:', prevState)
//   }

//   /*
//   If the getSnapshotBeforeUpdate() method is present, 
//   you should also include the componentDidUpdate() method, 
//   otherwise you will get an error.
//   */
//   componentDidUpdate() {
//     console.log('this state:', this.state.favoritecolor)
//   }

//   render() {
//     return (
//       <div>
//         <h1>My Favorite Color is {this.state.favoritecolor}</h1>
//       </div>
//     );
//   }
// }


/*
Unmounting
The next phase in the lifecycle is when a component is removed 
from the DOM, or Unmounting as React likes to call it.
*/

// class Snippet extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { show: true };
//   }

//   handleClick = () => {
//     this.setState({ show: false });
//   }

//   render() {
//     return (
//       <>
//         <h1>Unmouted</h1>
//         <button type="button" onClick={this.handleClick}>
//           Delete
//         </button>
//         {this.state.show && <Child />}
//       </>
//     );
//   }
// }

// class Child extends React.Component {
//   /* 
//   The componentWillUnmount method is called 
//   when the component is about to be removed from the DOM.
//   */
//   componentWillUnmount() {
//     console.log("The component named Header is about to be unmounted.")
//   }

//   render() {
//     return (
//       <p>Hello World!</p>
//     );
//   }
// }

// class Snippet extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = { count: 0 }
//   }
  
//   componentDidMount() {
//     console.log("first rendering")
//   }

//   componentDidUpdate() {
//     console.log("and updated at", new Date().toLocaleTimeString())
//   }

//   render() {
//     return (
//       <>
//         <p>{this.state.count}</p>
//         <button onClick={() => this.setState({ count: this.state.count + 1 })}>
//           Add
//         </button>
//       </>  
//     )
//   }
// }

// function fetchData() {
//   const promise = new Promise((res, rej) => {
//     setTimeout(() => {
//       res({ name: "Chris Evans" })
//     }, 2000)
//   })

//   return promise;
// }

// class Snippet extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = { 
//       profile: null,
//       error: null 
//     }
//   }
  
//   componentDidMount() {
//     fetchData()
//       .then(data => {
//         this.setState({ profile: data })
//       })
//       .catch(error => {
//         this.setState({ error })
//       })
//   }

//   render() {
//     if (this.error) {
//       return <p>failed to fetch</p>
//     }

//     if (!this.state.profile) {
//       return <p>fetching data...</p>
//     } 

//     return (
//       <>
//         <h1>Profile</h1>
//         <p>{this.state.profile.name}</p>
//       </>  
//     )
//   }
// }

function Snippet() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(100)
  }, [])

  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>button</button>
    </>  
  )
}
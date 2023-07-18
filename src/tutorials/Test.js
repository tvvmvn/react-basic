import { useEffect, useRef } from "react";

export default function Test() {
  return <Snippet />
}

function Snippet() {
  const el = useRef(null);

  window.addEventListener("scroll", (e) => {
    var scrollTop = window.document.documentElement.scrollTop;
    
    console.log(scrollTop);
    
    if (scrollTop > 100) {
      el.current.style.color = "#f00"
    } else {
      el.current.style.color = "#000"
    }
  })

  return (
    <div style={{ height: "2000px" }}>
      <h3>Test</h3>

      <p 
        style={{ position: "fixed", bottom: "0" }}
        ref={el}
      >
        Some text
      </p>
    </div>
  )
}

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
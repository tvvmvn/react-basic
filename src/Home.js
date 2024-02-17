import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>React</h1>

      <ol>
        <li>
          <Link to="tutorials">Tutorials</Link>
        </li>
        <li>
          <Link to="components">Examples</Link>
        </li>
      </ol>
   </>
  )
}
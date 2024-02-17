import { Link } from "react-router-dom";

export default function Tutorials() {
  return (
    <>
      <h3>Intro</h3>
      <ol>
        <li>
          <Link to="/tutorials/concept">Basic</Link>
        </li>
      </ol>

      <h3>JSX</h3>
      <ol>
        <li>
          <Link to="/tutorials/jsx/virtual-tree">Virtual tree</Link>
        </li>
        <li>
          <Link to="/tutorials/jsx/basic">Basic Usage</Link>
        </li>
        <li>
          <Link to="/tutorials/jsx/fragment">Fragment</Link>
        </li>
        <li>
          <Link to="/tutorials/jsx/print">Print</Link>
        </li>
        <li>
          <Link to="/tutorials/jsx/condition">Conditional rendering</Link>
        </li>
        <li>
          <Link to="/tutorials/jsx/loop">list rendering</Link>
        </li>
      </ol>

      <h3>Components</h3>
      <ol>
        <li>
          <Link to="/tutorials/components/composition">Composition</Link>
        </li>
        <li>
          <Link to="/tutorials/components/props">Props</Link>
        </li>
        <li>
          <Link to="/tutorials/components/children-props">Children props</Link>
        </li>
        <li>
          <Link to="/tutorials/components/use-context">useContext Hook</Link>
        </li>
      </ol>

      <h3>Event</h3>
      <ol>
        <li>
          <Link to="/tutorials/event/basic">Basic Usage</Link>
        </li>
      </ol>

      <h3>Update View</h3>
      <ol>
        <li>
          <Link to="/tutorials/update-view/usestate">useState Hook</Link>
        </li>
        <li>
          <Link to="/tutorials/update-view/composition">Update higher state</Link>
        </li>
        <li>
          <Link to="/tutorials/update-view/dynamic-style">Dynamic styling</Link>
        </li>
      </ol>

      <h3>React Router</h3>
      <ol>
        <li>
          <Link to="/tutorials/router/basic">Basic</Link>
        </li>
        <li>
          <Link to="/tutorials/router/auth">Router with Authorization</Link>
        </li>
      </ol>

      <h3>Fetch data</h3>
      <ol>
        <li>
          <Link to="/tutorials/fetch-data/use-effect">useEffect Hook</Link>
        </li>
        <li>
          <Link to="/tutorials/fetch-data/examples">Examples</Link>
        </li>
      </ol>

      <h3>Quiz</h3>
      <ol>
        <li>
          <Link to="/tutorials/quiz/jsx">JSX</Link>
        </li>
        <li>
          <Link to="/tutorials/quiz/component/composition">Component</Link>
        </li>
        <li>
          <Link to="/tutorials/quiz/update-view">Update View</Link>
        </li>
      </ol>
    </>
  )
}
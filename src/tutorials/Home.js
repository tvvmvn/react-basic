import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <h1>React Tutorials</h1>

      <h3>Basic</h3>
      <ol>
        <li>
          <Link to="/basic">Go</Link>
        </li>
      </ol>

      <h3>JSX</h3>
      <ol>
        <li>
          <Link to="/jsx/basic">Basic Usage</Link>
        </li>
        <li>
          <Link to="/jsx/fragment">Fragment</Link>
        </li>
        <li>
          <Link to="/jsx/print">Print</Link>
        </li>
        <li>
          <Link to="/jsx/condition">Conditional rendering</Link>
        </li>
        <li>
          <Link to="/jsx/loop">list rendering</Link>
        </li>
      </ol>

      <h3>Components</h3>
      <ol>
        <li>
          <Link to="/components/composition">Composition</Link>
        </li>
        <li>
          <Link to="/components/props">Props</Link>
        </li>
        <li>
          <Link to="/components/children-props">Component tree</Link>
        </li>
        <li>
          <Link to="/components/use-context">Data delievery on tree</Link>
        </li>
      </ol>

      <h3>Event</h3>
      <ol>
        <li>
          <Link to="/event/basic">Basic Usage</Link>
        </li>
      </ol>

      <h3>Update View</h3>
      <ol>
        <li>
          <Link to="/update-view/usestate">An example</Link>
        </li>
        <li>
          <Link to="/update-view/dynamic-style">Dynamic styling</Link>
        </li>
      </ol>

      <h3>Form</h3>
      <ol>
        <li>
          <Link to="/form/data">Handling form data</Link>
        </li>
        <li>
          <Link to="/form/tricks">How to use form tricks</Link>
        </li>
      </ol>

      <h3>React Router</h3>
      <ol>
        <li>
          <Link to="/router/basic">Basic</Link>
        </li>
        <li>
          <Link to="/router/auth">Router with Authorization</Link>
        </li>
      </ol>

      <h3>Fetch data</h3>
      <ol>
        <li>
          <Link to="/fetch-data/effect-hook">useEffect Hook</Link>
        </li>
        <li>
          <Link to="/fetch-data/examples">Examples</Link>
        </li>
      </ol>

      <h3>Quiz</h3>
      <ol>
        <li>
          <Link to="/quiz/jsx">JSX</Link>
        </li>
        <li>
          <Link to="/quiz/component/composition">Component</Link>
        </li>
        <li>
          <Link to="/quiz/update-view">Update View</Link>
        </li>
      </ol>
    </>
  )
}
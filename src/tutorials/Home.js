import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <h3 style={{ textAlign: 'center' }}>React Tutorials</h3>

      <h3>Intro</h3>
      <ul>
        <li>
          <Link to="/concept">What is React</Link>
        </li>
      </ul>

      <h3>JSX</h3>
      <ul>
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
      </ul>

      <h3>Components</h3>
      <ul>
        <li>
          <Link to="/components/composition">Composition</Link>
        </li>
        <li>
          <Link to="/components/props">Props</Link>
        </li>
        <li>
          <Link to="/components/children-props">Children props</Link>
        </li>
        <li>
          <Link to="/components/use-context">useContext Hook</Link>
        </li>
      </ul>

      <h3>Event</h3>
      <ul>
        <li>
          <Link to="/event/basic">Basic Usage</Link>
        </li>
      </ul>

      <h3>Update View</h3>
      <ul>
        <li>
          <Link to="/update-view/usestate">useState Hook</Link>
        </li>
        <li>
          <Link to="/update-view/composition">Update with Composition</Link>
        </li>
      </ul>

      <h3>React Router</h3>
      <ul>
        <li>
          <Link to="/router/basic">Basic</Link>
        </li>
        <li>
          <Link to="/router/auth">Router with Authorization</Link>
        </li>
      </ul>

      <h3>Fetch data</h3>
      <ul>
        <li>
          <Link to="/fetch-data/use-effect">useEffect Hook</Link>
        </li>
        <li>
          <Link to="/fetch-data/examples">Examples</Link>
        </li>
      </ul>

      <h3>Quiz</h3>
      <ul>
        <li>
          <Link to="/quiz/jsx">JSX</Link>
        </li>
        <li>
          <Link to="/quiz/component/composition">Component</Link>
        </li>
        <li>
          <Link to="/quiz/update-view">Update View</Link>
        </li>
      </ul>

      <h3>Test</h3>
      <ul>
        <li>
          <Link to="/test">Test</Link>
        </li>
      </ul>
    </>
  )
}
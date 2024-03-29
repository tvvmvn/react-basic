import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <h1>React Tutorials</h1>

      <h3>Basic</h3>
      <ol>
        <li>
          <Link to="/basic/usage">Basic Usage</Link>
        </li>
        <li>
          <Link to="/basic/element">Accessing real element</Link>
        </li>
        <li>
          <Link to="/basic/ref-hook">useRef Hook</Link>
        </li>
      </ol>

      <h3>JSX</h3>
      <ol>
        <li>
          <Link to="/jsx/basic">Basic usage</Link>
        </li>
        <li>
          <Link to="/jsx/fragment">Fragment</Link>
        </li>
        <li>
          <Link to="/jsx/print">Print variables</Link>
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
          <Link to="/components/use-context">Data delivery on tree</Link>
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
          <Link to="/form/tricks1">Form tricks 1 - dynamic button</Link>
        </li>
        <li>
          <Link to="/form/tricks2">Form tricks 2 - clearing input</Link>
        </li>
        <li>
          <Link to="/form/tricks3">Form tricks 3 - auto focus</Link>
        </li>
      </ol>

      <h3>React Router</h3>
      <ol>
        <li>
          <Link to="/router/basic">Basic</Link>
        </li>
        <li>
          <Link to="/router/auth">Router with authorization</Link>
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
          <Link to="/quiz/jsx1">JSX 1</Link>
        </li>
        <li>
          <Link to="/quiz/jsx2">JSX 2</Link>
        </li>
        <li>
          <Link to="/quiz/component/composition">Component</Link>
        </li>
        <li>
          <Link to="/quiz/update-view">Update View</Link>
        </li>
        <li>
          <Link to="/quiz/form1">Form</Link>
        </li>
      </ol>
    </>
  )
}
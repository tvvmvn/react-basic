import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './tutorials/Layout';
import Concept from './tutorials/Concept';
import Home from './Home';
import Tutorials from './tutorials/Tutorials';
import Components from './components/Components';
import { VirtualTree, JSXBasic, Print, Fragment, Condition, Loop } from './tutorials/JSX';
import { Composition, Props, ChildrenProps, UseContextHook } from './tutorials/Component';
import { Basic as EventBasic } from './tutorials/Event';
import { UseStateHook, UpdateWithComposition, DynamicStyling } from './tutorials/UpdateView';
import { BasicRouter, AuthRouter } from './tutorials/Router';
import { UseEffectHook, DataFetching } from './tutorials/FetchData';
import { JSX, ComponentComposition, UpdateView } from './tutorials/Quiz';
import Lab from "./Lab";
import NotFound from './tutorials/NotFound';

export default function App() {
  return (
    <HashRouter>
      <Routes>
        {/* Home */}
        <Route index element={<Home />} />

        {/* Tutorials */}
        <Route path="tutorials">
          <Route index element={<Tutorials />} />
          <Route path="concept" element={<Concept />} />
          <Route path="jsx"> 
            <Route path="virtual-tree" element={<VirtualTree />} />
            <Route path="basic" element={<JSXBasic />} />
            <Route path="fragment" element={<Fragment />} />
            <Route path="print" element={<Print />} />
            <Route path="condition" element={<Condition />} />
            <Route path="loop" element={<Loop />} />
          </Route>
          <Route path="components">
            <Route path="composition" element={<Composition />} />
            <Route path="props" element={<Props />} />
            <Route path="children-props" element={<ChildrenProps />} />
            <Route path="use-context" element={<UseContextHook />} />
          </Route>
          <Route path="event">
            <Route path="basic" element={<EventBasic />} />
          </Route>
          <Route path="update-view">
            <Route path="usestate" element={<UseStateHook />} />
            <Route path="composition" element={<UpdateWithComposition />} />
            <Route path="dynamic-style" element={<DynamicStyling />} />
          </Route>
          <Route path="router">
            <Route path="basic/*" element={<BasicRouter />} />
            <Route path="auth/*" element={<AuthRouter />} />
          </Route>
          <Route path="fetch-data">
            <Route path="use-effect" element={<UseEffectHook />} />
            <Route path="examples" element={<DataFetching />} />
          </Route>
          <Route path="quiz">
            <Route path="jsx" element={<JSX />} />
            <Route path="component/composition" element={<ComponentComposition />} />
            <Route path="update-view" element={<UpdateView />} />
          </Route>
        </Route>
        <Route path="lab" element={<Lab />} />
        <Route path="*" element={<NotFound />} />

        {/* Components */}
        <Route path="components">
          <Route index element={<Components />} />
        </Route>
      </Routes>
    </HashRouter>  
  )
}

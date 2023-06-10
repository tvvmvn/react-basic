import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './tutorials/Layout';
import Intro from './tutorials/Intro';
import Home from './tutorials/Home';
import { JSXBasic, Print, Fragment, Condition, Loop } from './tutorials/JSX';
import { Composition, Props, ChildrenProps, UseContextHook } from './tutorials/Component';
import { Basic as EventBasic } from './tutorials/Event';
import { UseStateHook } from './tutorials/UpdateView';
import { BasicRouter, AuthRouter } from './tutorials/Router';
import { UseEffectHook, DataFetching } from './tutorials/FetchData';
import { JSX, ComponentComposition, UpdateView } from './tutorials/Quiz';
import NotFound from './tutorials/NotFound';

export default function App() {

  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="intro" element={<Intro />} />
          <Route path="jsx"> 
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
          <Route path="usestate" element={<UseStateHook />} />
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
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>  
  )
}





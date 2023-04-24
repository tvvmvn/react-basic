import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Outlet, useLocation } from 'react-router-dom';
import Layout from './tutorials/Layout';
import Intro from './tutorials/Intro';
import Home from './tutorials/Home';
import { JSXBasic, Print, Fragment, Condition, Loop } from './tutorials/JSX';
import { Basic as EventBasic } from './tutorials/Event';
import { UseEffectHook, DataFetching } from './tutorials/FetchData';
import { Composition, Props, ChildrenProps, UseContextHook } from './tutorials/Component';
import { ES6 } from './tutorials/ES6';
import { JSX, ComponentComposition } from './tutorials/Quiz';
import NotFound from './tutorials/NotFound';
import TodoApp from './examples/TodoApp';

export default function App() {

  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="intro" element={<Intro />} />
          <Route path="es6">
            <Route index element={<ES6 />} />
          </Route>
          <Route path="jsx"> 
            <Route path="basic" element={<JSXBasic />} />
            <Route path="fragment" element={<Fragment />} />
            <Route path="print" element={<Print />} />
            <Route path="condition" element={<Condition />} />
            <Route path="loop" element={<Loop />} />
          </Route>
          <Route path="event">
            <Route path="basic" element={<EventBasic />} />
          </Route>
          <Route path="components">
            <Route path="composition" element={<Composition />} />
            <Route path="props" element={<Props />} />
            <Route path="children-props" element={<ChildrenProps />} />
            <Route path="use-context" element={<UseContextHook />} />
          </Route>
          <Route path="fetch-data">
            <Route path="use-effect" element={<UseEffectHook />} />
            <Route path="examples" element={<DataFetching />} />
          </Route>
          <Route path="quiz">
            <Route path="jsx" element={<JSX />} />
            <Route path="component/composition" element={<ComponentComposition />} />
          </Route>
          <Route path="examples/todo" element={<TodoApp />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>  
  )
}





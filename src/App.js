import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./tutorials/Layout";
import Home from "./tutorials/Home";
import Lab from "./Lab";
import NotFound from "./tutorials/NotFound";
import { Basic, Element, RefHook } from "./tutorials/Basic";
import { JSXBasic, Print, Fragment, Condition, Loop } from "./tutorials/JSX";
import { Composition, Props, ChildrenProps, UseContextHook } from "./tutorials/Component";
import { Basic as EventBasic } from "./tutorials/Event";
import { UseStateHook, DynamicStyling } from "./tutorials/UpdateView";
import { HandlingData, Tricks } from "./tutorials/Form";
import { BasicRouter, AuthRouter } from "./tutorials/Router";
import { EffectHook, DataFetching } from "./tutorials/FetchData";
import { JSX1, JSX2, Props as PropsQ, UpdateView, Form1 } from "./tutorials/Quiz";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="basic">
            <Route path="usage" element={<Basic />} />
            <Route path="element" element={<Element />} />
            <Route path="ref-hook" element={<RefHook />} />
          </Route>
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
          <Route path="update-view">
            <Route path="usestate" element={<UseStateHook />} />
            <Route path="dynamic-style" element={<DynamicStyling />} />
          </Route>
          <Route path="form">
            <Route path="data" element={<HandlingData /> } />
            <Route path="tricks" element={<Tricks /> } />
          </Route>
          <Route path="router">
            <Route path="basic/*" element={<BasicRouter />} />
            <Route path="auth/*" element={<AuthRouter />} />
          </Route>
          <Route path="fetch-data">
            <Route path="effect-hook" element={<EffectHook />} />
            <Route path="examples" element={<DataFetching />} />
          </Route>
          <Route path="quiz">
            <Route path="jsx1" element={<JSX1 />} />
            <Route path="jsx2" element={<JSX2 />} />
            <Route path="component/composition" element={<PropsQ />} />
            <Route path="update-view" element={<UpdateView />} />
            <Route path="form1" element={<Form1 />} />
          </Route>
        </Route>
        <Route path="lab" element={<Lab />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  )
}

import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./tutorials/Layout";
import Home from "./tutorials/Home";
import Basic from "./tutorials/Basic";
import { JSXBasic, Print, Fragment, Condition, Loop } from "./tutorials/JSX";
import { EffectHook, RefHook, StateHook } from "./tutorials/Hook";
import { Composition, Props, ChildrenProps, UseContextHook } from "./tutorials/Component";
import { Basic as EventBasic } from "./tutorials/Event";
import { UseStateHook, UpdateWithComposition, DynamicStyling } from "./tutorials/UpdateView";
import { BasicRouter, AuthRouter } from "./tutorials/Router";
import { DataFetching } from "./tutorials/FetchData";
import { JSX, ComponentComposition, UpdateView } from "./tutorials/Quiz";
import Lab from "./Lab";
import NotFound from "./tutorials/NotFound";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="basic" element={<Basic />} />
          <Route path="jsx">
            <Route path="basic" element={<JSXBasic />} />
            <Route path="fragment" element={<Fragment />} />
            <Route path="print" element={<Print />} />
            <Route path="condition" element={<Condition />} />
            <Route path="loop" element={<Loop />} />
          </Route>
          <Route path="hook">
            <Route path="effect" element={<EffectHook />} />
            <Route path="ref" element={<RefHook />} />
            <Route path="state" element={<StateHook />} />
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
      </Routes>
    </HashRouter>
  )
}

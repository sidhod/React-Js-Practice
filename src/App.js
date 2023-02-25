import logo from './logo.svg';
import './App.css';
import Greet from './components/classandfunction/function';
import Result from './components/classandfunction/functionExample';
import Welcome from './components/classandfunction/classComponet';
import PrintName from './components/classandfunction/classComponetExample';
import Hello from './components/jsx/hello';
import Display from './components/jsx/jsxExample';
import ShowNames from './components/props/props';
import Names from './components/props/propsClass';
import FullName from './components/props/propsExample';
import FullName1 from './components/props/propsClassExample';
import Message from './components/State/state';
import GiveImage from './components/State/stateExample';
import Counter from './components/setState/Counter';
import Square from './components/setState/setStateExample';
import Destruture from './components/destructuring/destruturing';
import DestrutureExample from './components/destructuring/exampleOfDes';
import FunctionClick from './components/eventHandling/functionEventhandling';
import FunctionClickExample from './components/eventHandling/functionEventHandlingExample';
import ClassEventHandler from './components/eventHandling/classEventHandling';
import EventBinding from './components/eventBinding/eventBinding';
import SquareOfNo from './components/eventBinding/eventBindingExample';
import Print from './components/text';
import HookCounter from './components/hooks-useSate/hooksfunction';
import SquareNumber from './components/hooks-useSate/hookFunctionExample';
import HookCounterImprove from './components/hooks-useSate/hooksFunction2';
import Array from './components/hooks-useSate/hookFunctionExample2';
import HookCounterThree from './components/hooks-useSate/hookObject';
import HookCounterFour from './components/hooks-useSate/hookArray';
import HookObjectExample from './components/hooks-useSate/hookObjectExample';
import HookArrayExample from './components/hooks-useSate/hookArrayExample';
import CounterClass from './components/useEffect/usingclass';
import CounterTitle from './components/useEffect/useState';
import CounterClassCondition from './components/useEffect/useEffectCondition/useclass';
import CounterTitleCondition from './components/useEffect/useEffectCondition/useStateCOndition';
import CounterClassConditionExample1 from './components/useEffect/useEffectCondition/useclassExample';
import CounterTitleConditionExample from './components/useEffect/useEffectCondition/useStateConditionexample';
import HookMouse from './components/useEffect/cleanup/hookMouse';
import MouseContainer from './components/useEffect/cleanup/mousetoggle';
import CleanupExample from './components/useEffect/cleanup/Example';
import IntervalClassCounter from './components/useEffect/intervalCounter.js/intervalCounter';
import IntervalHookCounter from './components/useEffect/intervalCounter.js/intervalCountHooks';
import DataFetching from './components/higherOrderComponent/data faching/dataFeaching';
import ParentComponents from './components/props/parentComponents';
import ConditionalRenderingExample from './components/conditionalrendering/conditionalRenderingExampl';
import ListRendering from './components/ListRendering/listRendering';
import NameList from './components/ListRendering/listRenderingExample';
import LifecycleA from './components/lifecycle/lifecycle1';
import ClassCounterOne from './components/lifecycle/lifecycleExample';
import HoverCounter from './components/higherOrderComponent/hoverCounter';
import ClickCounter from './components/higherOrderComponent/clickCounter';
import ExampleA from './components/higherOrderComponent/ExampleA';
import ExampleB from './components/higherOrderComponent/ExampleB';
import { Counter1 } from './components/Redux/store1';
import { Counter2 } from './components/Redux/counter';
import { Provider } from 'react-redux';

import ResponsiveGrid from './components/grid/grid';
import FullWidthGrid from './components/grid/grid';
import PostList from './components/higherOrderComponent/data faching/data';
import ClickCounterTwo from './components/renderingProps/click';
import HoverCounterTwo from './components/renderingProps/hover';
import HoverCounterTwo2 from './components/renderingProps/hover';
import PortalDemo from './components/portal/portal';
import PortalExample from './components/portal/portalExample';
import Hero from './components/errorBoundary/hero';
import ErrorBoundary from './components/errorBoundary/errorboundary';
import ParentC from './ParentC';
import Interfaces from './components/Redux1/ui';
// import store from './components/Redux1/store';
import ParentComponent from './components/context/ParentComponent';
import MemoExample from './components/memo/memo';
import { Button } from '@mui/material';
import ButtonComponents from './components/Redux3/ui3s';
import store from './components/Redux3/store'
import ParentCom from './components/context/Example/ParentCom';
import Parent from './components/context/Practice/example';
function App() {
  return (
    <div className="App">

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <Greet />
      <Welcome />
      <PrintName />
      <Result /> */}
      {/* <Hello />
      <Display />
      <ShowNames name="Rohit" heroName="batman"><p>My Name is Sidhodhan</p></ShowNames>
      <ShowNames name="Sid" heroName="SuperMan"><p>My Name is Sidhodhan</p></ShowNames>
      <ShowNames name="Sai" heroName="aquaman"><p>My Name is Sidhodhan</p></ShowNames> */}
      {/* <Names name="Sidhodhan" /> */}
      {/* <FullName FirstName="Sai" LastName="Kamble" />
      <FullName FirstName="Rohit" LastName="Kamble" />
      <FullName FirstName="Sakshi" LastName="Kamble" /> */}
      {/* <FullName1 FirstName="Sai" LastName="Kamble" />
      <FullName1 FirstName="Rohit" LastName="Kamble" />
      <FullName1 FirstName="Sakshi" LastName="Kamble" /> */}
      {/* <Message />
      <GiveImage />
      <Counter /> */}
      {/* <Square />
      <Destruture FirstName="Sai" LastName="Kamble" />
      <DestrutureExample FirstName="Sai" LastName="Kamble" /> */}
      {/* <FunctionClick /> */}
      {/* <FunctionClickExample />
      <ClassEventHandler /> */}
      {/* <EventBinding /> */}
      {/* cd */}
      {/* <Print /> */}
      {/* <HookCounter /> */}
      {/* <SquareNumber /> */}
      {/* <HookCounterImprove /> */}
      {/* <Array /> */}
      {/* <HookCounterThree /> */}
      {/* <HookCounterFour /> */}
      {/* <HookObjectExample /> */}
      {/* <HookArrayExample /> */}
      {/* <CounterClass /> */}
      {/* <CounterTitle /> */}
      {/* <CounterClassCondition /> */}
      {/* <CounterTitleCondition /> */}
      {/* <CounterClassConditionExample1 /> */}
      {/* <CounterTitleConditionExample />
      <HookMouse /> */}
      {/* <MouseContainer />
      <CleanupExample /> */}
      {/* <IntervalClassCounter />
      <IntervalHookCounter /> */}
      {/* <DataFetching /> */}
      {/* <ParentComponents /> */}
      {/* <ConditionalRenderingExample /> */}
      {/* <ListRendering /> */}
      {/* <NameList /> */}
      {/* <LifecycleA />
      <ClassCounterOne /> */}
      {/* <Provider store={store}>
        {/* <Counter2 /> */}
      {/* <Interfaces />
      </Provider> */}
      {/* <FullWidthGrid /> */}
      {/* <ClickCounter />
      <HoverCounter /> */}
      {/* <ExampleA />
      <ExampleB /> */}
      {/* <PostList /> */}
      {/* <Counter
        render={(count, incrementCount) => (
          <ClickCounterTwo count={count} incrementCount={incrementCount} />
        )}
      />
      <Counter
        render={(count, incrementCount) => (
          <HoverCounterTwo2 count={count} incrementCount={incrementCount} />
        )}
      /> */}
      {/* <PortalDemo />
      <PortalExample /> */}

      {/* <ErrorBoundary>
        <Hero heroName="Batman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Superman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Joker" />
      </ErrorBoundary> */}
      {/* <ParentC /> */}
      {/* <ParentComponent /> */}
      {/* <ParentComponents /> */}
      {/* <Provider store={store}>
        <ButtonComponents />
      </Provider> */}
      {/* <ParentCom /> */}
      <Parent />

    </div >
  );
}

export default App;

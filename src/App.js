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
      <FunctionClickExample />
      <ClassEventHandler />

    </div>
  );
}

export default App;

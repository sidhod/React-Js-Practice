import logo from './logo.svg';
import './App.css';
import Greet from './components/function';
import Result from './components/functionExample';
import Welcome from './components/classComponet';
import PrintName from './components/classComponetExample';
import Hello from './jsx/hello';
import Display from './jsx/jsxExample';
import ShowNames from './props/props';
import Names from './props/propsClass';
import FullName from './props/propsExample';
import FullName1 from './props/propsClassExample';

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
      <FullName1 FirstName="Sai" LastName="Kamble" />
      <FullName1 FirstName="Rohit" LastName="Kamble" />
      <FullName1 FirstName="Sakshi" LastName="Kamble" />
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import QuestionF from './question-f/index';
import QuestionG from './question-g/index';

function App() {
  return (
    <div className="App">
      <h1>===== Question A-E =====</h1>
      <h3>located in "./src/question-..."</h3>
      <h1>===== Question F =====</h1>
      <QuestionF />
      <br></br>
      <h1>===== Question G =====</h1>
      <QuestionG />
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
    </div>
  );
}

export default App;

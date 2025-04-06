import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import FetchDemo from "./funcs/FetchDemo";

function App() {

  const [fetchedText, setFetchedText] = useState("");

  const onTestFetch = () => {
    const fetchDemo = new FetchDemo();
    fetchDemo.FetchHelloWorld(data => {
      let summaryText = fetchedText == ""
        ? data
        : `${fetchedText}, ${data}`;
      setFetchedText(summaryText);
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div >
          <button onClick={onTestFetch}>test fetch</button>
        </div>
        <div>
          {fetchedText}
        </div>
      </header>
    </div>
  );
}

export default App;

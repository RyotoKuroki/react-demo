import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import FetchDemo from "./funcs/FetchDemo";
import { useAuth } from "react-oidc-context";
import env from "./env/env";

function App() {

  const [fetchedText, setFetchedText] = useState("");

  const auth = useAuth();

  const signOutRedirect = () => {
    const clientId = env.COGNITO_ENV__CLIENT_ID;
    const logoutUri = env.COGNITO_ENV__LOGOUT_URI;
    const cognitoDomain = env.COGNITO_ENV__COGNITO_DOMAIN;
    window.location.href = env.getCognitoUsingLocation(clientId, logoutUri, cognitoDomain);
  };

  if (auth.isLoading) {
    return <div>Loading...</div>;
  }

  if (auth.error) {
    return <div>Encountering error... {auth.error.message}</div>;
  }



  if (!auth.isAuthenticated) {
    // 未ログイン時
    return (
      <div>
        <button onClick={() => auth.signinRedirect()}>Sign in</button>
        <button onClick={() => signOutRedirect()}>Sign out</button>
      </div>
    );
  }

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

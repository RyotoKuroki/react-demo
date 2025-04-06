import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import env from "./env/env";

import { AuthProvider } from "react-oidc-context";
const cognitoAuthConfig = {
  authority: env.COGNITO_ENV__CONFIG_AUTHORITY,
  client_id: env.COGNITO_ENV__CONFIG_CLIENT_ID,
  redirect_uri: env.COGNITO_ENV__CONFIG_REDIRECT_URI,
  response_type: env.COGNITO_ENV__CONFIG_RESPONSE_TYPE,
  scope: env.COGNITO_ENV__CONFIG_SCOPE,
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <AuthProvider {...cognitoAuthConfig}>
      <App />
    </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

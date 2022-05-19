import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { StyledEngineProvider } from '@mui/material/styles';
import LoginBox from "./components/LoginBox";
import { Container } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import { isEmpty } from '@firebase/util';
import App from "./App";

ReactDOM.createRoot(document.querySelector("#root")).render(
  <StyledEngineProvider injectFirst>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </StyledEngineProvider>
);
import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { StyledEngineProvider } from '@mui/material/styles';
import LoginBox from "./components/LoginBox";
import { Container } from '@mui/material';

ReactDOM.createRoot(document.querySelector("#root")).render(
  <StyledEngineProvider injectFirst>
    <LoginBox/>
  </StyledEngineProvider>
);
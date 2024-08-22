import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './app/app';
import { ChatProvider } from './hooks/useChat';
import { MsalProvider } from '@azure/msal-react';
import { PublicClientApplication } from '@azure/msal-browser';
import { msalConfig } from './auth/msalConfig';

const pca = new PublicClientApplication(msalConfig);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <MsalProvider instance={pca}>
      <BrowserRouter>
        <ChatProvider>
          <App />
        </ChatProvider>
        ,
      </BrowserRouter>
    </MsalProvider>
  </StrictMode>
);

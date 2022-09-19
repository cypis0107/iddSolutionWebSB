import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { PdfProvider } from './contexts/pdf.context';
import { ViewportProvider } from './contexts/viewport.context'
import { MenuProvider } from './contexts/menu.context';
import './i18n';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <PdfProvider>
        <MenuProvider>
          <ViewportProvider>
            <App />
          </ViewportProvider>
        </MenuProvider>
      </PdfProvider>
    </BrowserRouter>
  </React.StrictMode>
);



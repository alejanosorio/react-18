
import { createRoot } from 'react-dom/client'; 
import {App }from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import { StrictMode } from 'react';
const rootElement=document.getElementById('root');
const root = createRoot(rootElement); 
root.render(
    <StrictMode>
       <BrowserRouter>
       <App /> 
       </BrowserRouter> 
    </StrictMode>

);
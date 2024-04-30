import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import { StyledEngineProvider } from '@mui/material/styles';
import './index.css';
import App from './App';
import Playlist from './components/songsPlaylist';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/songs",
    element: <Playlist/>
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <RouterProvider router={router}/>
    </StyledEngineProvider>
  </React.StrictMode>
);


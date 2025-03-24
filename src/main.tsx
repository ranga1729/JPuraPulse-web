import React from 'react';
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router';
import {router} from './routes'

import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

import { createBrowserRouter, RouteObject } from 'react-router';
import App from "./App";
import Login from './Pages/Login'
import Register from "./Pages/Register";

const routes: RouteObject[] = [
  { path: "/", element: <App /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
];

export const router = createBrowserRouter(routes);

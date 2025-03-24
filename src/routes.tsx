import { createBrowserRouter, RouteObject } from 'react-router';
import Home from './Pages/Home';
import Login from './Pages/Login'
import Register from "./Pages/Register";

const routes: RouteObject[] = [
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
];

export const router = createBrowserRouter(routes);
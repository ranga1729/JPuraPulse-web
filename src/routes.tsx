import { createBrowserRouter, RouteObject } from 'react-router';
import Home from './Pages/Home';
import Login from './Pages/Login'
import Register from "./Pages/Register";
import AdminDashboard from './Pages/AdminDashboard';

const routes: RouteObject[] = [
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "admin", element: <AdminDashboard />}
];

export const router = createBrowserRouter(routes);
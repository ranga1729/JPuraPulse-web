import { createBrowserRouter, RouteObject } from 'react-router';
import Home from './Pages/Home';
import Login from './Pages/Login'
import Register from "./Pages/Register";
import AdminDashboard from './Pages/AdminDashboard';
import PrivateRoute from './Utils/PrivateRoute';
import NotFound from './Pages/NotFound';

const routes: RouteObject[] = [
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },

  {
    path : '/home',
    element: <PrivateRoute />,
    children: [
      {path: "", element: <Home />}
    ]
  },
  {
    path : '/admin',
    element: <PrivateRoute />,
    children: [
      {path: "", element: <AdminDashboard />}
    ]
  },
  { path: "*", element: <NotFound /> }, // 👈 Catch-all route for undefined pages
];

export const router = createBrowserRouter(routes);
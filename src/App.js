import ReactDOM from 'react-dom/client'
import { useContext } from "react";
import { createBrowserRouter, RouterProvider, Route, Navigate } from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage";
import Login from "./Pages/login/Login";
import Register from "./Pages/register/Register";
import EditProfile from "./Pages/editprofile/EditProfile";
import Profile from "./Pages/profile/Profile";
import './style/dark.scss'
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from './context/AuthContext';
function App() {
  const {darkMode} =useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);

  const AuthRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/",
      element: (
        <AuthRoute>
          <Home />
        </AuthRoute>
      ),
    },
    {
      path: "/profile/:username",
      element: (
        <AuthRoute>
          <Profile />
        </AuthRoute>
      ),
    },
    {
      path: "/profile/:username/edit",
      element: (
        <AuthRoute>
          <EditProfile />
        </AuthRoute>
      ),
    },
  ]);
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

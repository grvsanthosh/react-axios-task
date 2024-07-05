import AddUser from "../Components/AddUser";
import Dashboard from "../Components/Dashboard";
import EditUser from "../Components/EditUser";
import TopBar from "../Components/TopBar";
import Home from "../Components/Home";
import { Navigate } from "react-router-dom";

const AppRouter = [
  {
    path: "/home",
    element: (
      <>
        <TopBar />
        <Home />
      </>
    ),
  },
  {
    path: "/adduser",
    element: (
      <>
        <TopBar />
        <AddUser />
      </>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <>
        <TopBar />
        <Dashboard />
      </>
    ),
  },
  {
    path: "/edituser/:id",
    element: (
      <>
        <TopBar />
        <EditUser />
      </>
    ),
  },

  {
    path: "/*",
    element: <Navigate to="/home" />,
  },
];

export default AppRouter;

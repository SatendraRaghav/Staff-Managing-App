import React from "react";
import { useSelector } from "react-redux";
import AdminProfile from "./Components/Home/AdminHome/AdminProfile";
import Profile from "./Components/Home/EmployeHome/EmployeProfile";
import Login from "./Components/Login/Login";
import CreateProfile from "./Components/Login/CreateProfiles/CreateProfile";

const App = () => {
  const state = useSelector((state) => {
    return state.LoginReducer;
  });

  return (
    <div>
      {state.loginBoolean ? (
        state.admin ? (
          <AdminProfile />
        ) : state.isProfileAvailable ? (
          <Profile />
        ) : (
          <CreateProfile />
        )
      ) : (
        <Login />
      )}
    </div>
  );
};

export default App;

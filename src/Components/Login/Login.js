import { Button, Card, Input, Radio, Typography, Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser,getUser } from "./Api/UserApi.js";
import { getProfile } from "./Api/ProfileApi.js";
import { setProfileEntries } from "../Redux/ProfileReducer.js";
import {
  setLoginObj,
  setLoginBoolean,
  setLoginEntries,
  setIsProfileAvailable,
  setLoginError,
  setAdmin,
} from "../Redux/LoginReducer";
import InputField from "./CreateProfiles/InputField.js";
import { inputCardStyle } from "./CreateProfiles/InputField.js";
import axios from "axios";
import LoginValidation from "./Validation/LoginValidation.js";

const Login = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return state.LoginReducer;
  });

  useEffect(() => {
    getUserDetails();
  }, []);

  const getUserDetails = async () => {
    const response = await getUser();
    dispatch(setLoginEntries(response.data));
  };

  const loginHandler = async (e) => {
    e.preventDefault();
    const userArr = state.loginEntries;
    if (LoginValidation(state,dispatch)) {
      const profileAvailable = userArr.some((elem) => {
        return (
          elem.email === state.loginObj.email &&
          elem.password === state.loginObj.password
        );

      });
      if (
        "Admin@gmail.com" == state.loginObj.email &&
        "Admin" === state.loginObj.password
      ) {
        dispatch(setAdmin(true));
      }

      if (profileAvailable) {
        await getProfile().then((response) => {
          return dispatch(setProfileEntries(response.data));
        });
        dispatch(setIsProfileAvailable(true));
      } else {
        await addUser(state.loginObj);
      }
      dispatch(setLoginBoolean(true));
    }
  };
  const changeHandler = (e) => {
    const { name, value } = e.target;
    dispatch(setLoginObj({ ...state.loginObj, [name]: value }));
  };

  return (
    <div>
      <Card sx={inputCardStyle}>
        <Typography component={"div"} variant="base">
          Empoyee and Admin login/signup
        </Typography>

        <InputField
          name={"email"}
          value={state.loginObj.email}
          onChange={(e) => changeHandler(e)}
          width={"65%"}
          type="email"
          label={"Email"}
          error={state.loginError.email}
        />
        <InputField
          name="password"
          value={state.loginObj.password}
          onChange={(e) => changeHandler(e)}
          width={"65%"}
          type="password"
          label={"Password"}
          error={state.loginError.password}
        />

        <Box sx={{ display: "block", textAlign: "center" }}>
          <Button onClick={loginHandler} variant="contained" color="success">
            Login/Signup
          </Button>
        </Box>
      </Card>
    </div>
  );
};

export default Login;

import { Card, Divider } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CardOne from "./CardOne";
import CardTwo from "./CardTwo";
import Nav from "./Nav";
import ProfileValidation from "../Validation/ProfileValidation";
import { addProfile, getProfile } from "../Api/ProfileApi";

import {
  setProfileObj,
  setProfileError,
  setProfileEntries,
  
}  from "../../Redux/ProfileReducer";
import { setIsProfileAvailable } from "../../Redux/LoginReducer";

const Profile = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return state.ProfileReducer;
  });
  const loginState = useSelector((state) => {
    return state.LoginReducer;
  });
  const getProfileDetails = async () => {
    const response = await getProfile()
    .then((response)=>{
     return dispatch(setProfileEntries(response.data))
    })
    dispatch(setIsProfileAvailable(true));
  };

  const saveHandler = async (e) => {
    if (ProfileValidation(state,dispatch)) {
      e.preventDefault();
      await addProfile({...state.profileObj,...loginState.loginObj});
      getProfileDetails();
     
    }
  };
  const changeHandler = (e) => {
    const { name, value } = e.target;
    dispatch(setProfileObj({ ...state.profileObj, [name]: value }));
  };


  return (
    <div>
      <Card>
        <nav>
          <Nav idName={"New Employee"} employee={state.profileObj} />
        </nav>

        <Stack
          className="first login"
          direction={{ xs: "column", sm: "row" }}
          divider={<Divider orientation="vertical" flexItem />}
          spacing={0}
        >
          <Box width={{ xs: "100%", sm: "50%" }}>
            <CardOne
              error={state.profileError}
              initial={state.profileObj}
              changeHandler={changeHandler}
            />
          </Box>
          <Box width={{ xs: "100%", sm: "50%" }}>
            <CardTwo
              error={state.profileError}
              saveHandler={saveHandler}
              initial={state.profileObj}
              changeHandler={changeHandler}
            />
          </Box>
        </Stack>
      </Card>
    </div>
  );
};

export default Profile;

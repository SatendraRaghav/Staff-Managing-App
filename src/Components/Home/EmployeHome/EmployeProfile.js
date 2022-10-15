import {
  Typography,
  Box,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import axios from "axios";
import { Stack } from "@mui/system";
import { useSelector, useDispatch } from "react-redux";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import React, { useEffect, useState } from "react";
import Nav from "../../Login/CreateProfiles/Nav";
import {
  setIsProfileAvailable,
  setLoginBoolean,
  setLoginObj,
} from "../../Redux/LoginReducer";
import PersonIcon from "@mui/icons-material/AccountCircleRounded";
import {
  setEmploye,
  setProfileEntries,
  setProfileObj,
} from "../../Redux/ProfileReducer";

const Profile = () => {
  const state = useSelector((state) => {
    return state.ProfileReducer;
  });
  const loginState = useSelector((state) => {
    return state.LoginReducer;
  });
  const dispatch = useDispatch();
  const employeObj = state.profileEntries.filter((elem) => {
    return (
      elem.email == loginState.loginObj.email &&
      elem.password == loginState.loginObj.password
    );
  });
  useEffect(() => {
    dispatch(setEmploye(...employeObj));
  }, [[state.profileEntries, state.isProfileAvailable]]);

  const deleteHandler = async (id) => {
    await axios.delete(`http://127.0.0.1:3002/profile/${id}`);
    const newProfileEntries = state.profileEntries.filter((elem) => {
      return elem.id != id;
    });
    dispatch(setProfileEntries(newProfileEntries));
    dispatch(setLoginBoolean(false));
    dispatch(setIsProfileAvailable(false));
    dispatch(
      setLoginObj({
        email: "",
        password: "",
      })
    );
    dispatch(setProfileObj(state.emptyProfile));
  };
  const editHandler = async(id) => {
    
    await axios.delete(`http://127.0.0.1:3002/profile/${id}`);
    const newProfileEntries = state.profileEntries.filter((elem) => {
      return elem.id != id;
    });
    dispatch(setProfileEntries(newProfileEntries));
    dispatch(setIsProfileAvailable(false));

  };

  return (
    <div>
      <Nav idName={"Employe Card"} employee={state.employe}></Nav>

      <Box sx={{ textAlign: "center", my: "120px" }}>
            <PersonIcon
            color="success"
              sx={{
                height: 179,
                width: 179,
              }}
            />
        <Box>
          <Typography variant="h5">
            {" "}
            {state.employe.fName} {state.employe.lName}
          </Typography>
          <Typography variant="base">{state.employe.designation}</Typography>
        </Box>

        <Stack
          direction={"row"}
          spacing={4}
          width={{ sx: "100%", sm: "60%" }}
          sx={{ my: "50px", marginLeft: "auto", marginRight: "auto" }}
        >
          <Box sx={{ width: "33.33%" }}>
            <Typography variant="base">Gender</Typography>
            <br />
            <Typography variant="base">{state.employe.gender}</Typography>
          </Box>
          <Box sx={{ width: "33.33%" }}>
            <Typography variant="base">DOB</Typography>
            <br />
            <Typography variant="base">{state.employe.dob}</Typography>
          </Box>
          <Box sx={{ width: "33.33%" }}>
            <Typography variant="base">Nationality</Typography>
            <br />
            <Typography variant="base">{state.employe.country}</Typography>
          </Box>
        </Stack>
        <ToggleButtonGroup
          orientation="vertical"
          sx={{ position: "absolute", top: "85px", right: "15px" }}
        >
          <ToggleButton onClick={()=>editHandler(state.employe.id)} value="edit" aria-label="edit">
            <EditIcon color="secondary" />
          </ToggleButton>
          <ToggleButton
            onClick={() => deleteHandler(state.employe.id)}
            value="delete"
            aria-label="delete"
          >
            <DeleteIcon color="error" />
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>
    </div>
  );
};

export default Profile;

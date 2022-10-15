import React from "react";
import { Box, Stack, Avatar, Typography } from "@mui/material";
import InputField, { createProfileCardStyle } from "./InputField";
import { useSelector } from "react-redux";
import PersonIcon from "@mui/icons-material/AccountCircleRounded";

const CardOne = ({ changeHandler, initial,error }) => {
   const state = useSelector((state)=>{
    return state.ProfileReducer;
   })

  return (
    <div>
      <Box sx={{ textAlign: "center", mt: "40px" }}>
        <Typography sx={{ fontSize: "2vw" }}>
         Welcome, please create your profile.
        </Typography>
      </Box>
      <Box sx={{ textAlign: "center", mt: "4px" }}>
        
           <PersonIcon
              sx={{
                height: 179,
                width: 179,
              }}
            />
       

        <Stack
          spacing={1}
          component="div"
          direction="row"
          sx={createProfileCardStyle}
        >
          <InputField
            size="small"
            label="First Name"
            width={"100%"}
            name="fName"
            error={error.fName}
            value={initial.fName}
            onChange={(e) => changeHandler(e)}
           
          />
          <InputField
            size="small"
            label="Last Name"
            name="lName"
            error={error.lName}
            value={initial.lName}
            onChange={(e) => changeHandler(e)}
          />
        </Stack>

        <Box sx={{ textAlign: "center" }}>
          <InputField
            label="Designation"
            size="small"
            name="designation"
            error={error.designation}
            value={initial.designation}
            onChange={(e) => changeHandler(e)}
            width="95%"
          />
        </Box>
      </Box>
    </div>
  );
};

export default CardOne;

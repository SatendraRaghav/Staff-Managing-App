import React from "react";
import {
  Stack,
  Box,
  Typography,
  Button,
  TextField,
} from "@mui/material";
import { setLoginObj,setLoginBoolean} from "../../Redux/LoginReducer";
import InputField, {
  createProfileCardStyle,
  SelectField,
} from "./InputField";

import { useDispatch } from "react-redux";

const CardTwo = ({ changeHandler, initial, saveHandler, error }) => {
  const dispatch = useDispatch();
  console.log(initial.image);
  const cancelHandler = ()=>{
    dispatch(setLoginObj({
      email: "",
      password: "",
    }))
     dispatch(setLoginBoolean(false))
   }
  return (
    <div>
      <Box>
        <Stack
          spacing={1}
          component="div"
          direction="row"
          sx={createProfileCardStyle}
        >
          <TextField
            
            type={"date"}
            error={error.dob}
            name="dob"
            InputLabelProps={{ shrink: true, required: true }}
            label="Date of Birth"
            value={initial.dob}
            onChange={(e) => changeHandler(e)}
            size="small"
            sx={{width:"50%"}}
          />
         <Box sx={{width:"50%"}}>
          <SelectField
           error={error}
            initial={initial}
            changeHandler={changeHandler}
          />
          </Box>
        </Stack>
        <Box  sx={{textAlign:"center"}}>
          <InputField
            type={"number"}
            error={error.phoneNumber}
            name="phoneNumber"
            value={initial.phoneNumber}
            onChange={(e) => changeHandler(e)}
            label="Phone Number"
            size="small"
            width="95%"
          />
        </Box>
        <Box sx={{ textAlign: "center"}}>
          <InputField
            label="Address 1"
            error={error.address}
            name="address"
            value={initial.address}
            onChange={(e) => changeHandler(e)}
            size="small"
            width="95%"
          />
        </Box>
        <Stack
          spacing={1}
          component="div"
          direction="row"
          sx={createProfileCardStyle}
        >
          <InputField
            label="City"
            error={error.city}
            name="city"
            value={initial.city}
            onChange={(e) => changeHandler(e)}
            size="small"
            width="100%"
          />
          <InputField
            label="State"
            name="state"
            error={error.state}
            value={initial.state}
            onChange={(e) => changeHandler(e)}
            size="small"
            width="100%"
          />
        </Stack>
        <Stack
          spacing={1}
          component="div"
          direction="row"
          sx={createProfileCardStyle}
        >
          <InputField
            label="Zip Code"
            name="zipCode"
            error={error.zipCode}
            value={initial.zipCode}
            onChange={(e) => changeHandler(e)}
            type={"number"}
            size="small"
            width="100%"
          />
          <InputField
            label="Country"
            name="country"
            error={error.country}
            value={initial.country}
            onChange={(e) => changeHandler(e)}
            size="small"
            width="100%"
          />
        </Stack>
        <Box sx={{ textAlign: "center", my: "30px" }}>
          <Typography variant="base" sx={{ color: "red" }}>
            *All fields are compulsory
          </Typography>
        </Box>
        <Box sx={{ textAlign: "right", my: "20px" }}>
          <Button
            variant="outlined"
            onClick={(e) => {
             cancelHandler(e)
            }}
            sx={{ backgroundColor: "#A6ADA8", mx: "5px" }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            color="success"
            onClick={(e) => {
              saveHandler(e);
            }}
            sx={{ backgroundColor: "#91DBA1", mx: "5px" }}
          >
            Save
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default CardTwo;

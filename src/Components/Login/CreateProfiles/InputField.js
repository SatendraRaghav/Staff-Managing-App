import {
  MenuItem,
  Select,
  TextField,
  InputLabel,
  FormControl,
} from "@mui/material";
import React from "react";

const InputField = (props) => {
  const { name, label, onChange, value, width, error,type } = props;
  return (
    <div>
      <TextField
        size="small"
        label={label}
        name={name}
        type={type}
        sx={{ width: width, my: "15px" }}
        value={value}
        onChange={onChange}
        {...(error && { error: true, helperText: error })}
      />
    </div>
  );
};
export const SelectField = ({initial,changeHandler,error}) => {
  return (
    <FormControl fullWidth >
      <InputLabel id="demo-simple-select-label"  >
        Gender
      </InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        name="gender"
        // error={error.gender}
        value={initial.gender}
        onChange={(e) => changeHandler(e)}
        label="Gender"
        size="small"
      >
        <MenuItem value={"Male"}>Male</MenuItem>
        <MenuItem value={"Female"}>Female</MenuItem>
        <MenuItem value={"Transgender"}>Transgender</MenuItem>
      </Select>
    </FormControl>
  );
};

export const inputCardStyle = {
  width: { xs: "90%", sm: "60%" },
  marginRight: "auto",
  marginLeft: "auto",
  textAlign: "center",
  pt: "5vw",
  pb: "10vw",
  mt: "30vh",
  bgcolor: "#F7F7F7",
};

export const createProfileCardStyle = {
  width: "95%",
  marginLeft: "auto",
  marginRight: "auto",
  mt: "30px",
};

export default InputField;

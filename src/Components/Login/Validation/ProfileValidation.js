import { setProfileError } from "../../Redux/ProfileReducer";


const ProfileValidation = (state,dispatch) => {
    

    const temp = {};
    temp.fName = state.profileObj.fName ? "" : "This field is required";
    temp.lName = state.profileObj.lName ? "" : "This field is required";
    temp.designation = state.profileObj.designation
      ? ""
      : "This field is required";
    temp.dob = state.profileObj.dob ? "" : "This field is required";
    temp.gender = state.profileObj.gender ? "" : "This field is required";
    temp.phoneNumber =
      state.profileObj.phoneNumber.length > 9
        ? ""
        : "Phone number is either not fill or filled invalid";
    temp.address = state.profileObj.address ? "" : "This field is required";
    temp.city = state.profileObj.city ? "" : "This field is required";
    temp.state = state.profileObj.state ? "" : "This field is required";
    temp.zipCode = state.profileObj.zipCode ? "" : "This field is required";
    temp.country = state.profileObj.country ? "" : "This field is required";
    dispatch(setProfileError({ ...temp }));
    return Object.values(temp).every((x) => x === "");
  };
export default ProfileValidation
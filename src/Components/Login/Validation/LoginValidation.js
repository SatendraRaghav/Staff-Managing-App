import { setLoginError } from "../../Redux/LoginReducer";

const LoginValidation = (state,dispatch) => {
    const temp = {};
    temp.email = /.+@.+.+/.test(state.loginObj.email)
      ? ""
      : "Email is Invalid";
    temp.password =
      state.loginObj.password.length > 3
        ? ""
        : "Password is either too weak or not fill";
    dispatch(setLoginError({ ...temp }));
    return Object.values(temp).every((x) => x === "");
  };

  export default LoginValidation;
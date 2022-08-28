import {
  Typography,
  Box,
  Avatar,
  Card,
  ToggleButton,
  Grid,
} from "@mui/material";
import AddIcon from "@mui/icons-material/AddCircleRounded";
import { Stack } from "@mui/system";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import { setProfileEntries } from "../../Redux/ProfileReducer";
import axios from "axios";
import {
  setAdmin,
  setIsProfileAvailable,
  setLoginEntries,
} from "../../Redux/LoginReducer";

const AdminProfile = () => {
  const state = useSelector((state) => {
    return state.ProfileReducer;
  });
  const loginState = useSelector((state) => {
    return state.LoginReducer;
  });
  const dispatch = useDispatch();

  const deleteHandler = async (id) => {
    await axios.delete(`http://127.0.0.1:3002/profile/${id}`);
    const newProfileEntries = state.profileEntries.filter((elem) => {
      return elem.id != id;
    });

    dispatch(setProfileEntries(newProfileEntries));

    await axios.delete(`http://127.0.0.1:3002/users/${id + 1}`);
    const newLoginEntries = loginState.loginEntries.filter((elem) => {
      return elem.id != id + 1;
    });

    dispatch(setLoginEntries(newProfileEntries));
  };
  const addHandler = () => {
    dispatch(setAdmin(false));
    dispatch(setIsProfileAvailable(false));
  };

  return (
    <div>
      <Grid
        container
        sx={{ borderBottom: "2px solid gray", flexDirection: "row" }}
      >
        <Grid item xs={10}>
          <Typography sx={{ pt: "5px" }}>Management System</Typography>
        </Grid>

        <Grid item xs={2}>
          <Typography component={"div"} sx={{ fontSize: "20px" }}>
            Admin
          </Typography>
        </Grid>
      </Grid>
      <Box sx={{}}>
        <Stack
          flexWrap={"wrap"}
          direction={{ xs: "colomn", sm: "row" }}
          spacing={4}
          sx={{ mt: "50px" }}
        >
          {state.profileEntries.map((elem, index) => {
            return (
              <Box
                component={"div"}
                key={index}
                width={{ xs: "60%", sm: "30%" }}
                sx={{
                  left: { xs: "20vw", sm: "0PX" },
                  textAlign: "center",
                  position: "relative",
                }}
              >
                <Card
                  sx={{
                    textAlign: "center",
                    mb: "10px",
                    mt: "30px",
                  }}
                >
                  <Card
                    sx={{
                      backgroundColor: "tomato",
                      color: "white",
                      mb: "10px",
                    }}
                  >
                    <Typography sx={{ pt: "2px" }}>
                      Company's Employe
                    </Typography>
                  </Card>

                  <Card>
                    <Avatar
                      sx={{
                        height: 120,
                        width: 120,
                        backgroundColor: "green",
                        marginLeft: "auto",
                        marginRight: "auto",
                      }}
                    >
                      <Typography component={"div"} sx={{ fontSize: "60px" }}>
                        {elem.fName[0]}
                        {elem.lName[0]}
                      </Typography>
                    </Avatar>
                    <Box sx={{ pb: "1px" }}>
                      <Typography variant="h5">
                        {elem.fName} {elem.lName}
                      </Typography>
                      <br />
                      <Typography variant="base">{elem.designation}</Typography>
                    </Box>
                    <Box sx={{ textAlign: "right", mr: "5px" }}>
                      <ToggleButton
                        value="delete"
                        aria-label="delete"
                        onClick={() => deleteHandler(elem.id)}
                        sx={{
                          border: "0",
                        }}
                      >
                        <DeleteIcon color="error" />
                      </ToggleButton>
                    </Box>
                  </Card>
                </Card>
              </Box>
            );
          })}
          <Box
            width={{ xs: "60%", sm: "30%" }}
            sx={{
              left: { xs: "20vw", sm: "0PX" },
              textAlign: "center",
              position: "relative",
            }}
          >
            <Card
              sx={{
                textAlign: "center",
                mb: "10px",
                mt: "12px",
                pb: "60px",
                pt: "20px",
              }}
            >
              <Card
                sx={{
                  backgroundColor: "tomato",
                  color: "white",
                  mb: "10px",
                }}
              >
                <Typography sx={{ pt: "2px" }}>--</Typography>
              </Card>
              <ToggleButton value="add" sx={{ border: "none" }} onClick={addHandler}>
                <AddIcon
                  color="secondary"
                  sx={{
                    height: 120,
                    width: 120,
                  }}
                />
                <br />
              </ToggleButton>
              <Box>
                <Typography component={"div"} variant="h6">
                  Add New Employee
                </Typography>{" "}
              </Box>
            </Card>
          </Box>
        </Stack>
      </Box>
    </div>
  );
};

export default AdminProfile;

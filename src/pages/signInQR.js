import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { ToastContainer, toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import SettingsIcon from "@mui/icons-material/Settings";
import "react-toastify/dist/ReactToastify.css";
import { tokenAction } from "../redux/tokenSlice";
import whatsappImage from "../assets/images/logo whatsapp png.png";
import fakeQRcodeImage from "../assets/images/fakeQRcode.png";

const theme = createTheme();

export default function SignInQR() {
  const dispatch = useDispatch();
  const [getValues, setValues] = React.useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setValues({ ...getValues, [e.target.name]: e.target.value });
  };

  // redux
  const handleSignIn = (event) => {
    event.preventDefault();
    dispatch(tokenAction(true));
  };
  return (
    <ThemeProvider theme={theme}>
      <ToastContainer />
      <Box
        sx={{
          height: 250,
          position: "relative",
          backgroundColor: "#00A884",
        }}
      >
        {/* image */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginLeft: "300px",
            paddingTop: "40px",
          }}
        >
          <img src={whatsappImage} width={40} alt="what's app image" />
          <Box width="20px"></Box>
          <Typography variant="body1" color="white">
            WHATSAPP WEB
          </Typography>
        </Box>
      </Box>
      {/* modal */}
      <Grid
        container
        elevation={6}
        component={Paper}
        sx={{
          width: 1000,
          height: 1000,
          padding: 10,
          position: "absolute",
          top: "70%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        {/* first Grid */}
        <Grid item md={7}>
          <Typography
            color="#41525d"
            sx={{ fontWeight: 300, fontSize: "28px" }}
          >
            To use WhatsApp on your computer :
          </Typography>

          <ol>
            <li>
              <Typography
                color="#41525d"
                sx={{ lineHeight: 5, fontSize: "18px" }}
              >
                Open WhatsApp on your phone :
              </Typography>
            </li>
            <li>
              <Typography
                color="#41525d"
                sx={{ fontSize: "18px", display: "flex", alignItems: "center" }}
              >
                Tap Menu
                <MoreVertIcon
                  sx={{
                    backgroundColor: "#F9F9FA",
                    padding: "5px",
                    ml: 1,
                    mr: 1,
                  }}
                />
                or Setting
                <SettingsIcon
                  sx={{
                    backgroundColor: "#F9F9FA",
                    padding: "5px",
                    ml: 1,
                    mr: 1,
                  }}
                />
                and select Linked Devices
              </Typography>
            </li>
            <li>
              <Typography
                color="#41525d"
                sx={{ lineHeight: 5, fontSize: "18px" }}
              >
                Tap on Link a Device :
              </Typography>
            </li>
            <li>
              <Typography color="#41525d" sx={{ fontSize: "18px" }}>
                Point your phone to this screen to capture the code:
              </Typography>
            </li>
          </ol>

          <Typography color="#008069" sx={{ lineHeight: 10, fontSize: "16px" }}>
            Need help to get Started?
          </Typography>
        </Grid>
        {/* second Grid */}
        <Grid item md={5}>
          <img src={fakeQRcodeImage} alt="" />
        </Grid>
        <iframe
          width="800"
          height="350"
          src="https://www.youtube.com/embed/FOw8-8w-DPw"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </Grid>
      <Box></Box>
      {/* grey div */}
      <Box
        sx={{
          height: "100vh",
          backgroundColor: "#111B21",
        }}
      ></Box>
    </ThemeProvider>
  );
}

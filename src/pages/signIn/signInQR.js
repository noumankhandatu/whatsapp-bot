import * as React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";
import SettingsIcon from "@mui/icons-material/Settings";
import "react-toastify/dist/ReactToastify.css";
import { tokenAction } from "../../redux/tokenSlice";
import whatsappImage from "../../assets/images/logo whatsapp png.png";
import GenerateQRCode from "../../components/molecule/QRCode";
import { useStyles } from "./styles";
import axios from "axios";

export default function SignInQR() {
  const [QRString, setQRString] = React.useState(null);
  const fetchApi = async () => {
    const getString = await axios.get("http://192.168.18.87:8003/getqr");
    if (getString) {
      setQRString(getString.data.qr);
    }
  };
  console.log(QRString);
  React.useEffect(() => {
    fetchApi();
  }, []);

  // setInterval(() => {
  //   fetchApi();
  // }, 5000);

  const classes = useStyles();
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
    <Box sx={{ position: "relative" }}>
      <ToastContainer />
      <Box
        sx={{
          height: 250,
          position: "relative",
          backgroundColor: "#00A884",
        }}
      >
        {/* image */}
        <Box className={classes.greenBox}>
          <img src={whatsappImage} width={40} alt="what's app image" />
          <Box width="20px"></Box>
          <Typography variant="body1" color="white">
            WHATSAPP WEB
          </Typography>
        </Box>
      </Box>
      {/* modal */}
      <Grid container elevation={6} component={Paper} className={classes.root}>
        {/* first Grid */}
        <Grid item md={7} sm={12}>
          <Typography className={classes.h1}>
            To use WhatsApp on your computer :
          </Typography>

          <ol>
            <li>
              <Typography className={classes.h2} sx={{ lineHeight: 5 }}>
                Open WhatsApp on your phone :
              </Typography>
            </li>
            <li>
              <div className={classes.h3}>
                Tap Menu
                <MoreVertIcon className={classes.twinIcon} />
                or Setting
                <SettingsIcon className={classes.twinIcon} />
                and select Linked Devices
              </div>
            </li>
            <li>
              <Typography className={classes.h2} sx={{ lineHeight: 5 }}>
                Tap on Link a Device :
              </Typography>
            </li>
            <li>
              <Typography className={classes.h2}>
                Point your phone to this screen to capture the code:
              </Typography>
            </li>
          </ol>

          <Typography color="#008069" sx={{ lineHeight: 10, fontSize: "16px" }}>
            Need help to get Started?
          </Typography>
        </Grid>
        {/* second Grid */}
        <Grid item md={5} sm={12} sx={{ textAlign: "center" }}>
          <GenerateQRCode QRString={QRString} />
        </Grid>
        <iframe
          className={classes.video}
          src="https://www.youtube.com/embed/FOw8-8w-DPw"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </Grid>
      {/* grey div */}
      <Box className={classes.grayBox}></Box>
    </Box>
  );
}

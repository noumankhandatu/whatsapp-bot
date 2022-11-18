import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute ! important",
    top: "70% ! important",
    left: "50% ! important",
    transform: "translate(-50%, -50%) ! important",
    width: "1000px !important",
    padding: "80px ! important",
    [theme.breakpoints.down("md")]: {
      width: "600px !important",
      padding: "40px ! important",
      top: "100% ! important",
    },
    [theme.breakpoints.down("sm")]: {
      width: "300px !important",
      padding: "30px ! important",
      top: "100% ! important",
    },
  },
  greenBox: {
    display: "flex",
    alignItems: "center",
    marginLeft: "300px",
    paddingTop: "40px",
    [theme.breakpoints.down("md")]: {
      marginLeft: "20px",
      paddingTop: "60px",
    },
  },
  video: {
    width: "800px ! important",
    height: "350px ! important",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "30px",
      width: "250px ! important",
    },
  },
  twinIcon: {
    backgroundColor: "#F9F9FA",
    padding: "5px",
    ml: "10px",
    mr: "10px",
    [theme.breakpoints.down("sm")]: {
      display: "none ! important",
    },
  },
  grayBox: {
    height: "100vh",
    backgroundColor: "#111B21",
    [theme.breakpoints.down("md")]: {
      height: "200vh",
    },
  },
  h1: {
    color: "#41525d",
    fontWeight: 300,
    fontSize: "28px ! important",
    [theme.breakpoints.down("sm")]: {
      fontSize: "20px ! important",
    },
  },
  h2: {
    color: "#41525d ! important",
    fontSize: "18px ! important",
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px ! important",
    },
  },
  h3: {
    color: "#41525d ! important",
    display: "flex",
    alignItems: "center",
    fontSize: "18px ! important",
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px ! important",
    },
  },
}));

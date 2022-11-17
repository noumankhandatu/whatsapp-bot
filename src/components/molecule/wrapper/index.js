import * as React from "react";
import { makeStyles } from "@mui/styles";

const Wrapper = ({ children }) => {
  const classes = useStyles();
  return <div className={classes.root}>{children}</div>;
};

export default Wrapper;

const useStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: "190px",
    paddingRight: "190px",
    paddingTop: "40px",
  },
}));

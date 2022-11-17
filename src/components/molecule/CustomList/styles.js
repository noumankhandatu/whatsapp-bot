import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  ParentCls: {
    padding: 4,
    "&:hover": {
      cursor: "pointer",
      "& $ChildCls": {
        opacity: 1.0,
      },
    },
  },
  ChildCls: {
    transition: "all 0.35s ease-in-out",
    opacity: 0.0,
  },
  removeCls: {
    "&:hover": {
      color: "red",
    },
  },
  editCls: {
    "&:hover": {
      color: "lightBlue",
    },
  },
}));

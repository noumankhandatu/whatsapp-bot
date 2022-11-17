import * as React from "react";
import { Box, Button, Divider, Grid, Paper, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SendIcon from "@mui/icons-material/Send";
import DraftsIcon from "@mui/icons-material/Drafts";
import { useStyles } from "./styles";

function CustomList() {
  const classes = useStyles();

  // for response
  var Responses = [
    "Hello World",
    "My keyboard is not working",
    "SunShine blah Evening ",
    "Lorem is a dummy text",
  ];
  // handleEdit
  const [edit, setEdit] = React.useState(false);
  const handleEdit = () => {
    setEdit(!edit);
  };
  // handleDelete
  const [delArray, setDel] = React.useState(Responses);
  const handleDelete = (index) => {
    var filtered = delArray.filter((items, ele) => {
      console.log(ele);
      return ele !== index;
    });
    setDel(filtered);
  };

  // For messages
  var Messages = ["Testing Purpose", "Lorem Test"];
  // handleEdit
  const [editMsg, setMsg] = React.useState(false);
  const handleEditMsg = () => {
    setMsg(!editMsg);
  };
  // handleDelete
  const [delMessage, setMessage] = React.useState(Messages);
  const DeleteMessages = (index) => {
    var filtered = delMessage.filter((items, ele) => {
      console.log(ele);
      return ele !== index;
    });
    setMessage(filtered);
  };

  return (
    <Paper sx={{ padding: "15px", width: { sm: 500, md: 700, lg: 1000 } }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Typography variant="h6">
            <b>Message</b>
          </Typography>
          <br />

          {/* messages */}
          {delMessage.map((items, index) => {
            return (
              <Box key={index} className={classes.ParentCls}>
                <List>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <DraftsIcon />
                      </ListItemIcon>
                      {editMsg ? (
                        <ListItemText contentEditable="true" primary={items} />
                      ) : (
                        <ListItemText contentEditable="false">
                          {items}
                        </ListItemText>
                      )}
                      <Box
                        className={classes.ChildCls}
                        sx={{ display: "flex", flexDirection: "column" }}
                      >
                        <EditIcon
                          onClick={handleEditMsg}
                          className={classes.editCls}
                        />
                        <DeleteForeverIcon
                          onClick={() => DeleteMessages(index)}
                          className={classes.removeCls}
                        />
                      </Box>
                    </ListItemButton>
                  </ListItem>
                </List>
              </Box>
            );
          })}
        </Grid>
        <Grid item xs={6} sx={{ borderLeft: "1px solid #ededed" }}>
          <Typography variant="h6">
            <b className={classes.red}>Response</b>
          </Typography>

          <br />
          {/* response */}
          {delArray.map((items, index) => {
            return (
              <Box key={index} className={classes.ParentCls}>
                {/* <div>
                  {edit ? (
                    <div contentEditable="true">{items}</div>
                  ) : (
                    <div contentEditable="false">{items}</div>
                  )}
                </div> */}

                <List>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <SendIcon />
                      </ListItemIcon>
                      {edit ? (
                        <ListItemText contentEditable="true" primary={items} />
                      ) : (
                        <ListItemText contentEditable="false">
                          {items}
                        </ListItemText>
                      )}
                      <Box
                        className={classes.ChildCls}
                        sx={{ display: "flex", flexDirection: "column" }}
                      >
                        <EditIcon
                          onClick={handleEdit}
                          className={classes.editCls}
                        />
                        <DeleteForeverIcon
                          onClick={() => handleDelete(index)}
                          className={classes.removeCls}
                        />
                      </Box>
                    </ListItemButton>
                  </ListItem>
                </List>
              </Box>
            );
          })}

          <Box sx={{ display: "flex", float: "right", mt: 10 }}>
            <Button
              sx={{ borderRadius: "100%", width: "15px", height: 60 }}
              variant="contained"
              color="primary"
            >
              <AddIcon fontSize="large" />
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default CustomList;

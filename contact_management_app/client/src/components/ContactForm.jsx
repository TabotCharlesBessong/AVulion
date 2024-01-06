import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import FileBase from "react-file-base64";

const useStyles = makeStyles((theme) => ({
  file: {
    marginTop: "15px",
  },
}));

const ContactForm = ({open,handleClose,currentId,setCurrentId}) => {
  const classes = useStyles();

  const initialState = {
    name: "",
    email: "",
    phoneNo1: "",
    phoneNo2: "",
    address: "",
    selectedImage: "",
  };
  const [contactData, setContactData] = useState(initialState);
  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Contact Details</DialogTitle>
      <DialogContent>
        <DialogContentText>Add your contact details here</DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Good Name"
          type="text"
          fullWidth
          value={contactData.name}
          onChange={(e) =>
            setContactData({ ...contactData, name: e.target.value })
          }
        />
        <TextField
          autoFocus
          margin="dense"
          id="email"
          label="Email Address"
          type="email"
          fullWidth
          value={contactData.email}
          onChange={(e) =>
            setContactData({ ...contactData, email: e.target.value })
          }
        />
        <TextField
          autoFocus
          margin="dense"
          id="phn1"
          label="Phone Number"
          type="number"
          fullWidth
          value={contactData.phoneNo1}
          onChange={(e) =>
            setContactData({ ...contactData, phoneNo1: e.target.value })
          }
        />
        <TextField
          autoFocus
          margin="dense"
          id="phn2"
          label="Alternative Phone Number"
          type="number"
          fullWidth
          value={contactData.phoneNo2}
          onChange={(e) =>
            setContactData({ ...contactData, phoneNo2: e.target.value })
          }
        />
        <TextField
          autoFocus
          margin="dense"
          id="address"
          label="Your Address"
          type="text"
          fullWidth
          value={contactData.address}
          onChange={(e) =>
            setContactData({ ...contactData, address: e.target.value })
          }
        />
        <div className={classes.file}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setContactData({ ...contactData, selectedImage: base64 })
            }
          />
        </div>
      </DialogContent>
      <DialogActions>
        <Button color="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button color="primary" onClick={{}}>
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ContactForm;

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { grey } from "./Colors";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Logo from './images/NMS-LOGO-HD-2014_1.png';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import InputAdornment from "@mui/material/InputAdornment";
import MarkunreadIcon from "@mui/icons-material/Markunread";
import KeyIcon from '@mui/icons-material/Key';
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Styles from "../../css/Components.module.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const theme = createTheme({
  palette: {
    primary: {
      main: grey[900]
    },
  }
});

function SimpleDialog(props) {
  const { onClose, open } = props;

  const handleItemClick = (value) => {
    onClose(value);
  };

  return (

    <Dialog open={open} className={Styles.Dialog}>
      <div>
        <IconButton color="primary" className={Styles.IconBtn} >
          <input hidden accept="image/*" />
          <CloseIcon
            autoFocus
            onClick={() => handleItemClick('')} />
        </IconButton>
      </div>
      <Box className={Styles.BoxPopUp}>
        <AccountCircleIcon className={Styles.AccountIcon} sx={{ fontSize: "100px" }} />
        <DialogTitle className={Styles.h5}>Login</DialogTitle>

        <List sx={{ pt: 0 }}>
          <ListItem disableGutters>
            <Stack spacing={2}>
              <TextField label="Username" required className={Styles.TextField}
                InputProps={{
                  startAdornment: <InputAdornment position="start"><MarkunreadIcon /></InputAdornment>,
                }}
              />
              <TextField label="Password" type="password" required
                InputProps={{
                  startAdornment: <InputAdornment position="start"><KeyIcon /></InputAdornment>,
                }}
              />
              <Button>Login</Button>
            </Stack>
          </ListItem>
        </List>
      </Box>
    </Dialog>

  );
}

export default function () {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position='fixed'>
          <Toolbar sx={{ justifyContent: "space-between", marginLeft: 6 }}>
            <img src={Logo} alt={Logo} width="100px" />
            <Button variant="Text" color="inherit" onClick={handleClickOpen}>
              Login
            </Button>
            <SimpleDialog
              open={open}
              onClose={handleClose}
            />
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}
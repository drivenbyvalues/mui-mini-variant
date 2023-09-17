import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Footer from "./Footer";
import "../vendor/perfect-scrollbar.css";
import Sidebar from "./Sidebar/Sidebar";
import Main from "./Main";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    minHeight: "100vh"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: theme.sidebar.width,
    width: `calc(100% - ${theme.sidebar.width}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 20
  },
  drawer: {
    width: theme.sidebar.width,
    flexShrink: 0,
    whiteSpace: "nowrap"
  },
  drawerOpen: {
    width: theme.sidebar.width,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1
  },
  toolbar: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar
  },
  logo: {
    maxWidth: "250px",
    maxHeight: "55px"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  list: {},
  listItem: {},
  listItemIcon: {
    minWidth: "35px"
  },
  listItemTextOpen: {
    margin: 0,
    whiteSpace: "normal"
  },
  listItemTextClose: {
    display: "none"
  }
}));

export default function MiniDrawer() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={classes.root}>
        <CssBaseline />
        {/* En-tête */}
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={() => setOpen((open) => !open)}
              edge="start"
              className={classes.menuButton}
            >
              {open ? <ChevronLeftIcon /> : <MenuIcon />}
            </IconButton>
            <Typography variant="h6" noWrap>
              Mini variant drawer
            </Typography>
          </Toolbar>
        </AppBar>
        {/* Menu latéral */}
        <Sidebar open={open} />

        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Main />
        </main>
      </div>
      <Footer />
    </>
  );
}

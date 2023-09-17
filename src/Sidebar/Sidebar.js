import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Collapse, makeStyles, Tooltip } from "@material-ui/core";
import styled from "styled-components";
import PerfectScrollbar from "react-perfect-scrollbar";
import React, { useState } from "react";
import SidebarCategory from "./SidebarCategory";
import SidebarSection from "./SidebarSection";
import clsx from "clsx";
import SidebarLink from "./SidebarLink";
import initRoutes from "../routes";

const useStyles = makeStyles((theme) => ({
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
    width: "50px"
  },
  toolbar: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(0, 1),

    backgroundColor: theme.sidebar.background,
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
    zIndex: 1,
    // necessary for content to be below app bar
    ...theme.mixins.toolbar
  },
  logo: {
    maxWidth: "250px",
    maxHeight: "55px"
  },
  list: {},
  listItem: {},
  listItemIconOpen: {
    minWidth: "35px",
    color: "inherit"
  },
  listItemIconClose: {
    minWidth: "35px",
    color: "inherit",
    marginLeft: "-5px"
  },
  listItemTextOpen: {
    margin: 0,
    whiteSpace: "normal"
  },
  divider: {
    backgroundColor: theme.sidebar.color,
    opacity: 0.5
  },
  hidden: {
    display: "none !important"
  }
}));

const Scrollbar = styled(PerfectScrollbar)`
  background-color: ${(props) => props.theme.sidebar.background};
`; // border-right: 1px solid rgba(0, 0, 0, 0.12);

const Items = styled.div`
  color: ${(props) => props.theme.sidebar.color};
  /* padding-top: ${(props) => props.theme.spacing(2.5)}px;
  padding-bottom: ${(props) => props.theme.spacing(2.5)}px; */
`;

export default function Sidebar({ open }) {
  const classes = useStyles();

  // #region Initialisation de la liste des routes
  const [routes] = useState(initRoutes);

  // Returns bool[]
  function initOpenRoutes() {
    // Ouvre les collapse qui contiennent la page active
    const pathName = window.location.pathname;

    return routes.map((route) => {
      const isActive = pathName.indexOf(route.path) === 0;
      const isOpen = route.open || false;
      const isHome = route.containsHome && pathName === "/" ? true : false;

      let hasActiveChild = false;
      if (Array.isArray(route?.children)) {
        hasActiveChild = route.children.some(
          (route) => pathName.indexOf(route?.path) === 0
        );
      }

      // console.log({ route, isActive, hasActiveChild, isOpen, isHome });
      return isActive || hasActiveChild || isOpen || isHome;
    });
  }

  const [openRoutes, setOpenRoutes] = useState(() => initOpenRoutes());
  // #endregion Initialisation de la liste des routes

  function toggleOpenRoute(index) {
    setOpenRoutes((routes) =>
      routes.map((route, i) => (i === index ? !route : route))
    );
  }

  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open
        })
      }}
    >
      {/* le logo de la marque */}
      <div className={classes.toolbar}>
        <img
          className={classes.logo}
          src="https://i.imgur.com/5gJ3Vsb.png"
          alt="Dynamic Portage Salarial"
        />
      </div>

      {/* Les différents menus */}
      <Scrollbar>
        <Items>
          <List disablePadding className={classes.list}>
            {routes.map((category, index) => {
              // Les séparateurs horizontaux
              if (category === "------") {
                return <Divider className={classes.divider} key={index} />;
              }
              // Les titres de catégorie, souvent précédés d'un séparateur
              else if (typeof category === "string") {
                return (
                  <SidebarSection
                    key={index}
                    className={clsx({
                      [classes.hidden]: !open
                    })}
                  >
                    {category}
                  </SidebarSection>
                );
              }
              // Routes ayant des enfants
              else if (category?.children) {
                return (
                  <React.Fragment key={index}>
                    <Tooltip
                      key={category.id}
                      title={(!open && category.id) || ""}
                      placement="right"
                    >
                      <SidebarCategory
                        isOpen={open && !openRoutes[index]}
                        isCollapsable
                        name={category.id}
                        icon={
                          <ListItemIcon
                            className={clsx({
                              [classes.listItemIconOpen]: open,
                              [classes.listItemIconClose]: !open
                            })}
                          >
                            {category.icon}
                          </ListItemIcon>
                        }
                        button
                        onClick={() => toggleOpenRoute(index)}
                      />
                    </Tooltip>
                    <Collapse
                      in={open && openRoutes[index]}
                      timeout={!open ? 0 : "auto"} // Pas d'animation quand on ouvre/ferme la sidebar
                      // unmountOnExit
                    >
                      {category.children.map((route, index) => (
                        <SidebarLink
                          key={index}
                          name={route.id}
                          to={route.path}
                          icon={route.icon}
                          badge={route.badge}
                        />
                      ))}
                    </Collapse>
                  </React.Fragment>
                );
              }
              // Routes n'ayant pas d'enfants
              else {
                return (
                  <Tooltip
                    key={category.id}
                    title={(!open && category.id) || ""}
                    placement="right"
                  >
                    <ListItem className={classes.listItem} button>
                      <ListItemIcon
                        className={clsx({
                          [classes.listItemIconOpen]: open,
                          [classes.listItemIconClose]: !open
                        })}
                      >
                        {category.icon}
                      </ListItemIcon>
                      <ListItemText
                        className={clsx({
                          [classes.listItemTextOpen]: open,
                          [classes.hidden]: !open
                        })}
                        primary={category.id}
                      />
                    </ListItem>
                  </Tooltip>
                );
              }
            })}
          </List>
        </Items>
      </Scrollbar>
    </Drawer>
  );
}

import React from "react";
import ReactDOM from "react-dom";
import Demo from "./demo";

import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/styles";
import { ThemeProvider } from "styled-components";
import { grey } from "@material-ui/core/colors";

const primary = "#9D0718";
const secondary = "#26262C";

const theme = createTheme({
  spacing: 4,
  palette: {
    primary: {
      main: primary,
      contrastText: "#FFF"
    },
    secondary: {
      main: secondary,
      contrastText: "#FFF"
    }
  },
  header: {
    color: grey[500],
    background: "#FFF",
    search: {
      color: grey[800]
    },
    indicator: {
      background: secondary
    }
  },
  sidebar: {
    width: 260,
    color: "#FFF",
    background: secondary,
    header: {
      color: "#FFF",
      background: secondary,
      brand: {
        color: "#3a4244"
      }
    },
    footer: {
      color: "#FFF",
      background: secondary,
      online: {
        background: "#FFF"
      }
    },
    category: {
      fontWeight: 400
    },
    badge: {
      color: "#000",
      background: "#FFF"
    }
  },
  body: {
    background: "#F7F9FC"
  },
  footer: {
    color: grey[800]
  }
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <ThemeProvider theme={theme}>
      <Demo />
    </ThemeProvider>
  </MuiThemeProvider>,
  document.querySelector("#root")
);

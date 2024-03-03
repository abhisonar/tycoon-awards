import { createTheme } from "@mui/material";

const AppTheme = createTheme({
  palette: {
    primary: {
      light: "#ebfaf2",
      main: "#4B006E",
    },
    warning: {
      main: "#eed064",
      "200": "#fdfaef",
    },
    success: {
      main: "#33cc79",
      "200": "#ebfaf2",
    },
  },
});

export default AppTheme;

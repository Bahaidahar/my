import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Box, Grid } from "@mui/material";
import { singlePage } from "../info";
import Style from "./styles.module.scss";
import useScrollObserver from "shared/hooks/useScrollObserver";
import { MultiPageRoutes, SinglePageRoutes } from "app/routes";
import Navbar from "widgets/navbar";

const BaseLayout: React.FC = () => {
  const location = useLocation();

  const [active, setActive] = useState<string>(
    location.pathname === "/"
      ? "home"
      : location.pathname.slice(1, location.pathname.length)
  );
  const refHome = useScrollObserver(setActive);
  const refAbout = useScrollObserver(setActive);
  const refPortfolio = useScrollObserver(setActive);
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const handleToggleDarkMode = () => {
    const oppositeOfCurrentDarkMode = !darkMode;
    console.log(oppositeOfCurrentDarkMode);
    localStorage.setItem("darkMode", JSON.stringify(oppositeOfCurrentDarkMode));
    setDarkMode(oppositeOfCurrentDarkMode);
  };

  useEffect(() => {
    const detectedDarkMode = JSON.parse(
      localStorage.getItem("darkMode") || "false"
    );
    setDarkMode(detectedDarkMode);
  }, []);

  return (
    <Box className={darkMode ? Style.dark : Style.light}>
      <Grid
        container
        display="flex"
        flexDirection="column"
        minHeight="100vh"
        justifyContent="space-between"
      >
        <Grid item>
          <Navbar
            darkMode={darkMode}
            handleClick={handleToggleDarkMode}
            active={active}
            setActive={setActive}
          />
        </Grid>
        <Grid item flexGrow={1}>
          {singlePage ? (
            <SinglePageRoutes refs={{ refHome, refAbout, refPortfolio }} />
          ) : (
            <MultiPageRoutes />
          )}
        </Grid>
        <Grid item>
          <Box
            component="footer"
            display="flex"
            flexDirection="column"
            alignItems="center"
            py="1.5rem"
            sx={{ opacity: 0.7 }}
            width="100%"
          >
            <p>
              template created with &hearts; by{" "}
              <a href="https://paytonpierce.dev">Payton Pierce</a>
            </p>
            <p>&copy; 2023</p>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BaseLayout;

import About from "pages/about";
import Home from "pages/home";
import Portfolio from "pages/portfolio";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";


export function MultiPageRoutes() {
  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={"/about"} element={<About />} />
      <Route path={"/portfolio"} element={<Portfolio />} />
    </Routes>
  );
}

export function SinglePageRoutes({ refs }) {
  return (
    <Box mt={"3rem"}>
      <Home innerRef={refs.refHome} />
      <About innerRef={refs.refAbout} />
      <Portfolio innerRef={refs.refPortfolio} />
    </Box>
  );
}

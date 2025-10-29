import React from "react";
import { Outlet } from "react-router";
import Header from "../Header";
import Footer from "../Footer";
import { Box } from "@mui/material";

const Layout = () => {
  return (
    <>
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-between"}
        minHeight={"100vh"}
      >
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
      </Box>
    </>
  );
};

export default Layout;

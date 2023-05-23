import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <NavBar />
      <div style={{"min-height":'80vh'}}>
      
     <Outlet />
      </div>

     

      <Footer />
    </div>
  );
}

export default Layout;

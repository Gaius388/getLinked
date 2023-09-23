import NavBar from "@/components/NavBar";
import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="bg-[#150E28] min-h-screen">
      <NavBar />
      {children}
    </div>
  );
};

export default Layout;

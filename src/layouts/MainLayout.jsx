/** @format */

import { Navbar, Footer } from "@/components";
import { Outlet } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";

const MainLayout = () => {

  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Toaster />
      <Footer />
      
    </>
  );
};

export default MainLayout;

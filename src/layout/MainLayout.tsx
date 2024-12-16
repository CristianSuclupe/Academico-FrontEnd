import { Outlet } from "react-router";
import { AuthProvider } from "../context/AuthProvider";
import { NavBar } from "../components/layout/NavBar";
import { Header } from "../components/layout/Header";
import { Records } from "../components/layout/Records";
import { Footer } from "../components/layout/Footer";
import { useEffect, useState } from "react";

export const MainLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);

  useEffect(() => {
    const handleResize = () => {
      const isMobileSize = window.innerWidth < 992;
      setIsMobile(isMobileSize);
      if (!isMobileSize) {
        setIsSidebarOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    if (isMobile) {
      setIsSidebarOpen((prev) => !prev);
    }
  };

  return (
    <AuthProvider>
      <div className="grid grid-rows-[65px_auto_60px] monitor:grid-cols-[100px_auto_100px] h-screen">
        <Header toggleSidebar={toggleSidebar} />
        <NavBar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <main className="row-start-2 row-end-3 col-start-1 monitor:col-start-2 monitor:col-end-3 col-end-4 flex items-center my-12 flex-col">
          {isSidebarOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-5 monitor:hidden"
              onClick={() => setIsSidebarOpen(false)}
            ></div>
          )}
          <Outlet />
        </main>
        <Records />
        <Footer />
      </div>
    </AuthProvider>
  );
};

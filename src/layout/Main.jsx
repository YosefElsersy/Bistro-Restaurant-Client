import React, { useContext, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../../src/App.css";
import Footer from "../components/Footer";
import { AuthContext } from "../contexts/AuthProvider";
import LoadingSpinner from "../components/LoadingSpinner";

const Main = () => {
  const { pathname } = useLocation();
  const { loading } = useContext(AuthContext);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <div className="bg-prigmayBG">
      {loading ? (
        <>
        <LoadingSpinner />
        </>
      ) : (
        <>
          <div className="min-h-[9rem] md:min-h-[7.5rem]">
            <Navbar />
          </div>
          <div className="min-w-screen">
            <Outlet />
          </div>
          <Footer />
        </>
      )}
    </div>
  );
};

export default Main;

import React from "react";
import Navbar from "../components/Header/Navbar";
import {Outlet} from "react-router";
import Footer from "../components/Footer/Footer";
import { useNavigation } from "react-router";
import Spinner from "../components/Spinner/Spinner";
const AuthLayout = () => {
  const navigation = useNavigation();
  const isNavigating = Boolean(navigation.location);
  return (
    <div>
      <header className="md:w-10/12 mx-auto py-2">
        <Navbar />
      </header>
      <main className="min-h-[calc(100vh-405px)] md:w-10/12 mx-auto">
      {isNavigating && <Spinner />}
        <Outlet />
      </main>
      <footer className="bg-secondary">
        <Footer />
      </footer>
    </div>
  );
};

export default AuthLayout;

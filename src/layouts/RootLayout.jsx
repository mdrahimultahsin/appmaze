import React from "react";

import Navbar from "../components/Header/Navbar";
import {Outlet} from "react-router";
import Footer from "../components/Footer/Footer";
import {useNavigation} from "react-router";
import Spinner from "../components/Spinner/Spinner";

const RootLayout = () => {
  const navigation = useNavigation();
  const isNavigating = Boolean(navigation.location);
  return (
    <>
      <header className=" py-3 border-base-300 border ">
        <Navbar />
      </header>
      <main className="md:w-10/12 mx-auto min-h-[calc(100vh-402px)] pb-10 px-4 ">
        <section>
          {isNavigating && <Spinner />}
          <Outlet />
        </section>
      </main>
      <footer className="bg-secondary">
        <Footer />
      </footer>
    </>
  );
};

export default RootLayout;

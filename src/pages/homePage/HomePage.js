import React from 'react'
import "./HomePage.css";
import Head from "../../components/Head";
import Header from "../header/Header"
import Footer from "../footer/Footer";

const HomePage = () => {
  return (
    <section>
        <Head title="StoreHub || Home" description="HomePage"/>
        <Header />
          <h1> HOMEPAGE... </h1>
        <Footer />
    </section>
  );
};


export default HomePage;
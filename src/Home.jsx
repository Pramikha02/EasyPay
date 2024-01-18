import React from "react";
import { BsApple } from "react-icons/bs";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import phones from "./images/phones.png";
import Working from "./Working";
import Use from "./Use";
import Money from "./Money";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
const Home = () => {
  return (
    <>
      <header>
        <section className="container main-hero-container">
          <div className="row">
            <div className="col-12 col-lg-6 header-left side d-flex justify-content-center align-align-items-start flex-column">
              <h1 className="display-2 heading">
                India's Most-loved Payments App
              </h1>
              <p className="main-hero-para">
                Recharge & pay bills, book flights & movie tickets, open a
                savings account, invest in stocks & mutual funds, and do a lot
                more.
              </p>
              <button className="btnn">
                Download EasyPay App <IoLogoGooglePlaystore /> <BsApple />
              </button>
            </div>
            <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center">
              <img src={phones} alt="LogoPic" className="img-fluid imgLogo" />
            </div>
          </div>
        </section>
        <Working />
        <Use />
        <Money />
        <ContactUs />
      </header>
    </>
  );
};

export default Home;

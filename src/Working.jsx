import React, { useState } from "react";
import workAPI from "./API/workAPI";

const Working = () => {
  const [api, setApi] = useState(workAPI);
  console.log(api);

  return (
    <>
      <div className="work-container container">
        <h1 className="main-heading text-center">Our Features</h1>
        <div className="row cards">
          <div className="col-12 col-lg-4 text-center work-container-subdiv">
            <div className="optionone">
              <div className="fontAwesome">
                <i class="fa-solid fa-indian-rupee-sign fa-4x"></i>
              </div>
              <h2 className="sub-heading">UPI Money Transfer</h2>
              <p className="main-hero-para w-100">
                Pay anyone, everywhere. Make contactless & secure payments
                in-stores or online using EasyPay Wallet or Directly from your
                Bank Account. Plus, send & receive money from anyone
              </p>
            </div>
            <div className="optiontwo">
              <i class="fa-solid fa-bus fa-4x"></i>
              <h2 className="sub-heading">Book & Buy on EasyPay</h2>
              <p className="main-hero-para w-100">
                Book Your Movie Ticekts , Flight Tickets , Bus Tickets , Train
                Tickets , International Flights and Invest in Stocks through
                EasyPay
              </p>
            </div>
            <div className="optionthree">
              <dov className="fontAwesome">
                <i class="fa-solid fa-receipt fa-4x"></i>
              </dov>
              <h2 className="sub-heading">Recharge & Pay Bills on EasyPay</h2>
              <p className="main-hero-para w-100">
                Recharge Prepaid Mobile , Pay Rent , Electricity Bills , DTH
                Connection , Book Gas Cylinders on EasyPay
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Working;

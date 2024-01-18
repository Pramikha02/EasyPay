import React from "react";

const Money = () => {
  return (
    <>
      <section className="Money">
        <div className="head">
          <h1>How to Send Money</h1>
        </div>
        <div className="how">
          <div className="firstMoney">
            <div className="fontAwesome">
              <i class="fa-solid fa-download fa-2x"></i>
            </div>
            <h1>Register Yourself</h1>
            <p>Register Yourself in the EasyPay app and do the KYC First.</p>
          </div>
          <div className="secondMoney">
            <div className="fontAwesome">
              <i class="fa-solid fa-circle-check fa-2x"></i>
            </div>
            <h1>Verify Yourself</h1>
            <p>
              Verify Yourself in the EasyPay app, Documents Required are Your
              Aadhar Card and Pan Card with small Passport Size Photo of yours.
            </p>
          </div>
          <div className="thirdMoney">
            <div className="fontAwesome">
              <i class="fa-solid fa-money-check-dollar fa-2x"></i>
            </div>
            <h1>Add Recipient's Bank Details</h1>
            <p>
              Add Recipient Bank Account Details Such as IFSC Code , Account
              Number , Recipient's Name etc.
            </p>
          </div>
          <div className="fourthMoney">
            <div className="fontAwesome">
              <i class="fa-solid fa-file-invoice-dollar fa-2x"></i>
            </div>
            <h1>Pay For Your Transfer</h1>
            <p>
              Input the amount to transfer and if the number is valid number,
              you will see green tick with the amount.
            </p>
          </div>
          <div className="fifthMoney">
            <div className="fontAwesome">
              <i class="fa-solid fa-check-double fa-2x"></i>
            </div>
            <h1>Proceed to Pay</h1>
            <p>Proceed To pay the amount , For that click the Proceed Button</p>
          </div>
          <div className="sixthMoney">
            <div className="fontAwesome">
              <i class="fa-solid fa-mobile-retro fa-2x"></i>
            </div>
            <h1>Enter UPI Pin</h1>
            <p>
              Enter the 4 Digit UPI Pin and its Done , "Your money has been
              successfully sent" will be shown on the screen
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Money;

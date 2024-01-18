import React from "react";
import using from "./images/using.jpg";
import customer1 from "./images/customer1.png";
import call from "./images/call.jpg";

const Use = () => {
  return (
    <>
      <section className="common">
        <div className="container mb-5">
          <div className="row use-row">
            <h1 className="text-center">How To Use The App ?</h1>
            <div className="col-12 col-lg-5 text-center left-side-use">
              <img src={using} alt="How To Use it ?" />
            </div>
            <div className="col-12 col-lg-7 right-side-use">
              <div className="manual">
                <div className="first">
                  <h2>How To Use EasyPay</h2>
                  <p>
                    You can use EasyPay for many different things such as online
                    recharge, shopping, pay fees, bills and a lot more thing.
                    You will need to at least one of your bank account to your
                    EasyPay account and then you can enjoy India’s fastest
                    online transactions and payment service.{" "}
                  </p>
                </div>
                <div className="second">
                  <h2>
                    How to transfer money back from EasyPay to bank account?
                  </h2>
                  <p>
                    Follow the steps to transfer money from EasyPay wallet to a
                    bank account
                    <br />
                    1. Open your ‘Passbook in your EasyPay app
                    <br /> 2. Click on ‘Send Money to Bank’
                    <br /> 3. Enter the transaction amount and account details
                    <br /> 4. Click on ‘Proceed’
                    <br /> 5. Your transaction is complete. Note that EasyPay
                    charges you 4% of the transaction when you transfer money
                    from your EasyPay wallet to a bank account.
                  </p>
                </div>
                <div className="third">
                  <h2>How to pay through EasyPay?</h2>
                  <p>
                    1. Tap on ‘Pay’ on EasyPay app
                    <br />
                    2. Scan the QR code or enter the number of the beneficiary
                    that you want to pay
                    <br />
                    3. Enter the amount
                    <br />
                    4. Pay using your EasyPay wallet or add money to your
                    EasyPay wallet from your bank account if the wallet has
                    insufficient funds
                    <br />
                    5. The money is paid to the beneficiary{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="common">
        <div className="container mb-5">
          <div className="row use-row">
            <h1 className="text-center">Our Support System</h1>
            <div className="col-12 col-lg-7 right-side-use bottom-right-use">
              <div className="manual">
                <div className="first">
                  <div className="bottom-second">
                    <i class="fa-solid fa-phone fa-2x"></i>
                    <h2>24X7 Help</h2>
                  </div>
                  <p>
                    If we fall short of your expectations in any way, let us
                    know..{" "}
                  </p>
                </div>
                <div className="second" style={{ margin: "20px 0px" }}>
                  <div className="bottom-second">
                    <i class="fa-solid fa-hand-holding-hand fa-2x"></i>
                    <h2>100% Assurance</h2>
                  </div>
                  <p>
                    If you face any issue, your money is immediately refunded.
                    Sit back shop on.
                  </p>
                </div>
                <div className="third">
                  <div className="bottom-second">
                    <i class="fa-solid fa-hand-holding-medical fa-2x"></i>
                    <h2>EasyPay Trust</h2>
                  </div>
                  <p>
                    Your money is yours. All refunds come with no question asked
                    guarantee.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-5 text-center bottom-side-use">
              <img
                src={call}
                alt="Support System"
                style={{
                  width: "220px",
                  height: "280px",
                  objectFit: "fill",
                  marginTop: "10px",
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Use;

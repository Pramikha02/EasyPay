import React from "react";
import { useState } from "react";
import contactus from "./images/contactus.png";
const ContactUs = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
    message: "",
  });
  let name, value;
  const postUserData = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  // Using Firebase
  const submitData = async (e) => {
    e.preventDefault();
    const { firstName, lastName, phone, email, address, message } = userData;
    if (firstName && lastName && phone && email && address && message) {
      const res = await fetch(
        "https://reactfirebasewebsite-45aa5-default-rtdb.firebaseio.com/userDataRecords.json",
        {
          method: "POST",
          headers: {
            "Content-Tyoe": "application/json",
          },
          body: JSON.stringify({
            firstName,
            lastName,
            phone,
            email,
            address,
            message,
          }),
        }
      );
      if (res) {
        setUserData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          address: "",
          message: "",
        });
        alert("Data Stored");
      } else {
        alert("Please Fill the Data");
      }
    } else {
      alert("Please Fill The Data");
    }
  };

  return (
    <>
      <section className="contactUs">
        <div className="main_container">
          <div className="contact-left-side">
            <h1 className="contact-left-heading">Contact Us</h1>
            <p className="contact-left-para">
              For Any Kind of Doubt or Query . Please Fill This Contact Form and
              Submit your Query. Our Team will reach to you within 2 Business
              Days
            </p>
            <figure>
              <img src={contactus} alt="" className="img-fluid" />
            </figure>
          </div>
          <div className="contact-right-side">
            <form method="POST">
              <div className="input-field-first">
                <div className="contact-input">
                  <input
                    type="text"
                    name="firstName"
                    id=""
                    placeholder="Enter Your Firstname"
                    value={userData.firstName}
                    onChange={postUserData}
                  />
                </div>
                <div className="contact-input">
                  <input
                    type="text"
                    name="lastName"
                    id=""
                    placeholder="Enter Your Lastname"
                    value={userData.lastName}
                    onChange={postUserData}
                  />
                </div>
              </div>
              <div className="input-field-second">
                <div className="contact-input">
                  <input
                    type="text"
                    name="phone"
                    id=""
                    placeholder="Enter Your Phone Number"
                    value={userData.phone}
                    onChange={postUserData}
                  />
                </div>
                <div className="contact-input">
                  <input
                    type="email"
                    name="email"
                    id=""
                    placeholder="Enter Your Email Address"
                    value={userData.email}
                    onChange={postUserData}
                  />
                </div>
              </div>
              <div className="input-address">
                <input
                  type="text"
                  name="address"
                  id=""
                  placeholder="Add Address"
                  value={userData.address}
                  onChange={postUserData}
                />
              </div>
              <div className="input-query">
                <input
                  type="text"
                  name="message"
                  id=""
                  placeholder="Enter Your Query"
                  value={userData.message}
                  onChange={postUserData}
                />
              </div>
              <div class="mb-3 form-check input-checkbox">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                />
                <label class="form-check-label" for="exampleCheck1">
                  <p className="checkbox-para">
                    I Agree that EasyPay may contact me at the email address or
                    phone number submitted above
                  </p>
                </label>
              </div>
              <button type="submit" className="input-btn" onClick={submitData}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;

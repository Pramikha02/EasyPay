import React from "react";

const Footer = () => {
  return (
    <>
      <footer class="page-footer font-small blue pt-4 footer">
        <div class="container-fluid text-center text-md-left">
          <div class="row">
            <div class="col-md-6 mt-md-0 mt-3 footer-content">
              <h3 class="text-uppercase">EasyPay</h3>
              <p>
                EasyPay is a India's No.1 Payment Website which has many
                features including the UPI Payment. 24X7 Support and you can
                book your tickets using EasyPay. Everything at just one place
              </p>
            </div>

            <hr class="clearfix w-100 d-md-none pb-3" />

            <div class="col-md-3 mb-md-0 mb-3 footer-links">
              <h3 class="text-uppercase">Connect With Us..</h3>
              <div className="footer-icons">
                <ul class="list-unstyled">
                  <li>
                    <a href="#!">
                      <i class="fa-brands fa-facebook fa-2x"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <i class="fa-brands fa-twitter fa-2x"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <i class="fa-brands fa-linkedin fa-2x"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <i class="fa-brands fa-whatsapp fa-2x"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="footer-copyright text-center py-3">
          © 2022 EasyPay:
          <a href="/"> EasyPay.com</a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
